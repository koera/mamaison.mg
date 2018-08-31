<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/6/18
 * Time: 9:08 AM
 */

namespace Mamaison\AnnonceBundle\Controller;


use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\TypeAnnonce;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ALouerParJoursController
 * @package Mamaison\AnnonceBundle\Controller
 * @Route("/a-louer-par-jours")
 */
class ALouerParJoursController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/", name="a_louer_jours_tous")
     */
    public function indexAction(Request $request){

        // get all annonces
        if(!$request->get('page') )
            $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                ->findPageBy(1, 3, ['typeAnnonce'=>$this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par jours'])]);
        else
            $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                ->findPageBy($request->get('page'), 3, ['typeAnnonce'=>$this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par jours'])]);

        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote() as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('annonce/type.html.twig',
            array('annonces'=>$annonces,'annoncePlusNote' => $annonceLesPlusNoter));
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/{slug}", name="a_louer_jours_category")
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
                        'typeAnnonce' => $this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par jours']),
                        'category' => $this->getDoctrine()->getRepository(Category::class)->findOneBy(['type'=>$categoryName])
                    ]);
        else
            $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                ->findPageBy($request->get('page'), 3, ['typeAnnonce'=>$this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par jours'])]);

        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote() as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('annonce/category.html.twig',
            array('annonces'=>$annonces,'annoncePlusNote' => $annonceLesPlusNoter));
    }

}