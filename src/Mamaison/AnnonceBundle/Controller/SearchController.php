<?php

namespace Mamaison\AnnonceBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class SearchController extends Controller
{
    /**
     * @Route("/search")
     */
    public function searchAction()
    {
        return $this->render('@Search:search.html.twig', array(
            // ...
        ));
    }

}
