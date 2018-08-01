<?php

namespace Mamaison\AnnonceBundle\Controller;

use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\Gallery;
use Mamaison\AnnonceBundle\Entity\Quartier;
use Mamaison\AnnonceBundle\Entity\Region;
use Mamaison\AnnonceBundle\Entity\Ville;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Annonce controller.
 *
 */
class AnnonceController extends Controller
{

    /**
     * Creates a new annonce entity.
     *
     * @Route("/mon-compte/ajout-propriete", name="annonce_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $annonce = new Annonce();
        $form = $this->createForm('Mamaison\AnnonceBundle\Form\AnnonceType', $annonce);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();

            for ($i = 0; $i <= 5; $i++) {
                // save Gallery
                if (!is_null($form->get('gallery_'.$i)->getData())) {
                    $g = new Gallery();
                    $g->setImage($form->get('gallery_'.$i)->getData());
                    $em->persist($g);
                    $annonce->addGallery($g);
                }
            }

            // quartier ville and region

            $quartierRequest = $form->get('neighborhood')->getData();
            $villeRequest = $form->get('ville')->getData();
            $regionRequest = $form->get('region')->getData();

            $region = $em->getRepository(Region::class)->findOneBy(['nom' => strtolower($regionRequest)]);
            if(is_null($region)){
                $region = new Region();
                $region->setNom(strtolower($regionRequest));
                $em->persist($region);
            }

            $ville = $em->getRepository(Ville::class)->findOneBy(['nom'=> strtolower($villeRequest)]);
            if(is_null($ville)){
                $ville = new Ville();
                $ville->setNom(strtolower($villeRequest));
                $ville->setRegion($region);
                $em->persist($ville);
            }

            $quartier = $em->getRepository(Quartier::class)->findOneBy(['nom'=>strtolower($quartierRequest)]);

            if(is_null($quartier)){
                $quartier = new Quartier();
                $quartier->setNom(strtolower($quartierRequest))
                    ->setVille($ville);
                $em->persist($quartier);
            }

            $annonce->setQuartier($quartier);

            $annonce->setUser($this->getUser());

            $em->persist($annonce);

            $em->flush();


            $this->addFlash("success", "Annnonce ajouter avec success");

            return $this->redirectToRoute('annonce_show', array('id' => $annonce->getId()));
        }

        return $this->render('annonce/new.html.twig', array(
            'annonce' => $annonce,
            'form' => $form->createView()
        ));
    }

    /**
     * Get annonce add by User
     *
     * @Route("/mon-compte/mes-proprietes", name="annonce_mon_proprietes")
     * @Method({"GET"})
     */
    public function mesproprietesAction(){
        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
            ->findBy(['user'=>$this->getUser()]);
        return $this->render('annonce/mes-proprietes.html.twig', array('annonces'=>$annonces));
    }

    /**
     * Get annonce favorite
     *
     * @Route("/mon-compte/mes-proprietes-favorites", name="annonce_mon_proprietes_favorites")
     * @Method({"GET"})
     */
    public function mesproprietesfavoritesAction(){
        return $this->render('annonce/mes-proprietes-favorites.html.twig', array('user'=>$this->getUser()));
    }

    /**
     * Finds and displays a annonce entity.
     *
     * @Route("/propriete/{title}/{id}", name="annonce_show")
     * @Method("GET")
     */
    public function showAction(Request $request,$title,$id)
    {
        $annonce = $this->getDoctrine()->getRepository(Annonce::class)
            ->find($id);

        $category = $this->getDoctrine()->getRepository(Category::class)
            ->findAll();

        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote() as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('annonce/show.html.twig', array(
            'annonce' => $annonce,
            'category' => $category,
            'annoncePlusNote' => $annonceLesPlusNoter
        ));
    }
}
