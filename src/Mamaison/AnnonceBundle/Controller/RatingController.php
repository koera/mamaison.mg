<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 8/1/18
 * Time: 11:38 AM
 */

namespace Mamaison\AnnonceBundle\Controller;


use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Rating;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class RatingController extends Controller
{

    /**
     * @param Request $request
     * @Route("/rating/{annonce_id}/{value}", name="rating")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function ratingAction(Request $request,$annonce_id,$value){
        // get annonce
        $annonce = $this->getDoctrine()->getRepository(Annonce::class)
            ->find($annonce_id);
        // get user
        /** @var User $user */
        $user = $this->getUser();


        // get rating from user id and annonce id
        /** @var Rating $rating */
        $rating = $this->getDoctrine()->getRepository(Rating::class)
            ->findOneBy(['annonce'=>$annonce,'user'=>$user]);
        if($rating){
            $rating->setRatingValue($value);
        } else {
            $rating = new Rating();

            $rating->setAnnonce($annonce)
                ->setUser($user)
                ->setRatingValue($value);
        }

        $em = $this->getDoctrine()->getManager();
        $em->persist($rating);
        $em->flush();

        //redirect to last route
        $session = $request->getSession();
        $lastRoute = $session->get('last_route', []);
        return $this->redirectToRoute($lastRoute['name'],$lastRoute['params']);

    }

}