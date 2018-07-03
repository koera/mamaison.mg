<?php

namespace Mamaison\AnnonceBundle\Form;

use Mamaison\AnnonceBundle\Entity\Caracteristique;
use Mamaison\AnnonceBundle\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnnonceType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('titre')
            ->add('description')
            ->add('prix')
            ->add('nombrePiece')
            ->add('surface')
            ->add('uniteSurface')
            ->add('adresse')
            ->add('category',EntityType::class, array(
                'class' => Category::class,
                'multiple' => false,
                'expanded' => true,
                'required' => true))
            ->add('typeAnnonce')
            ->add('quartier')
            ->add('caracteristiques',EntityType::class, array(
                    'class' => Caracteristique::class,
                    'multiple' => true,
                    'expanded' => true,
                    'required' => true)
            );
    }
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Mamaison\AnnonceBundle\Entity\Annonce'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'mamaison_annoncebundle_annonce';
    }


}