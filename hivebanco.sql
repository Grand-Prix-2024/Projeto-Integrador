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


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-11 17:23:19
