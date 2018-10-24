<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\Gallery;
use Mamaison\AnnonceBundle\Entity\Quartier;
use Mamaison\AnnonceBundle\Entity\Region;
use Mamaison\AnnonceBundle\Entity\TypeAnnonce;
use Mamaison\AnnonceBundle\Entity\Ville;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Goutte\Client;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @param Request $request
     * @throws \Facebook\Exceptions\FacebookSDKException
     * @Route("/login/facebook/")
     */
    public function fb_connect(Request $request)
    {

        $fb = new \Facebook\Facebook([
                'app_id' => $this->getParameter('fb_app_id'), 'app_secret' => $this->getParameter('fb_app_secret')]
        );
        $helper = $fb->getRedirectLoginHelper();// to set redirection url
        $permissions = ['email'];// set required permissions to user details
        $loginUrl = $helper->getLoginUrl('https://www.mamaison.mg/app_dev.php/login/facebook/check',$permissions);
        echo "<a href=" . $loginUrl . ">Log in with Facebook!</a>";
        die;
    }


    public function checkLoginFacebook(Request $request)
    {
        if (!session_id()) {
            session_start();
        }

        $fb = new \Facebook\Facebook([
                'app_id' => '253861401879571', 'app_secret' => 'f1e1cd1ab423a336df4f66c1fdb78732']
        );

        $helper = $fb->getRedirectLoginHelper();
        $_SESSION['FBRLH_state']=$_GET['state'];
        try {
            $accessToken = $helper->getAccessToken();// to fetch access token
        } catch (Facebook\Exceptions\FacebookResponseException $e) {
// When facebook server returns error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
// when issue with the fetching access token
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
        if (!isset($accessToken))// checks whether access token is in there or not
        {
            if ($helper->getError()) {
                header('HTTP/1.0 401 Unauthorized');
                echo "Error: " . $helper->getError() . "\n";
                echo "Error Code: " . $helper->getErrorCode() . "\n";
                echo "Error Reason: " . $helper->getErrorReason() . "\n";
                echo "Error Description: " . $helper->getErrorDescription() . "\n";
            } else {
                header('HTTP/1.0 400 Bad Request');
                echo 'Bad request';
            }
            exit;
        }
        try {
// to get required fields using access token
            $response = $fb->get('me?fields=id,name,picture', $accessToken->getValue());
        } catch (Facebook\Exceptions\FacebookResponseException $e)// throws an error if invalid fields are specified
        {
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
        $user = $response->getGraphUser();
        echo 'Name: ' . $user['name'];
        die;
    }


    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/a-propos-de-nous", name="about")
     */
    public function aboutAction(Request $request){
        $ville = $request->cookies->get('ville');
        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }
        $annonceLesPlusNoter = [];
        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote($ville) as $a)
            $annonceLesPlusNoter[] = $a[0];
        $category = $this->getDoctrine()->getRepository(Category::class)
            ->findAll();
        return $this->render('mamaison/about.html.twig',
            [
                'annoncePlusNote'   => $annonceLesPlusNoter,
                'category'          => $category
            ]
        );
    }


    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/faq", name="faq")
     */
    public function faqAction(Request $request){
        $ville = $request->cookies->get('ville');
        if(!$ville){
            $request->cookies->set('ville', 'antananarivo');
            $ville = 'antananarivo';
        }
        $annonceLesPlusNoter = [];
        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote($ville) as $a)
            $annonceLesPlusNoter[] = $a[0];
        $category = $this->getDoctrine()->getRepository(Category::class)
            ->findAll();
        return $this->render('mamaison/faq.html.twig',
            [
                'annoncePlusNote'   => $annonceLesPlusNoter,
                'category'          => $category
            ]
        );
    }


    /**
     * @param Request $request
     * @Route("/newsletter", name="newsletter")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function newsletterAction(Request $request){
        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAll();
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
//        $message = (new \Swift_Message('Confirmation instructions'))
//            ->setFrom('no-reply@mamaison.mg')
//            ->setTo('tolotrarazafindrabe@trustylabs.mg')
//            ->setBody(
//                $this->renderView(
//                    'emails/newsletter.html.twig',
//                    array('annonce' => $annonce)
//                ),
//                'text/html'
//            );
//
//        $this->get('mailer')->send($message);
        return $this->render('emails/newsletter.html.twig',[
            'annonces' => $annonce
        ]);
    }


    /**
     * @Route("/crawler-jumia-a-louer")
     */
    public function crawlerJumiaAppartementALouerAction(){
        $client = new Client();
        $string = "";
        $crawler = $client->request('GET', 'https://www.jumia.mg/appartements-a-louer');
        $crawler->filter('body > #wrapper > #main > #main-holder > #twocolumn > .container-sticky > #content > #posts-list > .tab-content > #tab1 > #search-results ')->each(function ($node) {
            if (in_array($node->getNode(0)->nodeName, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'])) {
                echo "{$node->getNode(0)->nodeName} => {$node->getNode(0)->textContent}.<br/>\n";
            } elseif ($node->getNode(0)->nodeName == 'div') {
                echo "<code>".$node->html()."</code><br/>";
            } elseif ($node->getNode(0)->nodeName == 'img') {
                echo 'img => src="'.$node->getNode(0)->getAttribute('src')."\" <br/>\n";
            }
        });
        die();
    }

    /**
     * @Route("/crawler-jumia-a-vendre",name="crawler-jumia-a-vendre")
     */
    public function crawlerJumiaAppartementAVendreAction(){
        $client = new Client();
        $string = "";
        $crawler = $client->request('GET', 'https://www.jumia.mg/appartements-a-vendre');
        $crawler->filter('body > #wrapper > #main > #main-holder > #twocolumn > .container-sticky > #content > #posts-list > .tab-content > #tab1 > #search-results ')->each(function ($node) {
            if (in_array($node->getNode(0)->nodeName, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'])) {
                echo "{$node->getNode(0)->nodeName} => {$node->getNode(0)->textContent}.<br/>\n";
            } elseif ($node->getNode(0)->nodeName == 'div') {
                echo "<code>".$node->html()."</code><br/>";
            } elseif ($node->getNode(0)->nodeName == 'img') {
                echo 'img => src="'.$node->getNode(0)->getAttribute('src')."\" <br/>\n";
            }
        });
        die();
    }

    /**
     * @Route("/crawler-data", name="crawler-data")
     */
    public function crawlerDataAction(){
        $query = $this->getDoctrine()->getManager()->createQuery(
            'SELECT u FROM AppBundle:User u'
        );

        $users = $query->getResult();
        $u = new User();
        foreach ($users as $user){
            if(in_array('ROLE_ADMIN',$user->getRoles())){
                $u = $user;
            }
        }

        $client = new Client();
        $string = "";

        $title = [];
        $adresse = [];
        $type = [];
        $price = [];
        $image = [];
        $linkDescription = [];

        $crawler = $client->request('GET', $this->generateUrl('crawler-jumia-a-vendre',[], UrlGeneratorInterface::ABSOLUTE_URL));

        $crawler->filter('body > code > article > .post > .text-area > .announcement-container > .announcement-infos > .post-link')->each(function ($node) use (&$title,&$linkDescription) {
            $linkDescription[] = $node->getNode(0)->getAttribute('href');
            $title[] = $node->getNode(0)->getAttribute('title');
        });


        $crawler->filter('body > code > article > .post > .text-area > .announcement-container > .announcement-infos > .address')->each(function ($node) use (&$adresse,&$type) {
            $t = explode(",", $node->text())[0];
            $a= explode(",", $node->text())[1];
            $type[] = trim($t);
            $adresse[] = trim($a);
        });

        $crawler->filter('body > code > article > .post > .text-area > .announcement-container > .price-date > .price')->each(function ($node) use (&$price) {
            $p = substr(trim($node->text()), 0, -3);
            $price[] = $p;
        });

        $crawler->filter('body > code > article > .post > .alignleft > img')->each(function ($node) use (&$image) {
            $image[] = $node->getNode(0)->getAttribute('data-src');
        });

        $em = $this->getDoctrine()->getManager();

        for($i= 0 ; $i < count($title); $i++){

            $annonce = new Annonce();
            $client = new Client();
            $crawler = $client->request('GET', 'https://www.jumia.mg/'.$linkDescription[$i]);
            $crawler->filter('body > #wrapper > #main > #main-holder > .singlepost > .twocolumn > .post-content > .post-text-content > p')->each(function ($node) use (&$annonce) {
                $annonce->setDescription(utf8_encode(html_entity_decode(trim($node->text()))));
            });

            $crawler->filter('body > #wrapper > #main > #main-holder > .singlepost > .super-form-container > #contactPhone > .contactPhone > h2')->each(function ($node) use (&$annonce) {
                $annonce->setUserNameCrawler(ltrim($node->text(),"Appeler "));
            });

            $crawler->filter('body > #wrapper > #main > #main-holder > .singlepost > .super-form-container > #contactPhone > .contactPhone > .phone-box > a')->each(function ($node) use (&$annonce) {
                $annonce->setUserPhoneCrawler(trim($node->text()));
            });

            $annonce->setTitre(utf8_encode($title[$i]))
                ->setStatus('disponible')
                ->setValide(true)
                ->setUser($u)
                ->setTypeAnnonce($em->getRepository(TypeAnnonce::class)->findOneBy(['valeur' => 'A vendre']))
                ->setCategory($em->getRepository(Category::class)->findOneBy(['type' => 'Appartement']))
                ->setPrix($price[$i]);

            // adresse

            $annonce->setAdresse($adresse[$i]);

            $region = $em->getRepository(Region::class)->findOneBy(['nom' => strtolower($adresse[$i])]);
            if(is_null($region)){
                $region = new Region();
                $region->setNom(strtolower($adresse[$i]));
                $em->persist($region);
            }

            $ville = $em->getRepository(Ville::class)->findOneBy(['nom'=> strtolower($adresse[$i])]);
            if(is_null($ville)){
                $ville = new Ville();
                $ville->setNom(strtolower($adresse[$i]));
                $ville->setRegion($region);
                $em->persist($ville);
            }

            $quartier = $em->getRepository(Quartier::class)->findOneBy(['nom'=>strtolower($adresse[$i])]);

            if(is_null($quartier)){
                $quartier = new Quartier();
                $quartier->setNom(strtolower($adresse[$i]))
                    ->setVille($ville);
                $em->persist($quartier);
            }

            $annonce->setQuartier($quartier);

            // gallery
            $gallery = new Gallery();
            $gallery->setImage($image[$i]);
            $gallery->setUsed(true);

            $em->persist($gallery);


            $annonce->addGallery($gallery);

            $annonce->setIsCrawled(true);

            $em->persist($annonce);
        }
        $em->flush();
        return new Response($i+1 .' data saved');
    }
}
