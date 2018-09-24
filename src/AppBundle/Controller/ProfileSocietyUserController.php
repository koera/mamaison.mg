<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/13/18
 * Time: 1:20 PM
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Profile;
use AppBundle\Entity\ProfileSocietyUser;
use AppBundle\Entity\User;
use AppBundle\Form\ChangePasswordType;
use AppBundle\Model\ChangePassword;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\User\UserInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

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
     * Edit the user.
     *
     * @param Request $request
     *
     * @return Response
     *
     * @Route("/{societyName}", name=".edit")
     */
    public function editAction($societyName,Request $request)
    {

        /** @var User $user */
        $user = $this->getUser();

        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        if($user->getType() != 'society'){
            throw new AccessDeniedException('you have not a permission for this page');
        }

        if($user->getProfileSocietyUser()->getNom() != $societyName){
            throw new AccessDeniedException('Something went wrong');
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
            $this->addFlash("success", "Profile modifier success");
            return $this->redirectToRoute('compte.edit',['societyName'=>$user->getSocietyName()]);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user = $this->getUser();
            $encoder = $this->container->get('security.password_encoder');
            $password = $encoder->encodePassword($user, $changePasswordModel->getPassword());
            $user->setPassword($password);
            $em->persist($user);
            $em->flush();
            $this->addFlash("success", "Mot de passe modifier");
            return $this->redirectToRoute('compte.edit',['societyName'=>$user->getSocietyName()]);
        }

        return $this->render('profile/society_user.html.twig', array(
            'user' => $user,
            'profile' => $profile,
            'edit_form' => $editForm->createView(),
            'changePassword_form' => $form->createView()
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