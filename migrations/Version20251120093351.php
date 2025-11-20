<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251120093351 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ods (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, descripcion VARCHAR(255) NOT NULL, imagen_url LONGTEXT DEFAULT NULL, fecha DATE NOT NULL, etiqueta1 INT NOT NULL, etiqueta2 INT DEFAULT NULL, etiqueta3 INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ods_users (ods_id INT NOT NULL, users_id INT NOT NULL, INDEX IDX_C38BD6FAC458DEF1 (ods_id), INDEX IDX_C38BD6FA67B3B43D (users_id), PRIMARY KEY(ods_id, users_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, fecha DATE NOT NULL, rol VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ods_users ADD CONSTRAINT FK_C38BD6FAC458DEF1 FOREIGN KEY (ods_id) REFERENCES ods (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ods_users ADD CONSTRAINT FK_C38BD6FA67B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ods_users DROP FOREIGN KEY FK_C38BD6FAC458DEF1');
        $this->addSql('ALTER TABLE ods_users DROP FOREIGN KEY FK_C38BD6FA67B3B43D');
        $this->addSql('DROP TABLE ods');
        $this->addSql('DROP TABLE ods_users');
        $this->addSql('DROP TABLE users');
    }
}
