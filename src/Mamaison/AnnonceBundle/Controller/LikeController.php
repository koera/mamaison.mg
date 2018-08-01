<?php
/**
 * Created by PhpStorm.
 * User: koera
 * Date: 7/31/18
 * Time: 2:18 PM
 */

namespace Mamaison\AnnonceBundle\Controller;


use AppBundle\Entity\User;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class LikeController extends Controller
{
    /**
     * @param Request $request
     * @Route("/like/{annonce_id}", name="like")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function likeAction(Request $request,$annonce_id){
        // get annonce
        $annonce = $this->getDoctrine()->getRepository(Annonce::class)
            ->find($annonce_id);
        // get user
        /** @var User $user */
        $user = $this->getUser();

        $user->addAnnonce($annonce);
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        //redirect to last route
        $session = $request->getSession();
        $lastRoute = $session->get('last_route', []);
        return $this->redirectToRoute($lastRoute['name'],$lastRoute['params']);

    }

    /**
     * @param Request $request
     * @Route("/unlike/{annonce_id}", name="unlike")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function unlikeAction(Request $request,$annonce_id){
        // get annonce
        $annonce = $this->getDoctrine()->getRepository(Annonce::class)
            ->find($annonce_id);
        // get user
        /** @var User $user */
        $user = $this->getUser();

        $user->removeAnnonce($annonce);
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        //redirect to last route
        $session = $request->getSession();
        $lastRoute = $session->get('last_route', []);
        $params = [];
        foreach($lastRoute['params'] as $key => $value)
            $params = [$key => $value];
        return $this->redirectToRoute($lastRoute['name'],$params);
    }

}