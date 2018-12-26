<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/6/18
 * Time: 8:45 AM
 */

namespace AppBundle\Controller;


use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\Ville;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class HeaderController extends Controller
{

    public function indexAction(Request $request){
        $ville = $request->cookies->get('ville');
        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }
        $category = $this->getDoctrine()->getRepository(Category::class)
            ->findAll();
        return $this->render('templates/header.html.twig',array('categories'=>$category));
    }

    public function villeAction(){
        $villes = $this->getDoctrine()->getRepository(Ville::class)
            ->findAll();
        return $this->render('templates/ville.html.twig',array('villes'=>$villes));
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @Route("/setVille/{ville_id}", name="set_ville_in_cookies")
     */
    public function saveVilleInCookieAction(Request $request,$ville_id){

        $ville = $this->getDoctrine()->getRepository(Ville::class)
            ->find($ville_id);
        $session = $request->getSession();
        $lastRoute = $session->get('last_route', array());
        $params = array();
        foreach($lastRoute['params'] as $key => $value)
            $params = [$key => $value];

        $response = $this->redirectToRoute($lastRoute['name'],$params);
        $response->headers->setCookie(new Cookie('ville', $ville));

        return $response;
    }

}