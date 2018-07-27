<?php

namespace Mamaison\AnnonceBundle\Controller;

use Mamaison\AnnonceBundle\Entity\Annonce;
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
            ->findAll();
        return $this->render('avendre/all.html.twig',array('annonces'=>$annonces));
    }


}