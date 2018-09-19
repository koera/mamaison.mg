<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 9/17/18
 * Time: 3:59 PM
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
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Faker;

class CreateUserAdminCommand extends Command
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
            ->setDescription('This command create an 50 fake data')
            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command create an 50 fake data');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        for($j = 0; $j < 20 ; $j++){
            $faker = Faker\Factory::create('fr_FR');

            $annonce = new Annonce();
            /* set user */
            $users = $this->manager->getRepository(User::class)
                ->findAll();
            $user = $users[rand(0,count($users) - 1)];
            $annonce->setUser($user);

            $annonce->setValide(true);
            $annonce->setAdresse($faker->address);
            $categories = $this->manager->getRepository(Category::class)
                ->findAll();
            $category = $categories[rand(0,count($categories) -1)];
            $annonce->setCategory($category);
            $annonce->setCreatedAt(new \DateTime());
            $annonce->setUpdatedAt(new \DateTime());
            $annonce->setDescription($faker->text($maxNbChars = 200));
            $annonce->setPrix($faker->randomNumber(5));
            $annonce->setTitre($faker->text($maxNbChars = 70));
            $quartiers = $this->manager->getRepository(Quartier::class)
                ->findAll();
            $quartier = $quartiers[rand(0,count($quartiers) -1)];
            $annonce->setQuartier($quartier);
            $typeAnnonces = $this->manager->getRepository(TypeAnnonce::class)
                ->findAll();
            $type = $typeAnnonces[rand(0,count($typeAnnonces) - 1)];
            $annonce->setTypeAnnonce($type);

            $caracteristiques = $this->manager->getRepository(Caracteristique::class)
                ->findAll();
            $i = 0;
            foreach ($caracteristiques as $car){
                $annonce->addCaracteristique($car);
                $i++;
                if($i > 3) break;
            }

            $galleries = $this->manager->getRepository(Gallery::class)
                ->findAll();
            $i = 0;
            foreach ($galleries as $gallery){
                $annonce->addGallery($gallery);
                $i++;
                if($i > 3) break;
            }

            $this->manager->persist($annonce);

            $this->manager->flush();
            $output->writeln($j.' rows inserted');
        }

        $output->writeln('Finished');
    }

}