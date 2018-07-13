<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 7/13/18
 * Time: 3:27 PM
 */

namespace AppBundle\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;

class ResetPasswordType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('password', RepeatedType::class, array(
                    "required" => "required",
                    'type' => PasswordType::class,
                    'invalid_message' => 'Les deux mots de passe ne correspondent pas',
                    'first_options' => array('label' => 'Nouveau mot de passe', "attr" => array("class" => "form-password form-control")),
                    'second_options' => array('label' => 'Confirmer mot de passe', "attr" => array("class" => "form-password form-control"))
                )
            )
        ;
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Model\ResetPassword',
        ));
    }

    public function getName()
    {
        return 'appbundle_reset_password';
    }

}