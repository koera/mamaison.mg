<?php
/**
 * Created by Koera.
 * User: trustylabs
 * Date: 9/4/18
 * Time: 3:55 PM
 */

namespace Mamaison\AnnonceBundle\Filter;

use Doctrine\ORM\Mapping\ClassMetaData;
use Doctrine\ORM\Query\Filter\SQLFilter;

class DeletedFilter extends SQLFilter
{
    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias)
    {
        if ($targetEntity->hasField("deletedAt")) {
            $date = date("Y-m-d H:i:s");
            return $targetTableAlias.".deletedAt IS NULL";
        }
        return "";
    }

}