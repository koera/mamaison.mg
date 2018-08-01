<?php

namespace Mamaison\AnnonceBundle\Entity;

use AppBundle\Entity\User;
use Doctrine\ORM\Mapping as ORM;

/**
 * Rating
 *
 * @ORM\Table(name="rating")
 * @ORM\Entity(repositoryClass="Mamaison\AnnonceBundle\Repository\RatingRepository")
 */
class Rating
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;


    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="ratings")
     *
     */
    private $user;

    /**
     * @var Annonce
     * @ORM\ManyToOne(targetEntity="Mamaison\AnnonceBundle\Entity\Annonce", inversedBy="ratings")
     *
     */
    private $annonce;

    /**
     * @var int
     * @ORM\Column(name="value", type="integer", nullable=false)
     */
    private $ratingValue;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set user
     *
     * @param \AppBundle\Entity\User $user
     *
     * @return Rating
     */
    public function setUser(\AppBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \AppBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set annonce
     *
     * @param Annonce $annonce
     *
     * @return Rating
     */
    public function setAnnonce(Annonce $annonce = null)
    {
        $this->annonce = $annonce;

        return $this;
    }

    /**
     * Get annonce
     *
     * @return Annonce
     */
    public function getAnnonce()
    {
        return $this->annonce;
    }

    /**
     * Set ratingValue
     *
     * @param integer $ratingValue
     *
     * @return Rating
     */
    public function setRatingValue($ratingValue)
    {
        $this->ratingValue = $ratingValue;

        return $this;
    }

    /**
     * Get ratingValue
     *
     * @return integer
     */
    public function getRatingValue()
    {
        return $this->ratingValue;
    }
}
