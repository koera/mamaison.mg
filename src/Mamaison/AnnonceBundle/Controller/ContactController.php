<?php
/**
 * Created by Koera.
 * User: trustylabs
 * Date: 9/17/18
 * Time: 9:29 AM
 */

namespace Mamaison\AnnonceBundle\Controller;

use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class AdminController
 * @package Mamaison\AnnonceBundle\Controller
 */
class ContactController extends Controller
{
    /**
     * @Route("/contact/agent/", name="contact.agent")
     * @Method({"POST"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function contactAgentAction(Request $request){
        $nom = $request->get('nom');
        $telephone = $request->get('telephone');
        $email = $request->get('email');
        $msg = $request->get('message');
        $agent = $request->get('agent');

        $em = $this->getDoctrine()->getManager();
        /** @var User $user */
        $user = $em->getRepository(User::class)
            ->find($agent);
        if($user){
            $message = (new \Swift_Message('contact sur Mamaison.mg'))
                ->setFrom('no-reply@mamaison.mg')
                ->setTo($user->getEmail())
                ->setBody(
                    $this->renderView(
                        'emails/contact.html.twig',
                        array(
                            'user'      => $user,
                            'nom'       => $nom,
                            'telephone' => $telephone,
                            'email'     => $email,
                            'msg'       => $msg
                        )
                    ),
                    'text/html'
                );
            $this->get('mailer')->send($message);

            $this->addFlash("success", "Votre message a ete envoyer");
        }

        //redirect to last route

        $session = $request->getSession();
        $lastRoute = $session->get('last_route', array());
        return $this->redirectToRoute($lastRoute['name'],$lastRoute['params']);

    }

}