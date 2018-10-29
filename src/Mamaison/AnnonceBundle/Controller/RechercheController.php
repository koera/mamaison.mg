<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/7/18
 * Time: 8:19 AM
 */

namespace Mamaison\AnnonceBundle\Controller;


use Mamaison\AnnonceBundle\Entity\Caracteristique;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\Quartier;
use Mamaison\AnnonceBundle\Entity\Region;
use Mamaison\AnnonceBundle\Entity\Ville;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class RechercheController
 * @package Mamaison\AnnonceBundle\Controller
 */
class RechercheController extends Controller
{
    public function homePageAction()
    {
        return $this->render('templates/recherche/home.html.twig',
            array(
                'regions'           => $this->getDoctrine()->getRepository(Region::class)->findAll(),
                'villes'            => $this->getDoctrine()->getRepository(Ville::class)->findAll(),
                'quartiers'         => $this->getDoctrine()->getRepository(Quartier::class)->findAll(),
                'categories'        => $this->getDoctrine()->getRepository(Category::class)->findAll(),
                'caracteristiques'  => $this->getDoctrine()->getRepository(Caracteristique::class)->findAll()
            )
        );
    }

}