<?php
/**
 * Created by Koera.
 * User: trustylabs
 * Date: 9/17/18
 * Time: 9:29 AM
 */

namespace Mamaison\AnnonceBundle\Controller;


use AppBundle\Entity\User;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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
        $nombreAnnonces = count($em->getRepository(Annonce::class)
            ->findAllAnnonce());

        return $this->render('admin/index.html.twig',
            [
                'nombreUsers'       => $nombreUsers,
                'nombreAnnonces'    => $nombreAnnonces
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
            ->findAllAnnonce();
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
}