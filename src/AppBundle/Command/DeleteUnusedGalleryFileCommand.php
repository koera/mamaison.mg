<?php
/**
 * Created by Koera.
 * User: trustylabs
 * Date: 9/14/18
 * Time: 1:40 PM
 */

namespace AppBundle\Command;


use Doctrine\Common\Persistence\ObjectManager;
use Mamaison\AnnonceBundle\Entity\Gallery;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DeleteUnusedGalleryFileCommand extends Command
{
    private $em;

    public function __construct(ObjectManager $em)
    {
        $this->em = $em;
        parent::__construct();
    }


    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('app:delete-unused-gallery-file')

            // the short description shown while running "php bin/console list"
            ->setDescription('This command delete all unused gallery file')

            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command delete all unused gallery file');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $galleries = $this->em->getRepository(Gallery::class)
            ->findBy(array('used'=>false));
        $i = 0;
        foreach ($galleries as $gallery):
            $i = $i+1;
            $output->writeln('Gallery '.$i.' : ' .$gallery->getImage(). ' deleted');
            $gallery->removeFile();
            $this->em->remove($gallery);
            $this->em->flush();
        endforeach;
        $output->writeln($i.' Files deleted successfully');
    }

}