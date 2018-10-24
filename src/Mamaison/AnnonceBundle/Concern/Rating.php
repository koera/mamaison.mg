<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 8/1/18
 * Time: 8:40 AM
 */

namespace Mamaison\AnnonceBundle\Concern;


trait Rating
{

    /**
     * @var Annonce
     * @ORM\OneToMany(targetEntity="Mamaison\AnnonceBundle\Entity\Rating", mappedBy="user")
     */
    private $ratings;


    /**
     * Get ratings
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getRatings()
    {
        return $this->ratings;
    }


    /**
     * Add rating
     *
     * @param \Mamaison\AnnonceBundle\Entity\Rating $rating
     *
     * @return Rating
     */
    public function addRating(\Mamaison\AnnonceBundle\Entity\Rating $rating)
    {
        $this->ratings[] = $rating;

        return $this;
    }

    /**
     * Remove rating
     *
     * @param \Mamaison\AnnonceBundle\Entity\Rating $rating
     */
    public function removeRating(\Mamaison\AnnonceBundle\Entity\Rating $rating)
    {
        $this->ratings->removeElement($rating);
    }


}