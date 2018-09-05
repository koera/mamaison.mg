<?php
/**
 * Created by Koera.
 * User: trustylabs
 * Date: 9/4/18
 * Time: 3:52 PM
 */

namespace Mamaison\AnnonceBundle\EventListener;

use Doctrine\ORM\Event\PreFlushEventArgs;


class DoctrineListener
{

    public function preFlush(PreFlushEventArgs $event) {
        $em = $event->getEntityManager();
        foreach ($em->getUnitOfWork()->getScheduledEntityDeletions() as $object) {
            if (method_exists($object, "getDeletedAt")) {
                    $object->setDeletedAt(new \DateTime());
                    $em->merge($object);
                    $em->persist($object);
            }
        }
    }
}