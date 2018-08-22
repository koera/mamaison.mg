<?php
namespace Mamaison\AnnonceBundle\Service\Search;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\ResultSetMappingBuilder;
use Mamaison\AnnonceBundle\Entity\Annonce;

/**
 * PrefAnnonce
 * 
 * Ce class sert a regrouper le scriteres de recherche dans un meme endroit
 * 
 */
class PrefAnnonce
{
    const TABLE_ATTR = [
        'annonce'=>['adresse','type_annonce_id'],
        'quartier'=>['id','nom'],
        'ville'=>['id','nom'],
        'region'=>['id','nom'],
        'category'=>['id','type'],
        'annonce_caracteristique'=>['annonce_id','caracteristique_id'],
    ];
    private $_annonceFilter;
    private $_entityManager;

    private $_isJoinedQuartier;
    private $_sqlWhereQuery;

    private $_isJoinedVille;

    private $_isJoinedRegion;

    private $_isJoinedCategory;

    private $_isJoinedCaracteristique;

    private $_sqlParams;

    public function __construct(EntityManager $_entityManager, $_annonceFilter = [])
    {
        $this->_entityManager = $_entityManager;
        $this->_annonceFilter = $_annonceFilter;
        $this->_isJoinedQuartier= false;
        $this->_isJoinedVille= false;
        $this->_isJoinedRegion= false;
        $this->_isJoinedCategory=false;
        $this->_isJoinedCaracteristique=false;
        $this->_sqlWhereQuery= [];
        $this->_sqlParams= [];

    }

    public function getQuery()
    {
        $sql = $this->getSql();
        $rsm = new ResultSetMappingBuilder($this->_entityManager);
        $rsm->addRootEntityFromClassMetadata(Annonce::class,'a');
        $query = $this->_entityManager->createNativeQuery($sql,$rsm);
        $query->setParameters($this->_sqlParams);
        
        return $query;
    }

    public function getSql()
    {
        $sql = 'SELECT annonce_0.* from annonce annonce_0';
        $this->whereQuery();

        $sql .= $this->_isJoinedQuartier ? ' INNER JOIN quartier quartier_0 ON quartier_0.id = annonce_0.quartier_id':'';
        $sql .= $this->_isJoinedVille ? ' INNER JOIN ville ville_0 ON ville_0.id = quartier_0.ville_id':'';
        $sql .= $this->_isJoinedRegion ? ' INNER JOIN region region_0 ON region_0.id = ville_0.region_id':'';
        $sql .= $this->_isJoinedCategory ? ' INNER JOIN category category_0 ON category_0.id = annonce_0.category_id':'';
        $sql .= $this->_isJoinedCaracteristique ? ' INNER JOIN annonce_caracteristique annonce_caracteristique_0 ON annonce_caracteristique_0.annonce_id = annonce_0.id':'';
        $sql = $this->addWhere($sql);
        return $sql;
    }

    public function whereQuery()
    {
        
        foreach(self::TABLE_ATTR as $table => $attribut)
        {
            foreach($attribut as $index => $attr)
            {
                if(array_key_exists($table.'.'.$attr,$this->_annonceFilter))
                {
                    $this->changeJoin($table);
                    $filter = $this->_annonceFilter[$table.'.'.$attr];
                    if(!is_array($filter))
                    {
                        if(((int)$filter) == 0)
                        {
                            $this->_sqlWhereQuery[]=$table.'_0.'.$attr.' LIKE :'.$table.'_'.$attr;
                            $filter = '%'.$filter.'%';
                        }
                        else $this->_sqlWhereQuery[]=$table.'_0.'.$attr.' = :'.$table.'_'.$attr;
                        $this->_sqlParams[$table.'_'.$attr] = $filter;
                    }
                    else {
                        $this->_sqlWhereQuery[]=$table.'_0.'.$attr.' IN ('.join(',',$filter).')';
                    }
                }
            }
        }
        $this->addPrixWhere();
    }
    public function changeJoin($table_name)
    {
        switch($table_name)
        {
            case 'quartier':
                $this->_isJoinedQuartier = true;
                break;
            case 'ville':
                $this->_isJoinedQuartier = true;
                $this->_isJoinedVille = true;
                break;
            case 'region':
                $this->_isJoinedQuartier = true;
                $this->_isJoinedVille = true;
                $this->_isJoinedRegion = true;
                break;
            case 'category':
                $this->_isJoinedCategory = true;
                break;
            case 'annonce_caracteristique':
                $this->_isJoinedCaracteristique = true;
                break;
            default:
                break;
        }
    }

    public function addWhere($sql)
    {
        $isFirst = true;

        foreach( $this->_sqlWhereQuery as $index => $where)
        {
            if($isFirst)
            {
                $sql .= ' WHERE '.$where;
                $isFirst = false;
            }
            else $sql .= ' AND '.$where;
        }

        return $sql;
    }

    public function getQueryFromSql($sql,$params)
    {
        $rsm = new ResultSetMappingBuilder($this->_entityManager);
        $rsm->addRootEntityFromClassMetadata(Annonce::class,'a');
        $query = $this->_entityManager->createNativeQuery($sql,$rsm);
        $query->setParameters($params);
        
        return $query;
    }
    public function addPrixWhere()
    {
        if(array_key_exists('prix',$this->_annonceFilter))
        {
            $prix = $this->_annonceFilter['prix'];
            $max_str = $prix['max'];
            $max = (int)$prix['max'];
            $min = (int)$prix['min'];
            $where = null;
            $isMax = false;
            $isMin = false;
            if(strpos($max_str, '+') !== false)
            {
                $min = $max;
                $max = 0; 
            }

            if($min == 0 && $max != 0)
            {
                $where = ' annonce_0.prix <= :prix_max';
                $isMax = true;
            }

            if($min != 0 && $max == 0)
            {
                $where = ' annonce_0.prix >= :prix_min';
                $isMin = true;
            }

            if($min != 0 && $max !=0)
            {
                if($min > $max)
                {
                    $tmp = $max;
                    $max = $min;
                    $min = $tmp;
                } 
                $where = ' annonce_0.prix BETWEEN :prix_min AND :prix_max';
                $isMin = true;
                $isMax = true;
            }
            if ( $where )
            {
                $this->_sqlWhereQuery[]=$where;
            }
            if ( $isMin ) $this->_sqlParams['prix_min']=$min;
            if ( $isMax ) $this->_sqlParams['prix_max']=$max;
        }
    }
}