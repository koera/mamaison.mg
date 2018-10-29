<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 7/27/18
 * Time: 3:06 PM
 */

namespace Mamaison\AnnonceBundle\Controller;


use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class AgentController
 * @package Mamaison\AnnonceBundle\Controller
 *
 * @Route("/agent")
 */
class AgentController extends Controller
{
    /**
     * @param string $id
     * @Route("/{id}", name="agent_show")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAction($id){
        $user = $this->getDoctrine()->getRepository(User::class)
            ->find($id);
        return $this->render('agent/show.html.twig',array('user'=>$user));
    }

}