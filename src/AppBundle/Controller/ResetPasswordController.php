<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/12/18
 * Time: 2:45 PM
 */

namespace AppBundle\Controller;


use AppBundle\Entity\User;
use AppBundle\Model\ResetPassword;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;


/**
 * Class ResetPasswordController
 * @package AppBundle\Controller
 *
 * @Route("/reset")
 */
class ResetPasswordController extends Controller
{

    /**
     * @param Request $request
     * @return Response
     *
     * @Route("/", name="reset.index")
     * @Method({"GET"})
     */
    public function indexAction(Request $request){
        return $this->render('reset/index.html.twig');
    }

    /**
     * @param Request $request
     * @return Response
     *
     * @Route("/send-email", name="reset.send-email")
     * @Method({"POST"})
     */
    public function requestAction(Request $request){
        if($request->get('_email')){
            $em = $this->getDoctrine()->getManager();
            $user = $em->getRepository(User::class)
                ->findOneBy(['email'=>$request->get('_email')]);
            if(!is_null($user)){
                $token = $this->random(32);
                $user->setResetPasswordToken($token);
                $em->persist($user);
                $em->flush();
                $message = (new \Swift_Message('Reset password'))
                    ->setFrom('no-reply@mamaison.mg')
                    ->setTo($request->get('_email'))
                    ->setBody(
                        $this->renderView(
                            'emails/reset_password.html.twig',
                            array('user'=>$user)
                        ),
                        'text/html'
                    );
                $this->get('mailer')->send($message);
                return new Response("An email has been sent to ".$user->getEmail());
            }else{
                return new Response("We can't find this email adress");
            }
        }
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("/reset-my-password/{token}", name="reset.change")
     * @Method({"GET","POST"})
     */
    public function changePasswordAction(Request $request,$token){
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)
            ->findOneBy(['resetPasswordToken'=>$token]);
        if(!is_null($user)){
            $resetPassword = new ResetPassword();
            $resetForm = $this->createForm('AppBundle\Form\ResetPasswordType', $resetPassword);
            $resetForm->handleRequest($request);
            if ($resetForm->isSubmitted() && $resetForm->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $encoder = $this->container->get('security.password_encoder');
                $password = $encoder->encodePassword($user, $resetPassword->getPassword());
                $user->setPassword($password);
                $em->persist($user);
                $em->flush();
                if($user->getType() == 'simple'){
                    return $this->redirectToRoute('mon-compte.edit');
                }
                elseif($user->getType() == 'society'){
                    return $this->redirectToRoute('compte.edit',['societyName'=>$user->getSocietyName()]);
                }
            }
            return $this->render('reset/reset.html.twig',
                ['form'=>$resetForm->createView()]
            );

        }else{
            return new Response("We can't find this token");
        }
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

}