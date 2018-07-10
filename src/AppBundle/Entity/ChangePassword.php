<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/6/18
 * Time: 3:05 PM
 */

namespace AppBundle\Entity;


use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;
use Symfony\Component\Validator\Constraints as Assert;


class ChangePassword
{

    /**
     * @SecurityAssert\UserPassword(
     *     message = "Mot de passe incorrect"
     * )
     */
    protected $oldPassword;

    /**
     * @Assert\Length(
     *     min = 6,
     *     minMessage = "Le password doit avoir 6 caracteres"
     * )
     */
    protected $password;


    public function getOldPassword() {
        return $this->oldPassword;
    }

    public function setOldPassword($oldPassword) {
        $this->oldPassword = $oldPassword;
        return $this;
    }


    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password) {
        $this->password = $password;
        return $this;
    }

}