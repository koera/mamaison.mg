<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 9/4/18
 * Time: 1:39 PM
 */

class AnnonceRepositoryTest extends \Symfony\Bundle\FrameworkBundle\Test\KernelTestCase {

    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $entityManager;

    /**
     * {@inheritDoc}
     */
    protected function setUp()
    {
        $kernel = self::bootKernel();

        $this->entityManager = $kernel->getContainer()
            ->get('doctrine')
            ->getManager();
    }


    public function testSoftDelete(){

        $em = $this->entityManager;

//        $this->assertNotNull($em);

        $annonce = $em->getRepository(\Mamaison\AnnonceBundle\Entity\Annonce::class)
            ->find(10);
//
//        // Now if we remove it, it will set the deletedAt field to the actual date
        $em->remove($annonce);
        $em->flush();

        $annonce2 = $em->getRepository(\Mamaison\AnnonceBundle\Entity\Annonce::class)
        ->find(10);

        // It should NOT return the annonce now
        $this->assertNull($annonce2);

        // But if we disable the filter, the annonce should appear now

        $em->getFilters()->disable("deleted");

        $art = $em->getRepository(\Mamaison\AnnonceBundle\Entity\Annonce::class)->find(10);

        $this->assertTrue(is_object($art));


    }



}