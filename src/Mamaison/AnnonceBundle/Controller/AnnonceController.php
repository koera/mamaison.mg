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

            //gallery

            foreach ($request->files->get('gallery') as $file){
                if ($file instanceof UploadedFile) {
                    $g = new Gallery();
                    $this->removeOldFile($g);
                    $filename = md5(uniqid()). '.' . $file->guessClientExtension();
                    $file->move('uploads/galleries/', $filename);
                    $g->setImage($filename);
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

            return $this->redirectToRoute('annonce_show', array('id' => $annonce->getId(),'title' => $annonce->getTitre()));
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
    public function mesproprietesAction(Request $request){
        if(!$request->get('page') )
            $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                ->findPageBy(1, 3, ['user'=>$this->getUser()]);
        else
            $annonces = $this->getDoctrine()->getRepository(Annonce::class)
                ->findPageBy($request->get('page'), 3, ['user'=>$this->getUser()]);

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
        $ville = $request->cookies->get('ville');
        $annonce = $this->getDoctrine()->getRepository(Annonce::class)
            ->find($id);

        $category = $this->getDoctrine()->getRepository(Category::class)
            ->findAll();

        $annonceLesPlusNoter = [];

        foreach ($this->getDoctrine()->getRepository(Annonce::class)
                     ->getAnnoncePlusNote($ville) as $a)
            $annonceLesPlusNoter[] = $a[0];

        return $this->render('annonce/show.html.twig', array(
            'annonce' => $annonce,
            'category' => $category,
            'annoncePlusNote' => $annonceLesPlusNoter
        ));
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

