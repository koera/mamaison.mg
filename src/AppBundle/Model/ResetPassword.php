<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/13/18
 * Time: 3:34 PM
 */

namespace AppBundle\Model;
use Symfony\Component\Validator\Constraints as Assert;

class ResetPassword
{

    /**
    * @Assert\Length(
    *     min = 6,
    *     minMessage = "Le password doit avoir 6 caracteres"
    * )
    */
    private $password;

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password) {
        $this->password = $password;
        return $this;
    }
}