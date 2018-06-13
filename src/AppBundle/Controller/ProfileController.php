<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Profile;
use FOS\UserBundle\Controller\ProfileController as BaseController;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\Form\Factory\FactoryInterface;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Model\UserInterface;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * @Route("/mon-compte", name="mon-compte")
 */
class ProfileController extends BaseController
{

    private $formFactory;
    private $userManager;
    private $eventDispatcher;

    public function __construct(EventDispatcherInterface $eventDispatcher, FactoryInterface $formFactory, UserManagerInterface $userManager)
    {
        parent::__construct($eventDispatcher, $formFactory, $userManager);
        $this->formFactory = $formFactory;
        $this->eventDispatcher = $eventDispatcher;
        $this->userManager = $userManager;
    }

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

        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        $action = 'save';


        if(is_null($user->getProfile())){
            $profile = new Profile();
        }else{
            $profile = $user->getProfile();
            $action = 'edit';
        }

        $editForm = $this->createForm('AppBundle\Form\ProfileType', $profile);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {

            $file = $profile->getAvatarFile();
            if($file instanceof UploadedFile){
                $this->removeOldFile($profile);
                $filename = time(). '.'.$file->guessClientExtension();
                $file->move('uploads/avatars/',$filename);
                $profile->setAvatar($filename);
            }

            if($action == 'save'){
                $em = $this->getDoctrine()->getManager();
                $em->persist($profile);

                $user->setProfile($profile);

                $em->merge($user);

                $em->flush();
            }
            else
                $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('mon-compte.edit');
        }

        return $this->render('@FOSUser/Profile/show.html.twig', array(
            'user' => $user,
            'profile' => $profile,
            'edit_form' => $editForm->createView(),
        ));
    }


    private function removeOldFile(Profile $profile){
        $file = $this->getFileFromFileName($profile);
        if($file !== null)
            @unlink($file->getRealPath());
    }

    private function getFileFromFileName(Profile $profile){
        $filename = $profile->getAvatar();
        if(empty($filename)){
            return null;
        }
        else
            return new File( 'uploads/avatars/'. $filename,false);
    }

}