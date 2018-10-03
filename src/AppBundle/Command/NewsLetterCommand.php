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
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\Container;

class NewsLetterCommand extends Command
{

    private $em;

    private $container;

    public function __construct(ObjectManager $em)
    {
        $this->em = $em;
        parent::__construct();
    }


    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('app:newsletter')
            // the short description shown while running "php bin/console list"
            ->setDescription('This command sent a newsletter')
            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command sent a newsletter');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $date = date('Y-m-d H:i:s',strtotime("- 3 days"));
        $annonces = $this->em->getRepository(Annonce::class)
            ->getAnnonceForNewsLetter($date,date('Y-m-d H:i:s'));
        $i = 0;

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,$this->container->getParameter('newsletter_domain')."/newsletter/api/getAll");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $newsLetter = json_decode(curl_exec($ch));

        foreach ($newsLetter as $news){
            $message = (new \Swift_Message('Newsletter'))
                ->setFrom('no-reply@mamaison.mg')
                ->setTo($news->email)
                ->setBody(
                    $this->renderView(
                        'emails/newsletter.html.twig',
                        ['annonces' => $annonces]
                    ),
                    'text/html'
                );
            $this->get('mailer')->send($message);
        }
        curl_close ($ch);
        $output->writeln($i . ' Mails sent');
    }
}