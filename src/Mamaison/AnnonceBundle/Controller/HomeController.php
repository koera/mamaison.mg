<?php
/**
 * Created by PhpStorm.
 * User: TrustyLabs
 * Date: 25/07/2018
 * Time: 11:54
 */

namespace Mamaison\AnnonceBundle\Controller;


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
        return $this->render('home/index.html.twig');
    }
}