<?php
/**
 * Created by PhpStorm.
 * User: TrustyLabs
 * Date: 25/07/2018
 * Time: 11:54
 */

namespace Mamaison\AnnonceBundle\Controller;


use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\TypeAnnonce;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

/**
 * Class HomeController
 * @package Mamaison\AnnonceBundle\Controller
 *
 */
class HomeController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/", name="homepage")
     * @Method({"GET"})
     */
    public function indexAction(){

        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->getAnnonceEnVedette();
        $annonceMeilleur = [];
        foreach ($annonces as $annonce)
            $annonceMeilleur[] = $annonce[0];

        $annonceVente = $this->getDoctrine()->getRepository(Annonce::class)
            ->findBy(
                ['typeAnnonce'
                    => $this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A vendre'])
                ]
            );
        $annonceALouerParMois = $this->getDoctrine()->getRepository(Annonce::class)
            ->findBy(
                ['typeAnnonce'
                => $this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par mois'])
                ]
            );
        $annonceALouerParJours = $this->getDoctrine()->getRepository(Annonce::class)
            ->findBy(
                ['typeAnnonce'
                => $this->getDoctrine()->getRepository(TypeAnnonce::class)->findOneBy(['valeur'=>'A louer par jours'])
                ]
            );
        return $this->render('home/index.html.twig',
            [
                'annonceAVendre'=>$annonceVente,
                'annonceALouerParMois'=>$annonceALouerParMois,
                'annonceALouerParJours'=>$annonceALouerParJours,
                'annonceMeilleur' => $annonceMeilleur
            ]
        );
    }
}