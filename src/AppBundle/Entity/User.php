<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Mamaison\AnnonceBundle\Concern\Annoncable;
use Mamaison\AnnonceBundle\Concern\Rating;
use Mamaison\AnnonceBundle\Entity\Annonce;
use Symfony\Component\Security\Core\User\UserInterface;
use AppBundle\Entity\ProfileSimpleUser;
use AppBundle\Entity\ProfileSocietyUser;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;


/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 * @UniqueEntity(fields={"username","email"}, message="Cette valeur est deja utiliser")
 */
class User implements UserInterface
{

    /**
     * @var ArrayCollection
     *
     * User can like Annonce
     *
     */
    use Annoncable;

    /**
     * @var ArrayCollection
     *
     * User give rating to annonce
     */
    use Rating;

    /**
     * @var integer
     *
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=25, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=64, nullable=true)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=254, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive;

    /**
     * @ORM\Column(type="string", length=254, nullable=false)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=254, unique=true, nullable=true)
     */
    private $societyName;


    /**
     * @ORM\Column(type="string", length=254, unique=true, nullable=true)
     */
    private $activationToken;

    /**
     * @ORM\Column(type="string", length=254, unique=true, nullable=true)
     */
    private $resetPasswordToken;

    /**
     * @ORM\Column(type="integer",nullable=true)
     */
    private $activationTokenDelay;

    /**
     * @ORM\Column(type="string", length=254, unique=true, nullable=true)
     */
    private $facebookId;

    /**
     * @var array
     *
     * @ORM\Column(type="json_array")
     */
    private $roles = [];
    

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->annonces = new \Doctrine\Common\Collections\ArrayCollection();
//        parent::__construct();
    }

    /**
     * @var ProfileSimpleUser
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\ProfileSimpleUser", fetch="EAGER")
     */
    private $profileSimpleUser;


    /**
     * @var ProfileSocietyUser
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\ProfileSocietyUser")
     */
    private $profileSocietyUser;

    /**
     * Returns the roles granted to the user.
     *
     * <code>
     * public function getRoles()
     * {
     *     return array('ROLE_USER');
     * }
     * </code>
     *
     * Alternatively, the roles might be stored on a ``roles`` property,
     * and populated in any number of different ways when the user object
     * is created.
     *
     * @return array (Role|string)[] The user roles
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * @param $roles
     */
    public function setRoles($roles){
        $this->roles = $roles;
    }


    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
        return null;
    }


    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    /**
     * Returns the password used to authenticate the user.
     *
     * This should be the encoded password. On authentication, a plain-text
     * password will be salted, encoded, and then compared to this value.
     *
     * @return string The password
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Returns the username used to authenticate the user.
     *
     * @return string The username
     */
    public function getUsername()
    {
        return $this->username;
    }

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
     * Set username
     *
     * @param string $username
     *
     * @return User
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set isActive
     *
     * @param boolean $isActive
     *
     * @return User
     */
    public function setIsActive($isActive)
    {
        $this->isActive = $isActive;

        return $this;
    }

    /**
     * Get isActive
     *
     * @return boolean
     */
    public function getIsActive()
    {
        return $this->isActive;
    }

    /**
     * Set type
     *
     * @param string $type
     *
     * @return User
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
     * Set societyName
     *
     * @param string $societyName
     *
     * @return User
     */
    public function setSocietyName($societyName)
    {
        $this->societyName = $societyName;

        return $this;
    }

    /**
     * Get societyName
     *
     * @return string
     */
    public function getSocietyName()
    {
        return $this->societyName;
    }

    /**
     * Set activationToken
     *
     * @param string $activationToken
     *
     * @return User
     */
    public function setActivationToken($activationToken)
    {
        $this->activationToken = $activationToken;

        return $this;
    }

    /**
     * Get activationToken
     *
     * @return string
     */
    public function getActivationToken()
    {
        return $this->activationToken;
    }

    /**
     * Set activationTokenDelay
     *
     * @param integer $activationTokenDelay
     *
     * @return User
     */
    public function setActivationTokenDelay($activationTokenDelay)
    {
        $this->activationTokenDelay = $activationTokenDelay;

        return $this;
    }

    /**
     * Get activationTokenDelay
     *
     * @return integer
     */
    public function getActivationTokenDelay()
    {
        return $this->activationTokenDelay;
    }

    /**
     * Set profileSimpleUser
     *
     * @param ProfileSimpleUser $profileSimpleUser
     *
     * @return User
     */
    public function setProfileSimpleUser(ProfileSimpleUser $profileSimpleUser = null)
    {
        $this->profileSimpleUser = $profileSimpleUser;

        return $this;
    }

    /**
     * Get profileSimpleUser
     *
     * @return ProfileSimpleUser
     */
    public function getProfileSimpleUser()
    {
        return $this->profileSimpleUser;
    }

    /**
     * Set profileSocietyUser
     *
     * @param ProfileSocietyUser $profileSocietyUser
     *
     * @return User
     */
    public function setProfileSocietyUser(ProfileSocietyUser $profileSocietyUser = null)
    {
        $this->profileSocietyUser = $profileSocietyUser;

        return $this;
    }

    /**
     * Get profileSocietyUser
     *
     * @return ProfileSocietyUser
     */
    public function getProfileSocietyUser()
    {
        return $this->profileSocietyUser;
    }

    /**
     * Set resetPasswordToken
     *
     * @param string $resetPasswordToken
     *
     * @return User
     */
    public function setResetPasswordToken($resetPasswordToken)
    {
        $this->resetPasswordToken = $resetPasswordToken;

        return $this;
    }

    /**
     * Get resetPasswordToken
     *
     * @return string
     */
    public function getResetPasswordToken()
    {
        return $this->resetPasswordToken;
    }

    /**
     * Set facebookId
     *
     * @param string $facebookId
     *
     * @return User
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
}
