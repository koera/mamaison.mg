<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/1/18
 * Time: 4:23 PM
 */

namespace AppBundle\Twig\Extension;


use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class ArrayExtension extends AbstractExtension
{
    public function getFilters()
    {
        return array(
            new TwigFilter('best', array($this, 'bestFilter')),
        );
    }

    /**
     * @param array $array
     * @return array
     */
    public function bestFilter($array)
    {
        if(count($array) > 3){
            return array_slice($array,0,3);
        }else return $array;
    }

}