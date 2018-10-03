<?php

namespace Mamaison\AnnonceBundle\Form;

use Mamaison\AnnonceBundle\Entity\Caracteristique;
use Mamaison\AnnonceBundle\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
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
            ->add('prixTotal')
            ->add('nombrePiece')
            ->add('surface')
            ->add('uniteSurface',ChoiceType::class, array(
                    'choices'  => array(
                        'm2' => 'm2',
                        'Ha' => 'Ha',
                    ),
                    'multiple' => false,
                )
            )
            ->add('adresse')
            ->add('category',EntityType::class, array(
                'class' => Category::class,
                'multiple' => false,
                'expanded' => true,
                'required' => true))
            ->add('typeAnnonce')
            ->add('neighborhood',TextType::class,[
                'mapped' => false
            ])
            ->add('region',TextType::class,[
                'mapped' => false
            ])
            ->add('ville',TextType::class,[
                'mapped' => false
            ])
            ->add('caracteristiques',EntityType::class, array(
                    'class' => Caracteristique::class,
                    'multiple' => true,
                    'expanded' => true,
                    'required' => true)
            )
        ;
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
