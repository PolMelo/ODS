# 🌍 Proyecto ODS

Aplicación desarrollada en Symfony para la visualización y gestión de información relacionada con los **Objetivos de Desarrollo Sostenible (ODS)**.  
Este proyecto se ejecuta **sin Docker** y está preparado para ser instalado localmente mediante Composer, Symfony CLI y Node.js.

---

# 📦 Requisitos del Sistema

Para poder ejecutar este proyecto, el usuario debe tener instaladas las siguientes dependencias:

## ✅ 1. PHP (8.1 o superior)
Con las extensiones:
- ext-ctype  
- ext-iconv  
- ext-xml  
- ext-json  
- ext-pdo  
- ext-pdo_mysql  
- ext-intl (muy recomendado)

## ✅ 2. Composer  
Necesario para instalar las dependencias de PHP:  
https://getcomposer.org/

## ✅ 3. Symfony CLI (recomendado)
Usado para ejecutar el servidor local con:

```bash
symfony serve
```

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/xexu29/Proyecto-ODS.git
cd Proyecto-ODS
```


### 2. Instalar dependencias de PHP

```bash
composer install
```
### 3. Inicializar servidor de symfony

```bash
symfony serve
```

### 4. Instalar dependencias de Node.js
npm install

### 5. Compilar los assets

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm run build
```

### 6. Crear y configurar la base de datos

Edita el archivo .env y ajusta este valor:

```bash
DATABASE_URL="mysql://usuario:password@127.0.0.1:3306/ods"
```

Luego crea la base de datos:
```bash
php bin/console doctrine:database:create
```

Ejecuta las migraciones:

```bash
php bin/console doctrine:migrations:migrate
```

### 7. Accede al proyecto en: 
[(http://localhost:8000)](http://localhost:8000)


