<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/1/18
 * Time: 2:49 PM
 */

namespace Mamaison\AnnonceBundle\Service\Rating;

use Doctrine\ORM\EntityManager;
use Mamaison\AnnonceBundle\Entity\Annonce;

class MoyenneService
{
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function getMoyenne(Annonce $annonce){
        return $this->em->getRepository(Annonce::class)
            ->getMoyenneRating($annonce->getId());
    }

}