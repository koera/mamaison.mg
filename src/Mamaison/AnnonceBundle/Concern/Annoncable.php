<?php


namespace Mamaison\AnnonceBundle\Concern;


trait Annoncable {


    /**
     * @var Annonce
     *
     * @ORM\ManyToMany(targetEntity="Mamaison\AnnonceBundle\Entity\Annonce", cascade={"persist"})
     */
    private $annonces;

    /**
     * Get annonces
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAnnonces()
    {
        return $this->annonces;
    }


    /**
     * Add annonce
     *
     * @param \Mamaison\AnnonceBundle\Entity\Annonce $annonce
     *
     * @return Caracteristique
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


}