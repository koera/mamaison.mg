<?php

namespace Mamaison\AnnonceBundle\Controller;

use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\TypeAnnonce;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class AVendreController
 * @package Mamaison\AnnonceBundle\Controller
 */
class AVendreController extends Controller {

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/{ville}/propriete-a-vendre/", name="a_vendre_tous")
     */
    public function indexAction(Request $request,$ville){

        $ville = $request->cookies->get('ville');
        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }

        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceByType('A vendre',$ville);

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $annonces,
            $request->query->getInt('page', 1),
            4
        );

        return $this->render('annonce/type.html.twig',
            array('annonces'=>$pagination));
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/{ville}/propriete-a-vendre/{slug}", name="a_vendre_category")
     */
    public function categoryAction(Request $request,$slug,$ville){
        $slug = explode ('-', $slug);
        $categoryName = '';

        foreach ($slug as $key => $word)
            $categoryName .= $word.' ';

        $type = 'A Vendre';
        $ville = $request->cookies->get('ville');
        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }

        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceByTypeAndCategory($ville,$type,$categoryName);

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $annonces,
            $request->query->getInt('page', 1),
            4
        );

        return $this->render('annonce/category.html.twig',
            array('annonces'=>$pagination));
    }


}