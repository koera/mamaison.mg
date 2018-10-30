<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 10/30/18
 * Time: 9:00 AM
 */

namespace AppBundle\Command;


use AppBundle\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Psr\Container\ContainerInterface;

class CreateAdminUserCommand extends Command
{

    private $em;
    private $mailer;
    private $container;

    public function __construct(ObjectManager $em, \Swift_Mailer $mailer, ContainerInterface $container)
    {
        $this->em = $em;
        $this->mailer = $mailer;
        $this->container = $container;
        parent::__construct();
    }

    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('app:create-admin-user')

            // the short description shown while running "php bin/console list"
            ->setDescription('This command create admin user')
            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command create admin user')

            ->addArgument('name',InputArgument::REQUIRED,'Username ? ')
            ->addArgument('email', InputArgument::REQUIRED,'email ? ')
            ->addArgument('password',InputArgument::REQUIRED,'password ?');


    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $name = $input->getArgument('name');
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        $user = new User();

        $user->setIsActive(false);
        $user->setType('simple');
        $user->setActivationToken($this->random(32));
        $user->setActivationTokenDelay(strtotime("+3 days"));

        $password = $this->container->get('security.password_encoder')
            ->encodePassword($user, $password);
        $user->setPassword($password);
        $user->setRoles(array('ROLE_ADMIN'));
        $user->setUsername($name);
        $user->setEmail($email);

        /* send email registration here*/

        $message = (new \Swift_Message('Confirmation instructions'))
            ->setFrom('no-reply@mamaison.mg')
            ->setTo($user->getEmail())
            ->setBody(
                $this->container->get('templating')->render(
                    'emails/registration_simple.html.twig',
                    array('user' => $user)
                ),
                'text/html'
            );

        $this->mailer->send($message);

        $this->em->persist($user);
        $this->em->flush();
        $output->writeln('An email was sent to '. $email);
    }



    private function random($length = 16)
    {
        if (function_exists('openssl_random_pseudo_bytes'))
        {
            $bytes = openssl_random_pseudo_bytes($length * 2);

            if ($bytes === false)
            {
                // throw exception that unable to create random token
            }

            return substr(str_replace(array('/', '+', '='), '', base64_encode($bytes)), 0, $length);
        }

        return ;
    }
}