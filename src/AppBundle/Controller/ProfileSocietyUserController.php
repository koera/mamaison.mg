<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/13/18
 * Time: 1:20 PM
 */

namespace AppBundle\Controller;


use AppBundle\Model\ChangePassword;
use AppBundle\Entity\Profile;
use AppBundle\Entity\User;
use AppBundle\Form\ChangePasswordType;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Mamaison\AnnonceBundle\Entity\Gallery;
use Mamaison\AnnonceBundle\Entity\Quartier;
use Mamaison\AnnonceBundle\Entity\Region;
use Mamaison\AnnonceBundle\Entity\Ville;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Form\Form;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Entity\ProfileSocietyUser;

/**
 * Class ProfileSocietyUserController
 * @package AppBundle\Controller
 *
 * @Route("/compte",name="compte")
 *
 */
class ProfileSocietyUserController extends Controller
{

    /**
     * @param Request $request
     * @param string $societyName
     * @Route("/{societyName}", name=".edit")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function indexAction(Request $request,$societyName){

        /** @var User $user */
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        if($user->getType() != 'society'){
            throw new AccessDeniedException('you have not a permission for this page');
        }

        if($user->getSocietyName() != $societyName){
            throw new AccessDeniedException('we can\'t find this society name');
        }

        $action = 'save';
        if (is_null($user->getProfileSocietyUser())) {
            $profile = new ProfileSocietyUser();
        } else {
            $profile = $user->getProfileSocietyUser();
            $action = 'edit';
        }

        $editForm = $this->createForm('AppBundle\Form\ProfileSocietyUserType', $profile);
        $editForm->handleRequest($request);


        /* change password form */
        $changePasswordModel = new ChangePassword();
        $form = $this->createForm(ChangePasswordType::class, $changePasswordModel);
        $form->handleRequest($request);
        $this->changePasswordAction($form,$changePasswordModel,$societyName);
        /* end changepassword */


        /* propriete */
        $annonce = new Annonce();
        $formPropriete = $this->createForm('Mamaison\AnnonceBundle\Form\AnnonceType', $annonce);
        $formPropriete->handleRequest($request);
        $this->addProprieteAction($request,$formPropriete,$annonce,$societyName);
        /* end propriete */

        /* change profile */
        if ($editForm->isSubmitted() && $editForm->isValid()) {

            $file = $profile->getAvatarFile();
            if ($file instanceof UploadedFile) {
                $this->removeOldFile($profile);
                $filename = time() . '.' . $file->guessClientExtension();
                $file->move('uploads/avatars/', $filename);
                $profile->setAvatar($filename);
            }

            if ($action == 'save') {
                $em = $this->getDoctrine()->getManager();
                $em->persist($profile);

                $user->setProfileSocietyUser($profile);

                $em->merge($user);

                $em->flush();
            } else
                $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('compte.edit',array('societyName'=>$societyName));
        }
        /* end change profile */

        return $this->render('profile/society_user.html.twig', array(
            'user' => $user,
            'profile' => $profile,
            'edit_form' => $editForm->createView(),
            'changePassword_form' =>$form->createView(),
            'propriete_form' => $formPropriete->createView()
        ));
    }

    /**
     * @param Form $changePassword_form
     * @param ChangePassword $changePasswordModel
     * @param string $societyName
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    private function changePasswordAction(Form $changePassword_form,ChangePassword $changePasswordModel,$societyName){
        if ($changePassword_form->isSubmitted() && $changePassword_form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user = $this->getUser();
            $encoder = $this->container->get('security.password_encoder');
            $password = $encoder->encodePassword($user, $changePasswordModel->getPassword());
            $user->setPassword($password);
            $em->persist($user);
            $em->flush();
            return $this->redirectToRoute('compte.edit',array('societyName'=>$societyName));
        }
    }


    /**
     * @param Request $request
     * @param Form $formPropriete
     * @param Annonce $annonce
     * @param string $societyName
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    private function addProprieteAction(Request $request, Form $formPropriete, Annonce $annonce,$societyName){

        if ($formPropriete->isSubmitted() && $formPropriete->isValid()) {
            $em = $this->getDoctrine()->getManager();

            for ($i = 0; $i <= 5; $i++) {
                // save Gallery
                if (!is_null($formPropriete->get('gallery_'.$i)->getData())) {
                    $g = new Gallery();
                    $g->setImage($formPropriete->get('gallery_'.$i)->getData());
                    $em->persist($g);
                    $annonce->addGallery($g);
                }
            }

            // quartier ville and region

            $quartierRequest = $formPropriete->get('neighborhood')->getData();
            $villeRequest = $formPropriete->get('ville')->getData();
            $regionRequest = $formPropriete->get('region')->getData();

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

            return $this->redirectToRoute('compte.edit',array('societyName'=>$societyName));
        }
    }

    /**
     * @param Profile $profile
     */
    private function removeOldFile(Profile $profile)
    {
        $file = $this->getFileFromFileName($profile);
        if ($file !== null)
            @unlink($file->getRealPath());
    }

    /**
     * @param Profile $profile
     * @return File|null
     */
    private function getFileFromFileName(Profile $profile)
    {
        $filename = $profile->getAvatar();
        if (empty($filename)) {
            return null;
        } else
            return new File('uploads/avatars/' . $filename, false);
    }
}