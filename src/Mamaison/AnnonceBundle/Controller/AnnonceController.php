<?php

namespace Mamaison\AnnonceBundle\Controller;

use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Category;
use Mamaison\AnnonceBundle\Entity\Gallery;
use Mamaison\AnnonceBundle\Entity\Quartier;
use Mamaison\AnnonceBundle\Entity\Region;
use Mamaison\AnnonceBundle\Entity\Ville;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

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

            // galleries
            foreach ($request->request->get('image') as $image_id){
                if ($image_id) {
                    $g = $em->getRepository(Gallery::class)->find($image_id);
                    $annonce->addGallery($g);
                }
            }

            $em->persist($annonce);

            $em->flush();


            $this->addFlash("success", "Annnonce ajouter avec success");

            return $this->redirectToRoute('annonce_show', array('id' => $annonce->getId(),'title' => $annonce->getTitre()));
        }


        return $this->render('annonce/new.html.twig', array(
            'annonce' => $annonce,
            'images'=> $this->_getImages($request),
            'form' => $form->createView()
        ));
    }


    private function _getImages($request)
    {
        if($request->request->get('image')) {
            $em = $this->getDoctrine()->getManager();
            $images = [];
            foreach ($request->request->get('image') as $image_id) {
                if ($image_id) {
                    $images[] = $em->getRepository(Gallery::class)->find($image_id);
                }
            }
            return $images;
        }
    }

    /**
     * Get annonce add by User
     *
     * @Route("/mon-compte/mes-proprietes", name="annonce_mon_proprietes")
     * @Method({"GET"})
     */
    public function mesproprietesAction(Request $request){
       $annonces = $this->getDoctrine()->getRepository(Annonce::class)
           ->getProprieteById($this->getUser()->getId());

       $paginator  = $this->get('knp_paginator');

       $pagination = $paginator->paginate(
           $annonces,
           $request->query->getInt('page', 1),
           4
       );
       return $this->render('annonce/mes-proprietes.html.twig', array('annonces'=>$pagination));
    }

    /**
     * Get annonce favorite
     *
     * @Route("/mon-compte/mes-proprietes-favorites", name="annonce_mon_proprietes_favorites")
     * @Method({"GET"})
     */
    public function mesproprietesfavoritesAction(Request $request){
        $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                                    ->getProprieteFavorite($this->getUser()->getId());

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $annonces,
            $request->query->getInt('page', 1),
            4
        );

        return $this->render('annonce/mes-proprietes-favorites.html.twig', [
            'annonces' => $pagination
        ]);
    }

    /**
     * Finds and displays a annonce entity.
     *
     * @Route("/propriete/{title}/{id}", name="annonce_show")
     * @Method("GET")
     */
    public function showAction(Request $request,$title,$id)
    {
        $ville = $request->cookies->get('ville');
        $annonce = $this->getDoctrine()->getRepository(Annonce::class)
            ->findAnnonceById($id);
        if($annonce){
            $category = $this->getDoctrine()->getRepository(Category::class)
                ->findAll();

            foreach ($this->getDoctrine()->getRepository(Annonce::class)
                         ->getAnnoncePlusNote($ville) as $a)
                $annonceLesPlusNoter[] = $a[0];
            return $this->render('annonce/show.html.twig', array(
                'annonce' => $annonce,
                'category' => $category,
                'annoncePlusNote' => $annonceLesPlusNoter
            ));
        }
        return new Response("Propriete not found");
    }





    /**
     * @param Gallery $gallery
     */
    private function removeOldFile(Gallery $gallery)
    {
        $file = $this->getFileFromFileName($gallery);
        if ($file !== null)
            @unlink($file->getRealPath());
    }

    /**
     * @param Gallery $gallery
     * @return File|null
     */
    private function getFileFromFileName(Gallery $gallery)
    {
        $filename = $gallery->getImage();
        if (empty($filename)) {
            return null;
        } else
            return new File('uploads/galleries/' . $filename, false);
    }


    /**
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @Route("/remove/{id}", name="annonce.delete")
     */
    public function deleteAnnonceAction(Request $request,$id){
        $em = $this->getDoctrine()->getManager();
        $annonce = $em->getRepository(Annonce::class)
            ->find($id);
        if($annonce){
            $em->remove($annonce);
            $em->flush();
        }
        $this->addFlash("success", "Propriete supprime :)");
        return $this->redirectToRoute('annonce_mon_proprietes');
    }
}

