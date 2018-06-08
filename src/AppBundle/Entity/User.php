<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Mamaison\AnnonceBundle\Concern\Annoncable;
use Mamaison\AnnonceBundle\Entity\Annonce;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 */
class User extends BaseUser
{

    /**
     * @var Annonce
     *
     * User can like Annonce
     *
     */
    use Annoncable;

    /**
     * @var integer
     *
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;


    /**
     * @var Ville
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Profile")
     */
    private $profile;

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->annonces = new \Doctrine\Common\Collections\ArrayCollection();
        parent::__construct();
    }


    /**
     * Set profile
     *
     * @param \AppBundle\Entity\Profile $profile
     *
     * @return User
     */
    public function setProfile(\AppBundle\Entity\Profile $profile = null)
    {
        $this->profile = $profile;

        return $this;
    }

    /**
     * Get profile
     *
     * @return \AppBundle\Entity\Profile
     */
    public function getProfile()
    {
        return $this->profile;
    }
}
