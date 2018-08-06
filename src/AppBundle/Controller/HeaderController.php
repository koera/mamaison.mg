<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/6/18
 * Time: 8:45 AM
 */

namespace AppBundle\Controller;


use Mamaison\AnnonceBundle\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HeaderController extends Controller
{

    public function indexAction(){
        $category = $this->getDoctrine()->getRepository(Category::class)
            ->findAll();
        return $this->render('templates/header.html.twig',['categories'=>$category]);
    }

}