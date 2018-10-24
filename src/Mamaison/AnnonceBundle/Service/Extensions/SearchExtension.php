<?php
namespace Mamaison\AnnonceBundle\Service\Extensions;

use Doctrine\ORM\EntityManager;

class SearchExtension extends \Twig_Extension
{
    private $_entityManager;

    public function __construct(EntityManager $_entityManager)
    {
        $this->_entityManager = $_entityManager;
    }

    public function getAllVilles()
    {
        return $this->_entityManager
                    ->getRepository('MamaisonAnnonceBundle:Ville')
                    ->findAll();
    }

    public function getAllQuartiers()
    {
        return $this->_entityManager
                    ->getRepository('MamaisonAnnonceBundle:Quartier')
                    ->findAll();
    }

    public function getAllRegions()
    {
        return $this->_entityManager
                    ->getRepository('MamaisonAnnonceBundle:Region')
                    ->findAll();
    }

    public function getAllCategories()
    {
        return $this->_entityManager
                    ->getRepository('MamaisonAnnonceBundle:Category')
                    ->findAll();
    }

    public function getAllCaracteristiques()
    {
        return $this->_entityManager
                    ->getRepository('MamaisonAnnonceBundle:Caracteristique')
                    ->findAll();
    }

    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('getAllVilles', array($this, 'getAllVilles')),
            new \Twig_SimpleFunction('getAllRegions', array($this, 'getAllRegions')),
            new \Twig_SimpleFunction('getAllQuartiers', array($this, 'getAllQuartiers')),
            new \Twig_SimpleFunction('getAllCategories', array($this, 'getAllCategories')),
            new \Twig_SimpleFunction('getAllCaracteristiques', array($this, 'getAllCaracteristiques')),
            new \Twig_SimpleFunction('rangePriceMin', array($this, 'rangePriceMin')),
            new \Twig_SimpleFunction('rangePriceMax', array($this, 'rangePriceMax')),
        );
    }

    public function rangePriceMin()
    {
        $priceMax=[
            100000=>'100 000',
            150000=>'150 000',
            200000=>'200 000',
            500000=>'500 000',
            1000000=>'1 000 000',
            10000000=>'10 000 000',
            20000000=>'20 000 000',
            50000000=>'50 000 000',
            100000000=>'100 000 000'
        ];
        return $priceMax;
    }

    public function rangePriceMax()
    {
        $priceMax=[
            100000=>'100 000',
            150000=>'150 000',
            200000=>'200 000',
            500000=>'500 000',
            1000000=>'1 000 000',
            10000000=>'10 000 000',
            20000000=>'20 000 000',
            50000000=>'50 000 000',
            100000000=>'100 000 000',
            '100000000+'=>'plus de 100 000 000'
        ];
        return $priceMax;
    }

    // La méthode getName() identifie votre extension Twig, elle est obligatoire
    public function getName()
    {
        return 'MamaisonSearch';
    }

}
