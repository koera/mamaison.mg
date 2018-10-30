<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 10/30/18
 * Time: 9:35 AM
 */

namespace AppBundle\Command;

use AppBundle\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Caracteristique;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\Gallery;
use Mamaison\AnnonceBundle\Entity\Quartier;
use Mamaison\AnnonceBundle\Entity\TypeAnnonce;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Faker;

class CreateDataCommand extends Command
{
    private $manager;

    public function __construct(ObjectManager $em)
    {
        $this->manager = $em;
        parent::__construct();
    }


    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('app:create-data')

            // the short description shown while running "php bin/console list"
            ->setDescription('This command create category and typeAnnonce Data')
            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command create category and typeAnnonce Data');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        //Create Category
        
        $category = new Category();
        $category->setType('Appartement');
        $this->manager->persist($category);


        $category = new Category();
        $category->setType('Villa');
        $this->manager->persist($category);

        $category = new Category();
        $category->setType('Maison familiale');
        $this->manager->persist($category);

        $category = new Category();
        $category->setType('Proprietes commerciales');
        $this->manager->persist($category);

        $category = new Category();
        $category->setType('Studio');
        $this->manager->persist($category);

        $category = new Category();
        $category->setType('Terrain');
        $this->manager->persist($category);


        $this->manager->flush();

        // TypeAnnonce

        $type = new TypeAnnonce();
        $type->setValeur('A vendre');
        $this->manager->persist($type);


        $type = new TypeAnnonce();
        $type->setValeur('A louer par jours');
        $this->manager->persist($type);

        $type = new TypeAnnonce();
        $type->setValeur('A louer par mois');
        $this->manager->persist($type);

        $this->manager->flush();

        $output->writeln('Finished');
    }
}