<?php
/**
 * Created by Koera.
 * User: trustylabs
 * Date: 9/13/18
 * Time: 8:37 AM
 */

namespace Mamaison\AnnonceBundle\Controller;


use Mamaison\AnnonceBundle\Entity\Annonce;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TemplateAnnonceController extends Controller
{

    public function renderPart1Action(Request $request){
        return $this->render('templates/annonce-part1.html.twig');
    }

    public function renderPart2Action(Request $request)
    {

        $ville = $request->cookies->get('ville');
        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }

        $annonceLesPlusNoter = array();

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote($ville) as $a){
            $annonceLesPlusNoter[] = $a[0];
        }


        $annonceMeilleur = $this->getDoctrine()->getRepository(Annonce::class)
            ->getAnnonceEnVedette($ville);
        if($annonceMeilleur)
            $annonceMeilleur = $annonceMeilleur[0][0];
        else
            $annonceMeilleur = array();

        return $this->render('templates/annonce-part2.html.twig',
            array(
                'annoncePlusNote' => $annonceLesPlusNoter,
                'annonceEnVedette' => $annonceMeilleur
            )
        );
    }

}