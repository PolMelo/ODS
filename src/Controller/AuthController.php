<?php

namespace App\Controller;

use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
{
    private string $jwtSecret = 'JWT_PASSPHRASE=r3f9s8df7a9s8d7f9a8sd7f9a8sd7f9a8'; // cambia por algo seguro

    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request,
        EntityManagerInterface $em
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        if (!$data['email'] || !$data['password'] || !$data['nom']) {
            return $this->json(['error' => 'Faltan datos'], 400);
        }

        // Verificar si ya existe usuario
        $existingUser = $em->getRepository(Users::class)->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json(['error' => 'El usuario ya existe'], 400);
        }

        $user = new Users();
        $user->setEmail($data['email']);
        $user->setNom($data['nom']);
        $user->setRol($data['rol'] ?? 'user');
        $user->setFecha(new \DateTime()); // fecha actual
        $user->setPassword($data['password']); // contraseña en texto plano

        $em->persist($user);
        $em->flush();

        return $this->json(['message' => 'Usuario registrado correctamente']);
    }

    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(
        Request $request,
        EntityManagerInterface $em
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $email = $data['email'] ?? '';
        $password = $data['password'] ?? '';

        $user = $em->getRepository(Users::class)->findOneBy(['email' => $email]);

        if (!$user || $user->getPassword() !== $password) {
            return $this->json(['error' => 'Credenciales inválidas'], 401);
        }

        // Generar token JWT
        $config = Configuration::forSymmetricSigner(
            new Sha256(),
            InMemory::plainText($this->jwtSecret)
        );

        $now = new \DateTimeImmutable();
        $token = $config->builder()
            ->issuedAt($now)
            ->expiresAt($now->modify('+1 hour'))
            ->withClaim('id', $user->getId())
            ->withClaim('email', $user->getEmail())
            ->withClaim('rol', $user->getRol())
            ->getToken($config->signer(), $config->signingKey());

        return $this->json([
            'token' => $token->toString(),
            'user' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'nom' => $user->getNom(),
                'rol' => $user->getRol()
            ]
        ]);
    }
}
