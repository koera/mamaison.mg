<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 10/2/18
 * Time: 3:43 PM
 */

namespace AppBundle\Command;


use Doctrine\Common\Persistence\ObjectManager;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Psr\Container\ContainerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\Container;

class NewsLetterCommand extends Command
{

    private $em;
    private $mailer;
    private $container;
    private $newsletterUrl;

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
            ->setName('app:newsletter')
            // the short description shown while running "php bin/console list"
            ->setDescription('This command send a newsletter')
            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command send a newsletter');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $date = date('Y-m-d H:i:s',strtotime("- 5 days"));
        $annonces = $this->em->getRepository(Annonce::class)
            ->getAnnonceForNewsLetter($date,date('Y-m-d H:i:s'));

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,$this->container->getParameter('newsletter_url'));
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $newsLetter = json_decode(curl_exec($ch));

        $annonce = [];
        $i= 0;
        foreach($annonces as $a){
            if($i<10){
                $annonce[] = $a;
            }else{
                break;
            }
            $i++;
        }

        $count= 1;

        foreach ($newsLetter as $news){
            if(count($annonce) > 0){
                $message = (new \Swift_Message(count($annonce). ' nouveaux immobiliers publiés sur Mamaison.mg'))
                    ->setFrom('no-reply@mamaison.mg')
                    ->setTo($news->email)
                    ->setBody(
                        $this->container->get('templating')->render(
                            'emails/newsletter.html.twig',
                            ['annonces' => $annonce]
                        ),
                        'text/html'
                    );
                $this->mailer->send($message);

                $output->writeln($count . ' Mails sent');
                $count++;
            }
        }

        curl_close ($ch);
    }
}