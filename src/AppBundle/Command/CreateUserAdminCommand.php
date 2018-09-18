<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 9/17/18
 * Time: 3:59 PM
 */

namespace AppBundle\Command;


use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CreateUserAdminCommand extends Command
{
//    private $em;
//
//    public function __construct(ObjectManager $em)
//    {
//        $this->em = $em;
//        parent::__construct();
//    }


    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('app:create-user-admin')

            // the short description shown while running "php bin/console list"
            ->setDescription('This command create a default user admin')
            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command create a default user admin')

            ->addArgument('username',InputArgument::REQUIRED,'Username')
            ->addArgument('email',InputArgument::REQUIRED,'Email')
            ->addArgument('password',InputArgument::REQUIRED,'password');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln($input->getArguments('username'));
    }

}