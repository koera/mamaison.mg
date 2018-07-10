<?php

namespace Mamaison\AnnonceBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('MamaisonAnnonceBundle:Default:index.html.twig');
    }
}
