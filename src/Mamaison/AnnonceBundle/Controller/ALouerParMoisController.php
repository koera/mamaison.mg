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
 * @Route("/a-louer-par-mois")
 */
class ALouerParMoisController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/", name="a_louer_mois_tous")
     */
    public function indexAction(Request $request){

        $ville = $request->cookies->get('ville');

        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceByType('A louer par mois',$ville);

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $annonces,
            $request->query->getInt('page', 1),
            4
        );
        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote() as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('annonce/type.html.twig',
            array('annonces'=>$pagination,'annoncePlusNote' => $annonceLesPlusNoter));
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/{slug}", name="a_louer_mois_category")
     */
    public function categoryAction(Request $request,$slug){
        $slug = explode ('-', $slug);
        $categoryName = '';

        foreach ($slug as $key => $word)
            $categoryName .= $word.' ';

        if(!$request->get('page') )
            $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                ->findPageBy(1, 3,
                    [
                        'typeAnnonce' => $this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par mois']),
                        'category' => $this->getDoctrine()->getRepository(Category::class)->findOneBy(['type'=>$categoryName])
                    ]);
        else
            $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                ->findPageBy($request->get('page'), 3, ['typeAnnonce'=>$this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par mois'])]);

        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote() as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('annonce/category.html.twig',
            array('annonces'=>$annonces,'annoncePlusNote' => $annonceLesPlusNoter));
    }

}