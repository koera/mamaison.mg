<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProfileSocietyUserType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('nom')
            ->add('telephone')
            ->add('adresse')
            ->add('bio')
            ->add('type',ChoiceType::class, array(
                'choices'  => array(
                    'Agence immobilier' => 'Agence immobilier',
                    'Agence BTP' => 'Agence BTP',
                ),
                'multiple' => false,
                'expanded' => true,
                'required' => true)
            )
            ->add('siteweb')
            ->add('avatarFile',FileType::class,['required'=>false]);
    }/**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\ProfileSocietyUser'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_profilesocietyuser';
    }


}
