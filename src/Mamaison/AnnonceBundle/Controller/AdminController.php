<?php
/**
 * Created by Koera.
 * User: trustylabs
 * Date: 9/17/18
 * Time: 9:29 AM
 */

namespace Mamaison\AnnonceBundle\Controller;


use AppBundle\Entity\User;
use Goutte\Client;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\DomCrawler\Crawler;


/**
 * Class AdminController
 * @package Mamaison\AnnonceBundle\Controller
 *
 * @Route("/admin")
 */
class AdminController extends Controller
{

    /**
     * @Route("/", name="admin.index")
     */
    public function indexAction(){
        $em = $this->getDoctrine()->getManager();
        $nombreUsers = count($em->getRepository(User::class)
            ->findAll());
        $annonces = $em->getRepository(Annonce::class)
            ->findAllAnnonce();

        $nombreVente = 0;
        $nombreAlouerParJours = 0;
        $nombreAlouerParMois = 0;
        foreach ($annonces as $annonce){
            if($annonce->getTypeAnnonce()->getValeur() == 'A vendre'){
                $nombreVente++;
            }
            if($annonce->getTypeAnnonce()->getValeur() == 'A louer par mois'){
                $nombreAlouerParMois++;
            }
            if($annonce->getTypeAnnonce()->getValeur() == 'A louer par jours'){
                $nombreAlouerParJours++;
            }

        }


        return $this->render('admin/index.html.twig',
            [
                'nombreUsers'           => $nombreUsers,
                'nombreAnnonces'        => count($annonces),
                'nombreVente'           => $nombreVente,
                'nombreAlouerParJours'  => $nombreAlouerParJours,
                'nombreAlouerParMois'   => $nombreAlouerParMois
            ]
        );
    }

    /**
     * @return Response
     * @Route("/users", name="admin.users.index")
     */
    public function usersAction(){
        $users = $this->getDoctrine()->getManager()->getRepository(User::class)
            ->findAll();
        return $this->render('admin/users/index.html.twig',[
            'users' => $users
        ]);
    }

    /**
     * @return Response
     * @Route("/annonces/", name="admin.annonces.index")
     */
    public function annoncesAction(){
        $annonces = $this->getDoctrine()->getManager()
            ->getRepository(Annonce::class)
            ->findAllAnnonce('',true);
        return $this->render('admin/annonces/index.html.twig',[
            'annonces' => $annonces
        ]);
    }

    /**
     * @Route("/annonces/active/{id}", name="admin.annonces.active")
     * @param Annonce $annonce
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function activeAnnonceAction(Annonce $annonce){
        $annonce->setValide(true);
        $em = $this->getDoctrine()->getManager();
        $em->persist($annonce);
        $em->flush();
        $message = (new \Swift_Message('Propriete publier'))
            ->setFrom('no-reply@mamaison.mg')
            ->setTo($annonce->getUser()->getEmail())
            ->setBody(
                $this->renderView(
                    'emails/admin/propriete-active.html.twig',
                    ['user' => $annonce->getUser()]
                ),
                'text/html'
            );
        $this->get('mailer')->send($message);
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,$this->getParameter('newsletter_domain')."/newsletter/api/getAll");
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
                        ['annonce' => $annonce]
                    ),
                    'text/html'
                );
            $this->get('mailer')->send($message);
        }

        curl_close ($ch);

        return $this->redirectToRoute('admin.annonces.index');
    }

    /**
     * @Route("/annonces/desactive", name="admin.annonces.desactive")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function desactiveAnnonceAction(Request $request){

        $em = $this->getDoctrine()->getManager();
        $annonce = $em->getRepository(Annonce::class)
            ->findAnnonceById($request->get('id'));
        $annonce->setValide(false);
        $em->persist($annonce);
        $em->flush();
        $message = (new \Swift_Message('Propriete publier'))
            ->setFrom('no-reply@mamaison.mg')
            ->setTo($annonce->getUser()->getEmail())
            ->setBody(
                $this->renderView(
                    'emails/admin/propriete-desactive.html.twig',
                    [
                        'user' => $annonce->getUser(),
                        'comments' => $request->get('comments')
                    ]
                ),
                'text/html'
            );
        $this->get('mailer')->send($message);
        return $this->redirectToRoute('admin.annonces.index');
    }


    function crawl_page($url, $depth = 5)
    {
        static $seen = array();
        if (isset($seen[$url]) || $depth === 0) {
            return;
        }

        $seen[$url] = true;

        $dom = new \DOMDocument('1.0');
        @$dom->loadHTMLFile($url);

        $anchors = $dom->getElementsByTagName('a');
        foreach ($anchors as $element) {
            $href = $element->getAttribute('href');
            if (0 !== strpos($href, 'http')) {
                $path = '/' . ltrim($href, '/');
                if (extension_loaded('http')) {
                    $href = http_build_url($url, array('path' => $path));
                } else {
                    $parts = parse_url($url);
                    $href = $parts['scheme'] . '://';
                    if (isset($parts['user']) && isset($parts['pass'])) {
                        $href .= $parts['user'] . ':' . $parts['pass'] . '@';
                    }
                    $href .= $parts['host'];
                    if (isset($parts['port'])) {
                        $href .= ':' . $parts['port'];
                    }
                    $href .= dirname($parts['path'], 1).$path;
                }
            }
            $this->crawl_page($href, $depth - 1);
        }
        echo "URL:",$url,PHP_EOL,"CONTENT:",PHP_EOL,$dom->saveHTML(),PHP_EOL,PHP_EOL;
    }
}