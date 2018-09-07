<?php

namespace Mamaison\AnnonceBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Gallery
 *
 * @ORM\Table(name="gallery")
 * @ORM\Entity(repositoryClass="Mamaison\AnnonceBundle\Repository\GalleryRepository")
 */
class Gallery
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="text", nullable=false)
     */
    private $image;

    /**
     * @var UploadedFile
     * @Assert\NotBlank(message="Le fichier n'est pas correct.")
     * @Assert\File(mimeTypes={ "image/*" })
     */
    private $file;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get image
     *
     * @return string
     */
    public function getImage()
    {
        return $this->getUploadDir().'/'.$this->image;
    }

    /**
     * Set image
     *
     * @param UploadedFile $image
     *
     * @return Gallery
     */
    public function setFile(UploadedFile $image)
    {
        $this->file = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return UploadedFile
     */
    public function getFile()
    {
        return $this->file;
    }

    public function __toString()
    {
        return $this->getUploadDir().'/'.$this->image;
    }

    /**
     * @param void
     * 
     * @return void
     */
    public function upload()
    {
        if($this->file == null)
        {
            return;
        }

        $fileName = $this->generateUniqueFileName().'.'.$this->file->guessExtension();
        

        $this->file->move($this->getRootDir(), $fileName);

        $this->image = $fileName;
    }

    /**
     * @param void
     * 
     * @return string
     */
    public function getWebPath()
    {
        return $this->image === null ? null : $this->getUploadDir().'/'.$this->image;
    }

    /**
     * @param void
     * 
     * @return string
     */
    public function getRootPath()
    {
        return null === $this->image ? null : $this->getRootDir().'/'.$this->image;
    }

    /**
     * @param void
     * 
     * @return string
     */
    protected function getRootDir()
    {
        return __DIR__.'/../../../../web/'.$this->getUploadDir();
    }

    /**
     * @param void
     * 
     * @return string
     */
    public function getUploadDir()
    {
        return 'uploads/galleries';
    }

    /**
     * @return string
     */
    private function generateUniqueFileName()
    {
        // md5() reduces the similarity of the file names generated by
        // uniqid(), which is based on timestamps
        return md5(uniqid());
    }
}
