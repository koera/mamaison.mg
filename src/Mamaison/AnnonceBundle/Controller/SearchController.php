<?php

namespace Mamaison\AnnonceBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Mamaison\AnnonceBundle\Service\Search\PrefAnnonceBuilder;
use Mamaison\AnnonceBundle\Service\Search\PrefAnnonce;
use Mamaison\AnnonceBundle\Entity\Annonce;

class SearchController extends Controller
{
    /**
     * @Route("/search,{type_annonce_id}",
     * defaults={"type_annonce_id": 0},
     * requirements={
     *         "type_annonce_id": "\d+"
     *     },
     * name="mamaison_annonce.search.search")
     */
    public function searchAction(Request $request,$type_annonce_id)
    {
        $query = null;

        $em = $this->getDoctrine()->getManager();

        if($request->isMethod('POST'))
        {
            $annonceBuilder = new PrefAnnonceBuilder($em);
            if($type_annonce_id != 0)
            {
                $annonceBuilder->addFilter('annonce.type_annonce_id',$type_annonce_id);
            }
            $prefAnnonce = $annonceBuilder->build($request);
            
            $query = $prefAnnonce->getQuery();

            $session = $this->get('session');
            $session->set('search.query', $query->getSql());
            $session->set('search.parameters', $query->getParameters());
        }
        else 
        {
            $sql =$this->get('session')->get('search.query');

            $session = $this->get('session');
            $sql = $session->get('search.query');
            $params = $session->get('search.parameters');
            
            $prefAnnonce = new PrefAnnonce($em);
            $query = $prefAnnonce->getQueryFromSql($sql,$params);
        }

        $annonces = $query->getResult();
        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote() as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('search/search.result.html.twig',['annonces'=>$annonces,'annoncePlusNote'=>$annonceLesPlusNoter]);
    }

}
