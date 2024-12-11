-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hivebanco
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `foto_republica`
--

DROP TABLE IF EXISTS `foto_republica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foto_republica` (
  `id_foto` int(11) NOT NULL AUTO_INCREMENT,
  `caminho_foto` varchar(200) NOT NULL,
  `id_republica` int(11) NOT NULL,
  PRIMARY KEY (`id_foto`),
  KEY `fk_foto_republica_republicas1_idx` (`id_republica`),
  CONSTRAINT `fk_foto_republica_republicas1` FOREIGN KEY (`id_republica`) REFERENCES `republicas` (`id_republica`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto_republica`
--

LOCK TABLES `foto_republica` WRITE;
/*!40000 ALTER TABLE `foto_republica` DISABLE KEYS */;
INSERT INTO `foto_republica` VALUES (1,'',3),(2,'',3),(3,'',3),(4,'',4),(5,'',4),(6,'',4),(7,'',4),(8,'',5),(9,'',5),(10,'',5),(11,'',5),(12,'',6),(13,'',6),(14,'',6),(15,'',6),(16,'',7),(17,'',7),(18,'',7),(19,'',7),(20,'',8),(21,'',8),(22,'',8),(23,'',8),(24,'',9),(25,'',9),(26,'',9),(27,'',9),(28,'/img/1733862132096_./public/img/Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',10),(29,'/img/1733862420822_./public/img/Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',11),(30,'/img/1733862510454_./public/img/SWELL_SILVA_duplex_v04_01-1.jpg',12),(31,'/img/1733936190500_Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',13),(32,'/img/./public/img/1733936377056_Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',14),(33,'/img/1733936471717_maxresdefault.jpg',15),(34,'/img/1733940185309_Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',16),(35,'/img/1733940306408_maxresdefault.jpg',17),(36,'/img/1733940566823_asas.jpg',18),(37,'/img/1733943451103_asas.jpg',19),(38,'/img/1733943639873_maxresdefault.jpg',20);
/*!40000 ALTER TABLE `foto_republica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musicas`
--

DROP TABLE IF EXISTS `musicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musicas` (
  `id_musica` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `track_id` varchar(255) NOT NULL,
  `nome_musica` varchar(255) NOT NULL,
  `artista` varchar(255) NOT NULL,
  `album` varchar(255) DEFAULT NULL,
  `imagem_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_musica`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `musicas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `perfil` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musicas`
--

LOCK TABLES `musicas` WRITE;
/*!40000 ALTER TABLE `musicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `musicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil` (
  `id_perfil` int(11) NOT NULL AUTO_INCREMENT,
  `pronome` varchar(45) DEFAULT '"Editar"',
  `descricao` varchar(200) DEFAULT '"Editar"',
  `idioma` varchar(45) DEFAULT '"Editar"',
  `estado_civil` varchar(45) DEFAULT '"Editar"',
  `local_moradia` varchar(45) DEFAULT '"Editar"',
  `telefone` varchar(100) DEFAULT '"Editar"',
  `redes` varchar(45) DEFAULT '"Editar"',
  `bio` varchar(600) DEFAULT '"Editar"',
  `curso` varchar(45) DEFAULT NULL,
  `faculdade` varchar(45) DEFAULT NULL,
  `musicaFavorita` varchar(100) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL,
  `caminho_foto_perfil` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_perfil`),
  KEY `fk_perfil_usuarios1_idx` (`id_usuario`),
  CONSTRAINT `fk_perfil_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
INSERT INTO `perfil` VALUES (1,'ELE/DELE','Ciências da computação','Russo','Solteiro','ES','27998320610','emanoelvitor_','OPIUM','Ciências da computação','Faesa',NULL,18,NULL),(2,NULL,'Moda',NULL,NULL,NULL,'27998320610','gabesperandio','psv',NULL,NULL,NULL,19,NULL),(3,'ELA/DELA','Educação Física','Inglês','Solteira',NULL,'27998320610','anna.silva','Linda','Educação Física','UFES',NULL,23,NULL),(4,'ELA/DELA','Direito','Italiano','Solteira','ES','27998320610','rebecca_','Da simplicidade do interior para os horizontes ilimitados da capital!\n\nMe chamo Becca e trilho meu caminho na UFES com o objetivo firme de me tornar uma advogada criminalista. ⚖️','Direito','UFES',NULL,24,NULL),(5,'ELA/DELA','Estudante','frances','solteira',NULL,'27998320610','rebecca_','estudante de direito','Direito','UFES',NULL,25,NULL),(6,'ELA/DELA','Capixaba','Inglês','Solteira','ES','27998320610','a.xavier','verdade','DDS','SENAI',NULL,26,NULL);
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `republicas`
--

DROP TABLE IF EXISTS `republicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `republicas` (
  `id_republica` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `preco` varchar(45) NOT NULL,
  `tipo_republica` varchar(45) NOT NULL,
  `tipo_distribuicao` varchar(45) NOT NULL,
  `qtd_moradores` int(11) NOT NULL,
  `qtd_quartos` int(11) NOT NULL,
  `qtd_banheiros` int(11) NOT NULL,
  `qtd_camas` int(11) NOT NULL,
  `descricao` varchar(400) NOT NULL,
  `valor` varchar(45) NOT NULL,
  `wifi` tinyint(4) DEFAULT NULL,
  `televisao` tinyint(4) DEFAULT NULL,
  `cozinha` tinyint(4) DEFAULT NULL,
  `ar_condicionado` tinyint(4) DEFAULT NULL,
  `canto_de_estudo` tinyint(4) DEFAULT NULL,
  `chuveiro_quente` tinyint(4) DEFAULT NULL,
  `banheira` tinyint(4) DEFAULT NULL,
  `extintor` tinyint(4) DEFAULT NULL,
  `camera` tinyint(4) DEFAULT NULL,
  `alarme` tinyint(4) DEFAULT NULL,
  `piscina` tinyint(4) DEFAULT NULL,
  `churrasqueira` tinyint(4) DEFAULT NULL,
  `academia` tinyint(4) DEFAULT NULL,
  `varanda` tinyint(4) DEFAULT NULL,
  `jardim` tinyint(4) DEFAULT NULL,
  `pais` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  `endereco` varchar(200) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `apto` varchar(45) DEFAULT NULL,
  `caminhoFoto` varchar(300) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_foto` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_republica`),
  KEY `fk_republicas_usuarios1_idx` (`id_usuario`),
  KEY `fk_foto_republica` (`id_foto`),
  CONSTRAINT `fk_foto_republica` FOREIGN KEY (`id_foto`) REFERENCES `foto_republica` (`id_foto`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_republicas_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `republicas`
--

LOCK TABLES `republicas` WRITE;
/*!40000 ALTER TABLE `republicas` DISABLE KEYS */;
INSERT INTO `republicas` VALUES (2,'Casa','497','','',0,0,0,0,'','',1,1,NULL,NULL,NULL,1,NULL,1,1,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe',NULL,NULL,18,NULL),(3,'Casa','500','','',0,0,0,0,'','',1,1,NULL,NULL,NULL,1,NULL,1,1,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe',NULL,NULL,18,NULL),(4,'República teste','500','','',0,0,0,0,'','',1,1,NULL,NULL,NULL,1,NULL,1,1,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe','701',NULL,18,NULL),(5,'teste','70','Casa','',0,0,0,0,'','',1,1,0,0,1,0,0,1,1,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe','701',NULL,18,NULL),(6,'casasa','67','Casa','',0,0,0,0,'','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe','701',NULL,18,NULL),(7,'casa','70','Apartamento','',0,0,0,0,'','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe','701',NULL,18,NULL),(8,'República dos manos','70','Apartamento','',0,0,0,0,'','',1,1,0,1,0,0,0,1,1,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe','701',NULL,18,NULL),(9,'Rep dos manos','70','Apartamento','',0,0,0,0,'','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','awewew','ewewe','wewew','ewewe','701',NULL,18,NULL),(10,'cscscscs','703','Casa','private',0,0,0,0,'cxcsc','',1,1,0,0,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701',NULL,18,NULL),(11,'Sim','70239','Casa','private',0,0,0,0,'Sim','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701',NULL,18,NULL),(12,'dsdsd','704','Casa','private',0,0,0,0,'wewewe','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','SWELL_SILVA_duplex_v04_01-1.jpg',18,NULL),(13,'teste mais uma vez','498','Apartamento','private',0,0,0,0,'testando','',1,1,0,0,0,0,0,1,0,NULL,NULL,1,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','1733936190500_Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',18,NULL),(14,'wdwewewew','705','Casa','private',0,0,0,0,'simsim','',1,1,0,0,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','./public/img/1733936377056_Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',18,NULL),(15,'testando dnv','705','Casa','private',0,0,0,0,'3434343','',1,1,0,0,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','1733936471717_maxresdefault.jpg',18,NULL),(16,'sdsds','7055','Apartamento','private',0,0,0,0,'wewew','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','1733940185309_Sacada-gourmet-do-Villa-Celimontana-Residencial-Fontana-Construtora-1170x780.jpg',18,NULL),(17,'testando','7055','Apartamento','private',0,0,0,0,'teste','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','1733940306408_maxresdefault.jpg',18,NULL),(18,'simsimsim','703434','Casa','private',0,0,0,0,'343434','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','1733940566823_asas.jpg',18,NULL),(19,'teste quartos','70','Apartamento','private',0,0,0,0,'quartos','',1,1,0,1,0,0,0,1,0,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','1733943451103_asas.jpg',26,NULL),(20,'sdsd','7034','Apartamento','private',0,0,0,0,'so,','',1,0,0,0,0,0,0,1,1,NULL,NULL,0,NULL,NULL,NULL,'Brasil','29090090','Rua Desembargador Eurípdes Queiroz do Valle','Jardim Camburi','Vitória','ES','701','1733943639873_maxresdefault.jpg',26,NULL);
/*!40000 ALTER TABLE `republicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `senha` varchar(200) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `sobrenome` varchar(120) NOT NULL,
  `data_nasc` date NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `status` varchar(20) DEFAULT 'ativo',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (18,'emanoelvitor020@gmail.com','tylerthecreator','Emanoel Vitor','Ventura Atanazio','2005-01-28','07023462503','ativo'),(19,'gabriel@gmail.com','123*abc','Gabriel','de Assis Sperandio','2004-09-13','07023462503','ativo'),(23,'anna@gmail.com','123*abc','Anna Julya','Silva','2005-01-28','07023462503','ativo'),(24,'rebecca@gmail.com','Rebecca123','Rebecca','Amorim Mendes','2005-01-28','07023462503','ativo'),(25,'rebeca@gmail.com','Hojeemdia19','Rebeca','Amorin','2003-06-23','07023462503','ativo'),(26,'amandaxavier@gmail.com','Nineiota2801','Amanda','Xavier','2003-03-30','07023462503',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-11 17:23:19
