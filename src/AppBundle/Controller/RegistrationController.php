<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/5/18
 * Time: 11:22 AM
 */

namespace AppBundle\Controller;


use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class RegistrationController
 * @package AppBundle\Controller
 *
 * @Route("/registration")
 */
class RegistrationController extends Controller{


    /**
     * @Route("/", name="registration_simple_user")
     */
    public function registerSimpleUserAction(Request $request){
        $user = new User();
        $form = $this->createForm('AppBundle\Form\UserType', $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user->setIsActive(false);
            $user->setType('simple');
            $user->setActivationToken($this->random(32));
            $user->setActivationTokenDelay(strtotime("+3 days"));

            $password = $this->get('security.password_encoder')
                ->encodePassword($user, $user->getPassword());
            $user->setPassword($password);

            /* send email registration here*/

            $message = (new \Swift_Message('Registration confirmation'))
                ->setFrom('no-reply@mamaison.mg')
                ->setTo($user->getEmail())
                ->setBody(
                    $this->renderView(
                        'emails/registration_simple.html.twig',
                        array('user' => $user)
                    ),
                    'text/html'
                );

            $this->get('mailer')->send($message);

            $em->persist($user);
            $em->flush();
//            return $this->redirectToRoute('user_show', array('id' => $user->getId()));
            return $this->render('registration/check_email.html.twig',array('user'=>$user));
        }

        return $this->render('registration/simple_user.form.html.twig',array(
            'user' => $user,
            'form' => $form->createView(),
        ));
    }



    /**
     * @Route("/agence-immobiliere", name="registration_society_user")
     */
    public function registerSocietyUserAction(Request $request){
        $user = new User();
        $form = $this->createForm('AppBundle\Form\UserType', $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user->setIsActive(false);
            $user->setType('society');
            $user->setActivationToken($this->random(32));
            $user->setActivationTokenDelay(strtotime("+3 days"));

            $password = $this->get('security.password_encoder')
                ->encodePassword($user, $user->getPassword());
            $user->setPassword($password);

            /* send email registration here*/

            $message = (new \Swift_Message('Registration confirmation'))
                ->setFrom('no-reply@mamaison.mg')
                ->setTo($user->getEmail())
                ->setBody(
                    $this->renderView(
                        'emails/registration_society.html.twig',
                        array('user' => $user)
                    ),
                    'text/html'
                );

            $this->get('mailer')->send($message);

            $em->persist($user);
            $em->flush();
//            return $this->redirectToRoute('user_show', array('id' => $user->getId()));
            return $this->render('registration/check_email.html.twig',array('user'=>$user));
        }

        return $this->render('registration/society_user.form.html.twig',array(
            'user' => $user,
            'form' => $form->createView(),
        ));
    }


    private function random($length = 16)
    {
        if (function_exists('openssl_random_pseudo_bytes'))
        {
            $bytes = openssl_random_pseudo_bytes($length * 2);

            if ($bytes === false)
            {
                // throw exception that unable to create random token
            }

            return substr(str_replace(array('/', '+', '='), '', base64_encode($bytes)), 0, $length);
        }

        return ;
    }

    /**
     * @param Request $request
     *
     * @Route("/account/confirm/{token}", name="confirm_account")
     */
    public function confirmationAction(Request $request, $token){
        $em = $this->getDoctrine()->getManager();
        /** @var User $user */
        $user = $this->getDoctrine()->getRepository(User::class)
            ->findOneBy(array('activationToken'=>$token));
        if(!is_null($user)){

            if(!$user->getIsActive()){
                $now = strtotime('now');
                // if token delay is ok
                if($now < $user->getActivationTokenDelay()){
                    $user->setIsActive(true);
                    $em->persist($user);
                    $em->flush();
                    if($user->getType() == 'simple'){
                        return $this->redirectToRoute('mon-compte.edit');
                    }elseif($user->getType() == 'society'){
                        return $this->redirectToRoute('compte.edit',['societyName'=>$user->getSocietyName()]);
                    }
                }else{
                    // token delay is over
                    return new Response("This token delay is over, please get a new token");
                }

            }else{
                return new Response('token is already used, this link is not accessible');
            }
        }else{
            // user not found
            return new Response("we cant find this user");
        }

    }

}