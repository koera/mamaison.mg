<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/6/18
 * Time: 9:49 AM
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\HttpFoundation\File\File;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * Class ProfileSocietyUser
 * @package AppBundle\Entity
 *
 * @ORM\Table(name="profile_society")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProfileSimpleUser")
 */
class ProfileSocietyUser implements \Serializable
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
     * @ORM\Column(name="nom_responsable", type="string", length=255)
     */
    private $nomResponsable;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=10)
     */
    private $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="adresse", type="string", length=255, nullable=true)
     */
    private $adresse;

    /**
     * @var string
     *
     * @ORM\Column(name="bio", type="text")
     */
    private $bio;

    /**
     * @var string
     *
     * @ORM\Column(name="siteweb", type="string")
     */
    private $siteweb;
    /**
     * @var string
     *
     * @ORM\Column(name="linkedin", type="string")
     */
    private $linkedin;
    /**
     * @var string
     *
     * @ORM\Column(name="facebook", type="string")
     */
    private $facebook;

    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string")
     */
    private $type;


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
     * Get id
     *
     * @return integer
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
     * @return ProfileSocietyUser
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
     * Set nomResponsable
     *
     * @param string $nomResponsable
     *
     * @return ProfileSocietyUser
     */
    public function setNomResponsable($nomResponsable)
    {
        $this->nomResponsable = $nomResponsable;

        return $this;
    }

    /**
     * Get nomResponsable
     *
     * @return string
     */
    public function getNomResponsable()
    {
        return $this->nomResponsable;
    }

    /**
     * Set telephone
     *
     * @param string $telephone
     *
     * @return ProfileSocietyUser
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone
     *
     * @return string
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set adresse
     *
     * @param string $adresse
     *
     * @return ProfileSocietyUser
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
     * Set bio
     *
     * @param string $bio
     *
     * @return ProfileSocietyUser
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
     * Set type
     *
     * @param string $type
     *
     * @return ProfileSocietyUser
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
     * Set avatar
     *
     * @param string $avatar
     *
     * @return ProfileSocietyUser
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;

        return $this;
    }

    /**
     * Get avatar
     *
     * @return string
     */
    public function getAvatar()
    {
        return $this->avatar;
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
     * Set siteweb
     *
     * @param string $siteweb
     *
     * @return ProfileSocietyUser
     */
    public function setSiteweb($siteweb)
    {
        $this->siteweb = $siteweb;

        return $this;
    }

    /**
     * Get siteweb
     *
     * @return string
     */
    public function getSiteweb()
    {
        return $this->siteweb;
    }

    /**
     * Set linkedin
     *
     * @param string $linkedin
     *
     * @return ProfileSocietyUser
     */
    public function setLinkedin($linkedin)
    {
        $this->linkedin = $linkedin;

        return $this;
    }

    /**
     * Get linkedin
     *
     * @return string
     */
    public function getLinkedin()
    {
        return $this->linkedin;
    }

    /**
     * Set facebook
     *
     * @param string $facebook
     *
     * @return ProfileSocietyUser
     */
    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;

        return $this;
    }

    /**
     * Get facebook
     *
     * @return string
     */
    public function getFacebook()
    {
        return $this->facebook;
    }
}
