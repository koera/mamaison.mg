<?php

namespace Mamaison\AnnonceBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Mamaison\AnnonceBundle\Entity\Annonce;


/**
 * Category
 *
 * @ORM\Table(name="category")
 * @ORM\Entity(repositoryClass="Mamaison\AnnonceBundle\Repository\CategoryRepository")
 */
class Category
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
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=255, unique=true)
     */
    private $type;


    /**
     * @var array
     *
     * @ORM\OneToMany(targetEntity="Mamaison\AnnonceBundle\Entity\Annonce", mappedBy="category")
     */
    private $annonces;

    public function __construct()
    {
        $this->annonces = new ArrayCollection();
    }


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
     * Set type
     *
     * @param string $type
     *
     * @return Category
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Add annonce
     *
     * @param \Mamaison\AnnonceBundle\Entity\Annonce $annonce
     *
     * @return Category
     */
    public function addAnnonce(\Mamaison\AnnonceBundle\Entity\Annonce $annonce)
    {
        $this->annonces[] = $annonce;

        return $this;
    }

    /**
     * Remove annonce
     *
     * @param \Mamaison\AnnonceBundle\Entity\Annonce $annonce
     */
    public function removeAnnonce(\Mamaison\AnnonceBundle\Entity\Annonce $annonce)
    {
        $this->annonces->removeElement($annonce);
    }

    /**
     * Get annonces
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAnnonces()
    {
        return $this->annonces;
    }
}
