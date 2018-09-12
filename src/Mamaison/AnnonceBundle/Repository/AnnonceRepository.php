<?php

namespace Mamaison\AnnonceBundle\Repository;

use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Jhg\DoctrinePagination\ORM\PaginatedQueryBuilder;
use Jhg\DoctrinePagination\ORM\PaginatedRepository;
use Symfony\Component\HttpFoundation\RequestStack;
/**
 * AnnonceRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class AnnonceRepository extends PaginatedRepository
{
    public function findAllAnnonce($ville = null){
        $query = $this->queryFindAll();
        if($ville){
            $query
                ->leftJoin('quartier.ville','ville')
                ->addSelect('ville')
                ->where('ville.nom = :ville')
                ->setParameter('ville',$ville);
        }
        $result = $query->getQuery()->execute();
        if(count($result) < 50 ){
            $result = array_merge($result,$this->queryFindAll()->getQuery()->execute());
        }
        return $result;
    }

    public function findAnnonceByType($typeAnnonce,$ville = null){
        $query = $this->queryFindAll(true,$typeAnnonce);
        if($ville){
            $query
                ->leftJoin('quartier.ville','ville')
                ->addSelect('ville')
                ->andWhere('ville.nom = :ville')
                ->setParameter('ville',$ville);
        }
        $result = $query->getQuery()->execute();
        if(count($result) < 50 ){
            $result = array_merge($result,$this->queryFindAll(true,$typeAnnonce)->getQuery()->execute());
        }
        return $result;
    }

    /**
     * @param bool $findByType
     * @param null $typeAnnonce
     * @return \Doctrine\ORM\QueryBuilder
     * @throws \Exception
     */
    private function queryFindAll($findByType = false,$typeAnnonce = null,$page = 0, $nombreParPage = 10){
        $query =  $this->createQueryBuilder('a')
            ->leftJoin('a.category','category')
            ->leftJoin('a.quartier','quartier')
            ->leftJoin('a.user','user')
            ->leftJoin('a.caracteristiques','caracteristiques')
            ->leftJoin('a.galleries','galleries')
            ->leftJoin('a.typeAnnonce','typeAnnonce')
            ->leftJoin('a.likes','likes')
            ->leftJoin('a.rating','rating')
            ->addSelect('category')
            ->addSelect('quartier')
            ->addSelect('user')
            ->addSelect('caracteristiques')
            ->addSelect('galleries')
            ->addSelect('typeAnnonce')
            ->addSelect('likes')
            ->addSelect('rating');
        if($findByType){
            if(!$typeAnnonce){
                throw new \Exception('typeAnnonce is required');
            }
            $query->where('typeAnnonce.valeur = :type')
                ->setParameter('type',$typeAnnonce);
        }
        return $query;
    }

    public function getAnnonceEnVedette($ville = null){
        $q = $this->queryAnnonceEnVedette();
        if($ville){
            $q
                ->leftJoin('quartier.ville','ville')
                ->addSelect('ville')
                ->where('ville.nom = :ville')
                ->setParameter('ville',$ville);
        }
        $result = $q->getQuery()->execute();
        if(count($result) < 50){
            $result = array_merge($result,$this->queryAnnonceEnVedette()->getQuery()->execute());
        }
        return $result;
    }

    private function queryAnnonceEnVedette(){
        return $this->createQueryBuilder('a')
            ->leftJoin('a.category','category')
            ->leftJoin('a.quartier','quartier')
            ->leftJoin('a.user','user')
            ->leftJoin('a.caracteristiques','caracteristiques')
            ->leftJoin('a.galleries','galleries')
            ->leftJoin('a.typeAnnonce','typeAnnonce')
            ->leftJoin('a.likes','likes')
            ->leftJoin('a.rating','rating')
            ->addSelect('category')
            ->addSelect('quartier')
            ->addSelect('user')
            ->addSelect('caracteristiques')
            ->addSelect('galleries')
            ->addSelect('typeAnnonce')
            ->addSelect('likes')
            ->addSelect('rating')
            ->addSelect('count(likes.id) as u')
            ->groupBy('a.id')
//            ->having('count(user.id) > 0')
            ->orderBy('u','desc')
        ;
    }

    private function queryAnnoncePlusNoter($ville= null){
        return $this->createQueryBuilder('a')
            ->leftJoin('a.category','category')
            ->leftJoin('a.quartier','quartier')
            ->leftJoin('a.user','user')
            ->leftJoin('a.caracteristiques','caracteristiques')
            ->leftJoin('a.galleries','galleries')
            ->leftJoin('a.typeAnnonce','typeAnnonce')
            ->leftJoin('a.likes','likes')
            ->leftJoin('a.rating','rating')
            ->addSelect('category')
            ->addSelect('quartier')
            ->addSelect('user')
            ->addSelect('caracteristiques')
            ->addSelect('galleries')
            ->addSelect('typeAnnonce')
            ->addSelect('likes')
            ->addSelect('rating')
            ->addSelect('sum(rating.ratingValue) / count(rating.id) as moyenne')
            ->groupBy('a.id')
            ->orderBy('moyenne','desc')
            ;
    }

    public function getMoyenneRating($id){
        $q =  $this->createQueryBuilder('a')
            ->leftJoin('a.rating','rating')
            ->addSelect('sum(rating.ratingValue) / count(rating.id) as moyenne')
            ->where('a.id = :id')
            ->setParameter('id',$id)
            ->groupBy('a.id')
            ->getQuery()
            ->execute();
        return (int) $q[0]['moyenne'];
    }


    public function getAnnoncePlusNote($ville = null){
        $q = $this->queryAnnoncePlusNoter();
        if($ville){
            $q
                ->leftJoin('quartier.ville','ville')
                ->addSelect('ville')
                ->where('ville.nom = :ville')
                ->setParameter('ville',$ville);
        }
        $result = $q->getQuery()->execute();
        if(count($result) < 50){
            $result = array_merge($result,$this->queryAnnoncePlusNoter()->getQuery()->execute());
        }
        return $result;
    }

    public function getProprieteFavorite($first_result,$max_results,$user){
        $query = $this->queryFindAll();
        $q = $query->where($query->expr()->in('likes',$user));
        $q
            ->setFirstResult(0)
            ->setMaxResults(3);
        $pag = new Paginator($q->getQuery()->execute());
        return $pag;
    }

}
