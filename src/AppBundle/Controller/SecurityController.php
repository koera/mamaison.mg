<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/5/18
 * Time: 1:27 PM
 */

namespace AppBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class SecurityController extends Controller
{


    /**
     * @return Response
     *
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request){

        $authenticationUtils = $this->get('security.authentication_utils');

        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', array(
            'last_username' => $lastUsername,
            'error'         => $error
        ));
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


}