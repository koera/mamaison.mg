<?php

namespace AppBundle\Controller;

use AppBundle\Model\ChangePassword;
use AppBundle\Entity\Profile;
use AppBundle\Entity\ProfileSimpleUser;
use AppBundle\Entity\ProfileSocietyUser;
use AppBundle\Entity\User;
use AppBundle\Form\ChangePasswordType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\User\UserInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * @Route("/mon-compte", name="mon-compte")
 */
class ProfileSimpleUserController extends Controller
{


    /**
     * Edit the user.
     *
     * @param Request $request
     *
     * @return Response
     *
     * @Route("/", name=".edit")
     */
    public function editAction(Request $request)
    {

        /** @var User $user */
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        if($user->getType() != 'simple'){
            throw new AccessDeniedException('you have not a permission for this page');
        }

        $action = 'save';

        if (is_null($user->getProfileSimpleUser())) {
            $profile = new ProfileSimpleUser();
        } else {
            $profile = $user->getProfileSimpleUser();
            $action = 'edit';
        }

        $editForm = $this->createForm('AppBundle\Form\ProfileSimpleUserType', $profile);
        $editForm->handleRequest($request);

        /* change password form */
        $changePasswordModel = new ChangePassword();
        $form = $this->createForm(ChangePasswordType::class, $changePasswordModel);
        $form->handleRequest($request);
        /* end changepassword */

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

                $user->setProfileSimpleUser($profile);

                $em->merge($user);

                $em->flush();
            } else
                $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('mon-compte.edit');
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user = $this->getUser();
            $encoder = $this->container->get('security.password_encoder');
            $password = $encoder->encodePassword($user, $changePasswordModel->getPassword());
            $user->setPassword($password);
            $em->persist($user);
            $em->flush();
            return $this->redirectToRoute('mon-compte.edit');
        }

        return $this->render('profile/simple_user.html.twig', array(
            'user' => $user,
            'profile' => $profile,
            'edit_form' => $editForm->createView(),
            'changePassword_form'=>$form->createView()
        ));
    }

    private function removeOldFile(Profile $profile)
    {
        $file = $this->getFileFromFileName($profile);
        if ($file !== null)
            @unlink($file->getRealPath());
    }

    private function getFileFromFileName(Profile $profile)
    {
        $filename = $profile->getAvatar();
        if (empty($filename)) {
            return null;
        } else
            return new File('uploads/avatars/' . $filename, false);
    }

}