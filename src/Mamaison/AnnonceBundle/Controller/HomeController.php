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
use Symfony\Component\HttpFoundation\Request;

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
    public function indexAction(Request $request){


        $ville = $request->cookies->get('ville');

        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }

        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->getAnnonceEnVedette($ville);

        $annonceMeilleur = array();

        foreach ($annonces as $annonce)
            $annonceMeilleur[] = $annonce[0];

        $annonceVente = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceByType('A vendre',$ville);

        $annonceALouerParMois = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceByType('A louer par mois',$ville);

        $annonceALouerParJours = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceByType('A louer par jours',$ville);

        return $this->render('home/index.html.twig',
            array(
                'annonceAVendre'=>$annonceVente,
                'annonceALouerParMois'=>$annonceALouerParMois,
                'annonceALouerParJours'=>$annonceALouerParJours,
                'annonceMeilleur' => $annonceMeilleur
            )
        );
    }
}