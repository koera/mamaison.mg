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
//    /**
//     * Lists all gallery entities.
//     *
//     * @Route("/gallery", name="mamaison.gallery_index")
//     * @Method("GET")
//     */
//    public function indexAction()
//    {
//        $em = $this->getDoctrine()->getManager();
//
//        $galleries = $em->getRepository('MamaisonAnnonceBundle:Gallery')->findAll();
//
//        return $this->render('gallery/index.html.twig', array(
//            'galleries' => $galleries,
//        ));
//    }

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
//
//    /**
//     * Displays a form to edit an existing gallery entity.
//     *
//     * @Route("/{id}/edit", name="gallery_edit")
//     * @Method({"GET", "POST"})
//     */
//    public function editAction(Request $request, Gallery $gallery)
//    {
//        $deleteForm = $this->createDeleteForm($gallery);
//        $editForm = $this->createForm('Mamaison\AnnonceBundle\Form\GalleryType', $gallery);
//        $editForm->handleRequest($request);
//
//        if ($editForm->isSubmitted() && $editForm->isValid()) {
//            $this->getDoctrine()->getManager()->flush();
//
//            return $this->redirectToRoute('gallery_edit', array('id' => $gallery->getId()));
//        }
//
//        return $this->render('gallery/edit.html.twig', array(
//            'gallery' => $gallery,
//            'edit_form' => $editForm->createView(),
//            'delete_form' => $deleteForm->createView(),
//        ));
//    }
//
//    /**
//     * Deletes a gallery entity.
//     *
//     * @Route("/{id}", name="gallery_delete")
//     * @Method("DELETE")
//     */
//    public function deleteAction(Request $request, Gallery $gallery)
//    {
//        $form = $this->createDeleteForm($gallery);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            $em = $this->getDoctrine()->getManager();
//            $em->remove($gallery);
//            $em->flush();
//        }
//
//        return $this->redirectToRoute('gallery_index');
//    }
//
//    /**
//     * Creates a form to delete a gallery entity.
//     *
//     * @param Gallery $gallery The gallery entity
//     *
//     * @return \Symfony\Component\Form\Form The form
//     */
//    private function createDeleteForm(Gallery $gallery)
//    {
//        return $this->createFormBuilder()
//            ->setAction($this->generateUrl('gallery_delete', array('id' => $gallery->getId())))
//            ->setMethod('DELETE')
//            ->getForm()
//        ;
//    }
}
