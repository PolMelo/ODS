<?php

namespace App\Entity;

use App\Repository\OdsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Users;

#[ORM\Entity(repositoryClass: OdsRepository::class)]
class Ods
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $descripcion = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $imagen_url = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTime $fecha = null;

    #[ORM\Column]
    private ?int $etiqueta1 = null;

    #[ORM\Column(nullable: true)]
    private ?int $etiqueta2 = null;

    #[ORM\Column(nullable: true)]
    private ?int $etiqueta3 = null;

    /**
     * @var Collection<int, Users>
     */
    #[ORM\ManyToMany(targetEntity: Users::class, inversedBy: 'ods')]
    private Collection $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(string $descripcion): static
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getImagenUrl(): ?string
    {
        return $this->imagen_url;
    }

    public function setImagenUrl(?string $imagen_url): static
    {
        $this->imagen_url = $imagen_url;

        return $this;
    }

    public function getFecha(): ?\DateTime
    {
        return $this->fecha;
    }

    public function setFecha(\DateTime $fecha): static
    {
        $this->fecha = $fecha;

        return $this;
    }

    public function getEtiqueta1(): ?int
    {
        return $this->etiqueta1;
    }

    public function setEtiqueta1(int $etiqueta1): static
    {
        $this->etiqueta1 = $etiqueta1;

        return $this;
    }

    public function getEtiqueta2(): ?int
    {
        return $this->etiqueta2;
    }

    public function setEtiqueta2(?int $etiqueta2): static
    {
        $this->etiqueta2 = $etiqueta2;

        return $this;
    }

    public function getEtiqueta3(): ?int
    {
        return $this->etiqueta3;
    }

    public function setEtiqueta3(?int $etiqueta3): static
    {
        $this->etiqueta3 = $etiqueta3;

        return $this;
    }

    /**
     * @return Collection<int, Users>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(Users $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
        }

        return $this;
    }

    public function removeUser(Users $user): static
    {
        $this->users->removeElement($user);

        return $this;
    }
}
