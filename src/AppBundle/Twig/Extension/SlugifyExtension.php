<?php
/**
 * Created by PhpStorm.
 * User: Koera
 * Date: 8/1/18
 * Time: 9:20 AM
 */

namespace AppBundle\Twig\Extension;


use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class SlugifyExtension extends AbstractExtension
{
    public function getFilters()
    {
        return array(
            new TwigFilter('slugify', array($this, 'slugifyFilter')),
        );
    }

    public function slugifyFilter($string)
    {
        // replace non letter or digits by -
        $text = preg_replace('~[^\pL\d]+~u', '-', $string);

        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);

        // trim
        $text = trim($text, '-');

        // remove duplicate -
        $text = preg_replace('~-+~', '-', $text);

        // lowercase
        $text = strtolower($text);

        if (empty($text)) {
            return 'n-a';
        }

        return $text;
    }

}