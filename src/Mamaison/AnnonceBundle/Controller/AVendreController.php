<?php

namespace Mamaison\AnnonceBundle\Controller;

use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\TypeAnnonce;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class AVendreController
 * @package Mamaison\AnnonceBundle\Controller
 * @Route("/a-vendre")
 */
class AVendreController extends Controller {

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/", name="a_vendre_tous")
     */
    public function indexAction(Request $request){
        // get all annonces
        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->findByWithPagination(
                ['typeAnnonce'=>$this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A Vendre'])],1,1
            );
        dump($annonces);



        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote() as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('avendre/all.html.twig',
            array('annonces'=>$annonces,'annoncePlusNote' => $annonceLesPlusNoter));
    }


}