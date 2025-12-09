<?php

namespace App\Controller;

use App\Entity\Ods;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
class ApiCrearOds extends AbstractController
{
    #[Route('/api/apiCrearOds', name: 'apiCrearOds',methods: ['POST'])]
public function create(Request $request, EntityManagerInterface $em): JsonResponse
{
    $data = json_decode($request->getContent(), true);

    $ods = new Ods();
    $ods->setNom($data['nom']);
    $ods->setDescripcion($data['descripcion']);
    $ods->setFecha(new \DateTime($data['fecha']));
    $ods->setEtiqueta1($data['etiqueta1']);
    $ods->setEtiqueta2($data['etiqueta2']);
    $ods->setEtiqueta3($data['etiqueta3']);
    $ods->setLugar($data['lugar']);
    $ods->setHora(new \DateTime($data['hora']));
$ods->setImagenUrl($data['imagen_url']);


    $em->persist($ods);
    $em->flush();

    return new JsonResponse(['status' => 'ODS creado']);
}
    }


