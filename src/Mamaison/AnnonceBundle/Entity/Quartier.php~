<?php

namespace Mamaison\AnnonceBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Quartier
 *
 * @ORM\Table(name="quartier")
 * @ORM\Entity(repositoryClass="Mamaison\AnnonceBundle\Repository\QuartierRepository")
 */
class Quartier
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
     * @ORM\Column(name="nom", type="string")
     */
    private $nom;

    /**
     * @var Ville
     *
     * @ORM\ManyToOne(targetEntity="Mamaison\AnnonceBundle\Entity\Ville")
     */
    private $ville;


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
     * Set ville
     *
     * @param \Mamaison\AnnonceBundle\Entity\Ville $ville
     *
     * @return Quartier
     */
    public function setVille(\Mamaison\AnnonceBundle\Entity\Ville $ville = null)
    {
        $this->ville = $ville;

        return $this;
    }

    /**
     * Get ville
     *
     * @return \Mamaison\AnnonceBundle\Entity\Ville
     */
    public function getVille()
    {
        return $this->ville;
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return Quartier
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

    public function __toString()
    {
        return $this->getNom();
    }
}
