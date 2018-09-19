<?php

namespace Mamaison\AnnonceBundle\Controller;

use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Gallery;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Gallery controller.
 *
 */
class GalleryController extends Controller
{
    /**
     * Creates a new gallery entity.
     *
     * @Route("/mon-compte/ajout-propriete/gallery", name="mamaison.gallery_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $gallery = new Gallery();
        $form = $this->createForm('Mamaison\AnnonceBundle\Form\GalleryType', $gallery);
        $response = new Response();
        $response->headers->set('content-type','application/json');

        if ($request->isMethod('POST')) {
            $form->submit($request->files->all());
            if ($form->isSubmitted() && $form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $gallery->upload();
                $gallery->setUsed(false);
                $em->persist($gallery);
                $em->flush();
                $response->setContent(json_encode(array('success'=>'L\'image a été bien enregistré.','gallery_id'=>$gallery->getId())));
                return $response;
            }
            
            $errors = $form->getErrors();
        }
        $response->setContent(json_encode(array('error'=>$errors)));
        return $response;
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("/mon-compte/edit-propriete/gallery", name="mamaison.gallery_delete")
     */
    public function removeGalleryAction(Request $request){
        if ($request->isMethod('POST')) {
            $em = $this->getDoctrine()->getManager();
            /** @var Gallery $gallery */
            $gallery = $em->getRepository(Gallery::class)->find($request->get('image-id'));
            if ($gallery) {
                $gallery->removeFile();
                $em->remove($gallery);
                $em->flush();
                $response = new Response();
                $response->setContent(json_encode(array('success' => 'Image deleted success')));
                return $response;
            }
        }

    }

    /**
     * Finds and displays a gallery entity.
     *
     * @Route("/gallery/view/thumbs/{id}", name="mamaison.thumb")
     * @Method("GET")
     */
    public function showAction(Annonce $annonce)
    {
        $response = new Response();
        $em = $this->getDoctrine()->getManager();
        /** @var Annonce $annonce */
        $annonce = $em->getRepository(Annonce::class)->find($annonce->getId());
        $image = $annonce->getGalleries()->first();
        if($image){
            $disposition = $response->headers->makeDisposition(ResponseHeaderBag::DISPOSITION_INLINE, $image->getImage());
            $response->headers->set('Content-Disposition', $disposition);
            $response->headers->set('Content-Type', 'image/jpeg');
            $response->setContent(file_get_contents($image->getRootPath()));
        }
        return $response;
    }

}
