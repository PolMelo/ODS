<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsersRepository::class)]
class Users
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTime $fecha = null;

    #[ORM\Column(length: 255)]
    private ?string $rol = null;

    #[ORM\Column(type: 'integer', nullable: true, options: ['default' => 1])]
    private ?int $avatar = 1;

    /**
     * @var Collection<int, Ods>
     */
    #[ORM\ManyToMany(targetEntity: Ods::class, mappedBy: 'users')]
    private Collection $ods;

    public function __construct()
    {
        $this->ods = new ArrayCollection();
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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

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

    public function getRol(): ?string
    {
        return $this->rol;
    }

    public function setRol(string $rol): static
    {
        $this->rol = $rol;

        return $this;
    }

    /**
     * @return Collection<int, Ods>
     */
    public function getOds(): Collection
    {
        return $this->ods;
    }

    public function addOd(Ods $od): static
    {
        if (!$this->ods->contains($od)) {
            $this->ods->add($od);
            $od->addUser($this);
        }

        return $this;
    }

    public function removeOd(Ods $od): static
    {
        if ($this->ods->removeElement($od)) {
            $od->removeUser($this);
        }

        return $this;
    }

    public function getAvatar(): ?int
    {
        return $this->avatar;
    }

    public function setAvatar(?int $avatar): static
    {
        // añadimos validación para asegurar que el avatar esté entre 1 y 6
        $this->avatar = ($avatar !== null && $avatar >= 1 && $avatar <= 6) ? $avatar : 1;
        return $this;
    }

    public function getAvatarUrl(): string
    {
        // Asume que las imágenes están en la carpeta 'public/avatars/' y se llaman avatar1.png, etc.
        $avatarNumber = $this->avatar ?? 1; // Usar 1 como defecto si es null
        return "../frontend/src/assets/AVATAR png{$avatarNumber}.png";
    }
}

