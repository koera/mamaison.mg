<?php

namespace Mamaison\AnnonceBundle\Entity;

use AppBundle\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Mamaison\AnnonceBundle\Concern\Annoncable;
use Mamaison\AnnonceBundle\Entity\Category;

/**
 * Annonce
 *
 * @ORM\Table(name="annonce")
 * @ORM\Entity(repositoryClass="Mamaison\AnnonceBundle\Repository\AnnonceRepository")
 */
class Annonce
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
     * @ORM\Column(name="titre", type="string", length=255)
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var float
     *
     * @ORM\Column(name="prix", type="float")
     */
    private $prix;

    /**
     * @var int
     *
     * @ORM\Column(name="nombrePiece", type="integer", nullable=true)
     */
    private $nombrePiece;

    /**
     * @var int
     *
     * @ORM\Column(name="surface", type="integer", nullable=true)
     */
    private $surface;

    /**
     * @var string
     *
     * @ORM\Column(name="uniteSurface", type="string", length=255, nullable=true)
     */
    private $uniteSurface;

    /**
     * @var string
     *
     * @ORM\Column(name="adresse", type="string", length=255)
     */
    private $adresse;

    /**
     * @var Category
     *
     * @ORM\ManyToOne(targetEntity="Mamaison\AnnonceBundle\Entity\Category", inversedBy="annonces")
     */
    private $category;

    /**
     * @var TypeAnnonce
     *
     * @ORM\ManyToOne(targetEntity="Mamaison\AnnonceBundle\Entity\TypeAnnonce")
     */
    private $typeAnnonce;

    /**
     * @var Quartier
     *
     * @ORM\ManyToOne(targetEntity="Mamaison\AnnonceBundle\Entity\Quartier")
     */
    private $quartier;

    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User")
     */
    private $user;

    /**
     * @var array
     *
     * @ORM\ManyToMany(targetEntity="Mamaison\AnnonceBundle\Entity\Caracteristique")
     */
    private $caracteristiques;


    /**
     * @var array
     *
     * @ORM\ManyToMany(targetEntity="Mamaison\AnnonceBundle\Entity\Gallery")
     */
    private $galleries;


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
     * Set titre
     *
     * @param string $titre
     *
     * @return Annonce
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Annonce
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set prix
     *
     * @param float $prix
     *
     * @return Annonce
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get prix
     *
     * @return float
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set nombrePiece
     *
     * @param integer $nombrePiece
     *
     * @return Annonce
     */
    public function setNombrePiece($nombrePiece)
    {
        $this->nombrePiece = $nombrePiece;

        return $this;
    }

    /**
     * Get nombrePiece
     *
     * @return int
     */
    public function getNombrePiece()
    {
        return $this->nombrePiece;
    }

    /**
     * Set surface
     *
     * @param integer $surface
     *
     * @return Annonce
     */
    public function setSurface($surface)
    {
        $this->surface = $surface;

        return $this;
    }

    /**
     * Get surface
     *
     * @return int
     */
    public function getSurface()
    {
        return $this->surface;
    }

    /**
     * Set uniteSurface
     *
     * @param string $uniteSurface
     *
     * @return Annonce
     */
    public function setUniteSurface($uniteSurface)
    {
        $this->uniteSurface = $uniteSurface;

        return $this;
    }

    /**
     * Get uniteSurface
     *
     * @return string
     */
    public function getUniteSurface()
    {
        return $this->uniteSurface;
    }

    /**
     * Set adresse
     *
     * @param string $adresse
     *
     * @return Annonce
     */
    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * Get adresse
     *
     * @return string
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * Set category
     *
     * @param \Mamaison\AnnonceBundle\Entity\Category $category
     *
     * @return Annonce
     */
    public function setCategory(\Mamaison\AnnonceBundle\Entity\Category $category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return \Mamaison\AnnonceBundle\Entity\Category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set typeAnnonce
     *
     * @param \Mamaison\AnnonceBundle\Entity\TypeAnnonce $typeAnnonce
     *
     * @return Annonce
     */
    public function setTypeAnnonce(\Mamaison\AnnonceBundle\Entity\TypeAnnonce $typeAnnonce = null)
    {
        $this->typeAnnonce = $typeAnnonce;

        return $this;
    }

    /**
     * Get typeAnnonce
     *
     * @return \Mamaison\AnnonceBundle\Entity\TypeAnnonce
     */
    public function getTypeAnnonce()
    {
        return $this->typeAnnonce;
    }


    /**
     * Set quartier
     *
     * @param \Mamaison\AnnonceBundle\Entity\Quartier $quartier
     *
     * @return Annonce
     */
    public function setQuartier(\Mamaison\AnnonceBundle\Entity\Quartier $quartier = null)
    {
        $this->quartier = $quartier;

        return $this;
    }

    /**
     * Get quartier
     *
     * @return \Mamaison\AnnonceBundle\Entity\Quartier
     */
    public function getQuartier()
    {
        return $this->quartier;
    }

    /**
     * Set user
     *
     * @param \AppBundle\Entity\User $user
     *
     * @return Annonce
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
     * Constructor
     */
    public function __construct()
    {
        $this->caracteristiques = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add caracteristique
     *
     * @param \Mamaison\AnnonceBundle\Entity\Caracteristique $caracteristique
     *
     * @return Annonce
     */
    public function addCaracteristique(\Mamaison\AnnonceBundle\Entity\Caracteristique $caracteristique)
    {
        $this->caracteristiques[] = $caracteristique;

        return $this;
    }

    /**
     * Remove caracteristique
     *
     * @param \Mamaison\AnnonceBundle\Entity\Caracteristique $caracteristique
     */
    public function removeCaracteristique(\Mamaison\AnnonceBundle\Entity\Caracteristique $caracteristique)
    {
        $this->caracteristiques->removeElement($caracteristique);
    }

    /**
     * Get caracteristiques
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCaracteristiques()
    {
        return $this->caracteristiques;
    }

    /**
     * Add gallery
     *
     * @param \Mamaison\AnnonceBundle\Entity\Gallery $gallery
     *
     * @return Annonce
     */
    public function addGallery(\Mamaison\AnnonceBundle\Entity\Gallery $gallery)
    {
        $this->galleries[] = $gallery;

        return $this;
    }

    /**
     * Remove gallery
     *
     * @param \Mamaison\AnnonceBundle\Entity\Gallery $gallery
     */
    public function removeGallery(\Mamaison\AnnonceBundle\Entity\Gallery $gallery)
    {
        $this->galleries->removeElement($gallery);
    }

    /**
     * Get galleries
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getGalleries()
    {
        return $this->galleries;
    }
}