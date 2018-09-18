<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/6/18
 * Time: 9:08 AM
 */

namespace Mamaison\AnnonceBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\TypeAnnonce;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ALouerParMoisController
 * @package Mamaison\AnnonceBundle\Controller
 */
class ALouerParMoisController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/{ville}/propriete-a-louer-par-mois/", name="a_louer_mois_tous")
     */
    public function indexAction(Request $request,$ville){

        $ville = $request->cookies->get('ville');
        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }

        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceByType('A louer par mois',$ville);

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $annonces,
            $request->query->getInt('page', 1),
            4
        );

        return $this->render('annonce/type.html.twig',
            array('annonces'=>$pagination,));
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/{ville}/propriete-a-louer-par-mois/{slug}", name="a_louer_mois_category")
     */
    public function categoryAction(Request $request,$slug,$ville){
        $slug = explode ('-', $slug);
        $categoryName = '';

        foreach ($slug as $key => $word)
            $categoryName .= $word.' ';

        $type = 'A louer par mois';
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