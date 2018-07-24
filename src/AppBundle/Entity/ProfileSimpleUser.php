<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;

use Symfony\Component\Validator\Constraints as Assert;
/**
 * ProfileSimpleUser
 *
 * @ORM\Table(name="profile_simple")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProfileSimpleUser")
 */
class ProfileSimpleUser extends Profile implements \Serializable
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
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="prenom", type="string", length=255, nullable=true)
     */
    private $prenom;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=10, nullable=true)
     */
    private $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="bio", type="text", nullable=true)
     */
    private $bio;

    /**
     * @var string
     *
     * @ORM\Column(name="facebook_id", type="string", length=255, unique=true, nullable=true)
     */
    private $facebookId;

    /**
     * @var string
     *
     * @ORM\Column(name="linkedin_id", type="string", length=255, unique=true, nullable=true)
     */
    private $linkedinId;

    /**
     * @var File
     * @Assert\Image()
     */
    private $avatarFile;

    /**
     * @var string
     * @ORM\Column(name="avatar", type="string", length=255, unique=true, nullable=true)
     */
    private $avatar;

    /**
     * @var string
     * @ORM\Column(name="avatarUrlFb", type="string", length=255, unique=true, nullable=true)
     */
    private $avatarUrlFb;

    /**
     * @ORM\Column(name="isSigninWithFb", type="boolean", nullable=true)
     */
    private $isSigninWithFb;

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
     * @return ProfileSimpleUser
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
     * Set prenom
     *
     * @param string $prenom
     *
     * @return ProfileSimpleUser
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Get prenom
     *
     * @return string
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set telephne
     *
     * @param string $telephne
     *
     * @return ProfileSimpleUser
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephne
     *
     * @return string
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set bio
     *
     * @param string $bio
     *
     * @return ProfileSimpleUser
     */
    public function setBio($bio)
    {
        $this->bio = $bio;

        return $this;
    }

    /**
     * Get bio
     *
     * @return string
     */
    public function getBio()
    {
        return $this->bio;
    }

    /**
     * Set facebookId
     *
     * @param string $facebookId
     *
     * @return ProfileSimpleUser
     */
    public function setFacebookId($facebookId)
    {
        $this->facebookId = $facebookId;

        return $this;
    }

    /**
     * Get facebookId
     *
     * @return string
     */
    public function getFacebookId()
    {
        return $this->facebookId;
    }

    /**
     * Set linkedinId
     *
     * @param string $linkedinId
     *
     * @return ProfileSimpleUser
     */
    public function setLinkedinId($linkedinId)
    {
        $this->linkedinId = $linkedinId;

        return $this;
    }

    /**
     * Get linkedinId
     *
     * @return string
     */
    public function getLinkedinId()
    {
        return $this->linkedinId;
    }

    /**
     * @return File
     */
    public function getAvatarFile()
    {
        return $this->avatarFile;
    }

    /**
     * @param File $avatarFile
     */
    public function setAvatarFile($avatarFile)
    {
        $this->avatarFile = $avatarFile;
    }

    /**
     * @return string
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * @param string $avatar
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;
    }


    /**
     * String representation of object
     * @link http://php.net/manual/en/serializable.serialize.php
     * @return string the string representation of the object or null
     * @since 5.1.0
     */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->avatar,
        ));
    }

    /**
     * Constructs the object
     * @link http://php.net/manual/en/serializable.unserialize.php
     * @param string $serialized <p>
     * The string representation of the object.
     * </p>
     * @return void
     * @since 5.1.0
     */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->avatarFile
            ) = unserialize($serialized);
    }

    /**
     * Set avatarUrlFb
     *
     * @param string $avatarUrlFb
     *
     * @return ProfileSimpleUser
     */
    public function setAvatarUrlFb($avatarUrlFb)
    {
        $this->avatarUrlFb = $avatarUrlFb;

        return $this;
    }

    /**
     * Get avatarUrlFb
     *
     * @return string
     */
    public function getAvatarUrlFb()
    {
        return $this->avatarUrlFb;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->user = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set isSigninWithFb
     *
     * @param boolean $isSigninWithFb
     *
     * @return ProfileSimpleUser
     */
    public function setIsSigninWithFb($isSigninWithFb)
    {
        $this->isSigninWithFb = $isSigninWithFb;

        return $this;
    }

    /**
     * Get isSigninWithFb
     *
     * @return boolean
     */
    public function getIsSigninWithFb()
    {
        return $this->isSigninWithFb;
    }
}
