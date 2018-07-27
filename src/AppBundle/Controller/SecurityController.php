<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/5/18
 * Time: 1:27 PM
 */

namespace AppBundle\Controller;


use AppBundle\Entity\ChangePassword;
use AppBundle\Entity\ProfileSimpleUser;
use AppBundle\Entity\User;
use AppBundle\Form\ChangePasswordType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

class SecurityController extends Controller
{


    /**
     * @return Response
     * @param Request $request
     * @Route("/login", name="login")
     * @throws \Facebook\Exceptions\FacebookSDKException
     */
    public function loginAction(Request $request){

        $authenticationUtils = $this->get('security.authentication_utils');

        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();


        /* connect fb */
        $fb = new \Facebook\Facebook([
                'app_id' => $this->getParameter('fb_app_id'), 'app_secret' => $this->getParameter('fb_app_secret')]
        );
        $helper = $fb->getRedirectLoginHelper();// to set redirection url
        $permissions = ['email'];// set required permissions to user details

        $loginFbUrl = $helper->getLoginUrl($this->getParameter('fb_app_url_redirect'),$permissions);
        /* end connect fb */

        /* connect via google */
        $client= new \Google_Client();
        $client->setApplicationName($this->getParameter('google_app_name'));// to set app name
        $client->setClientId($this->getParameter('google_app_client_id'));// to set app id or client id
        $client->setClientSecret($this->getParameter('google_app_client_secret'));// to set app secret or client secret
        $client->setRedirectUri($this->getParameter('google_app_url_redirect'));// to set redirect uri
        $client->addScope('https://mail.google.com/');
        $loginGoogleUrl= $client->createAuthUrl();// to get login url
        /* end connect google */



        return $this->render('security/login.html.twig', array(
            'last_username' => $lastUsername,
            'error'         => $error,
            'fb_login_token'=> $loginFbUrl,
            'google_login_token' => $loginGoogleUrl
        ));
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Facebook\Exceptions\FacebookSDKException
     * @Route("/login/facebook/check",name="fb_check_login")
     */
    public function loginCheckFbAction(Request $request){
        if (!session_id()) {
            session_start();
        }

        $fb = new \Facebook\Facebook([
                'app_id' => $this->getParameter('fb_app_id'), 'app_secret' => $this->getParameter('fb_app_secret')]
        );

        $helper = $fb->getRedirectLoginHelper();

        $_SESSION['FBRLH_state']=$_GET['state'];

        try {
            $accessToken = $helper->getAccessToken();// to fetch access token
        } catch (Facebook\Exceptions\FacebookResponseException $e) {
// When facebook server returns error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
// when issue with the fetching access token
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
        if (!isset($accessToken))// checks whether access token is in there or not
        {
            if ($helper->getError()) {
                header('HTTP/1.0 401 Unauthorized');
                echo "Error: " . $helper->getError() . "\n";
                echo "Error Code: " . $helper->getErrorCode() . "\n";
                echo "Error Reason: " . $helper->getErrorReason() . "\n";
                echo "Error Description: " . $helper->getErrorDescription() . "\n";
            } else {
                header('HTTP/1.0 400 Bad Request');
                echo 'Bad request';
            }
            exit;
        }
        try {
// to get required fields using access token
            $response = $fb->get('me?fields=id,name,picture', $accessToken->getValue());
        } catch (Facebook\Exceptions\FacebookResponseException $e)// throws an error if invalid fields are specified
        {
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
        $user_from_fb = $response->getGraphUser();// to get user details


        $em = $this->getDoctrine()->getManager();

        /// Start retrieve user
        $user = $this->getDoctrine()->getManager()->getRepository(User::class)
            ->findOneBy(array('facebookId' => $user_from_fb['id']));
        /// End Retrieve user

        // Check if the user exists !
        if(!$user){

            $profile = new ProfileSimpleUser();
            $profile->setNom($user_from_fb['name'])
                ->setAvatarUrlFb('https://graph.facebook.com/'.$user_from_fb['id'].'/picture?type=large')
                ->setIsSigninWithFb(true);
            $em->persist($profile);

            $new_user = new User();
            $fbUser = 'fb_user'.rand(1,10000000);
            $new_user->setFacebookId($user_from_fb['id'])
                ->setType('simple')
                ->setIsActive(true)
                ->setUsername($fbUser)
                ->setEmail($fbUser.'@example.com')
                ->setProfileSimpleUser($profile);
            $em->persist($new_user);

            $em->flush();
            $user = $new_user;
        }

        // The third parameter "main" can change according to the name of your firewall in security.yml
        $token = new UsernamePasswordToken($user, null, 'main', $user->getRoles());
        $this->get('security.token_storage')->setToken($token);

        // If the firewall name is not main, then the set value would be instead:
        // $this->get('session')->set('_security_XXXFIREWALLNAMEXXX', serialize($token));
        $this->get('session')->set('_security_main', serialize($token));

        // Fire the login event manually
        $event = new InteractiveLoginEvent($request, $token);
        $this->get("event_dispatcher")->dispatch("security.interactive_login", $event);

        /*
         * Now the user is authenticated !!!!
         * Do what you need to do now, like render a view, redirect to route etc.
         */
        return $this->redirectToRoute('redirect-login');
    }

    /**
     * @param Request $request
     * @Route("/login/google/check",name="google_check_login")
     */
    public function loginCheckGoogleAction(Request $request){
        $client= new \Google_Client();
        $client->setApplicationName($this->getParameter('google_app_name'));// to set app name
        $client->setClientId($this->getParameter('google_app_client_id'));// to set app id or client id
        $client->setClientSecret($this->getParameter('google_app_client_secret'));// to set app secret or client secret
        $client->setRedirectUri($this->getParameter('google_app_url_redirect'));// to set redirect uri
        $client->addScope('https://mail.google.com/');
        $service = new \Google_Service_Oauth2($client);
        $code=$client->authenticate($request->query->get('code'));// to get code
        $client->setAccessToken($code);// to get access token by setting of $code
        $userDetails=$service->userinfo->get();// to get user detail by using access token
        var_dump($userDetails);die;
    }

    /**
     * @return Response
     *
     * @Route("/login-check", name="loginCheck")
     */
    public function loginCheckAction(Request $request){

    }


    /**
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     *
     * @Route("/logout", name="logout")
     */
    public function logoutAction(){
        $this->get('security.token_storage')->setToken(null);
        $this->get('request')->getSession()->invalidate();
        return $this->redirectToRoute('login');
    }

    /**
     * Redirect after login page
     *
     * @Route("/redirect-login",name="redirect-login")
     */
    public function redirectAction(){
        /** @var User $user */
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }
        if($user->getType() == 'simple'){
            return $this->redirectToRoute('mon-compte.edit');
        }
        elseif($user->getType() == 'society'){
            return $this->redirectToRoute('compte.edit',['societyName'=>$user->getSocietyName()]);
        }
    }

}