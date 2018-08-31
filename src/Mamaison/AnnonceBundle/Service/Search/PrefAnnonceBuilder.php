<?php
namespace Mamaison\AnnonceBundle\Service\Search;

use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;
use Mamaison\AnnonceBundle\Service\Search\PrefAnnonce;
/**
 * PrefAnnonce
 * 
 * Ce class sert a regrouper le scriteres de recherche dans un meme endroit
 * 
 */
class PrefAnnonceBuilder
{
    const FORM_ENTITY_NAME=[
        'adresse'=>'annonce.adresse',
        'region'=>'region.id',
        'ville'=>'ville.id',
        'quartier'=>'quartier.id',
        'category'=>'category.id',
        'caracteristique'=>'annonce_caracteristique.caracteristique_id',
        'prix'=>'prix',
    ];
    private $_annonceFilter;
    private $_entityManager;

    public function __construct(EntityManager $_entityManager)
    {
        $this->_entityManager = $_entityManager;
        $this->_annonceFilter = [];
    }

    public function addFilter($filterName,$filterValue)
    {
        $this->_annonceFilter[$filterName] = $filterValue;
    }

    public function build(Request $request)
    {
        foreach(self::FORM_ENTITY_NAME as $name=>$filter_name)
        {
            $filterValue = $request->request->get($name);
        
            if(!is_array($filterValue))
            {
                if($filterValue && trim($filterValue) !== '')
                {
                    $this->addFilter($filter_name,$filterValue);
                }
            }
            else if(count($filterValue)>0)
            {
                $this->addFilter($filter_name,$filterValue);
            }
        }
        return new PrefAnnonce($this->_entityManager,$this->_annonceFilter);
    }
}