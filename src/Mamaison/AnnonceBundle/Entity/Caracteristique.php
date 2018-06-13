<?php

namespace Mamaison\AnnonceBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Mamaison\AnnonceBundle\Concern\Annoncable;
use Mamaison\AnnonceBundle\Entity\Annonce;

/**
 * Caracteristique
 *
 * @ORM\Table(name="caracteristique")
 * @ORM\Entity(repositoryClass="Mamaison\AnnonceBundle\Repository\CaracteristiqueRepository")
 */
class Caracteristique
{
    /**
     * @var Annonce
     *
     * Caracteristique have annonce
     */
    use Annoncable;

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
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;


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
     * Set nom
     *
     * @param string $nom
     *
     * @return Caracteristique
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->annonces = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
