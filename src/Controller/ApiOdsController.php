<?php

namespace App\Controller;

use App\Entity\Ods;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiOdsController extends AbstractController
{
    #[Route('/api/ods', name: 'api_ods', methods: ['GET'])]
    public function getOds(EntityManagerInterface $em): JsonResponse
    {
        $odsList = $em->getRepository(Ods::class)->findAll();

        $data = [];

        foreach ($odsList as $ods) {

            // Si quieres incluir los usuarios asociados:
            $users = [];
            foreach ($ods->getUsers() as $user) {
                $users[] = [
                    "id" => $user->getId(),
                    "email" => $user->getEmail(),  // ajusta según tus campos
                ];
            }

            $data[] = [
                "id" => $ods->getId(),
                "nom" => $ods->getNom(),
                "descripcion" => $ods->getDescripcion(),
                "imagen_url" => $ods->getImagenUrl(),
                "fecha" => $ods->getFecha()?->format('Y-m-d'), // para React
                "etiqueta1" => $ods->getEtiqueta1(),
                "etiqueta2" => $ods->getEtiqueta2(),
                "etiqueta3" => $ods->getEtiqueta3(),
                
            ];
        }

        return $this->json($data);
    }
}

