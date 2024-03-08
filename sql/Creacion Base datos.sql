# CREACION BASE DATOS

DROP DATABASE IF EXISTS fnc;
CREATE DATABASE fnc;

# USO BASE DE DATOS 

use fnc;

# CREACION TABLAS 

CREATE TABLE peliculas(
idPelicula int auto_increment PRIMARY KEY NOT NULL,
nombre varchar (255) NOT NULL,
genero varchar (30) NOT NULL,
sinapsis text,
fechaEstreno DATE NOT NULL,
duracion int,
presupuesto decimal (20,2),
recaudacion decimal (20,2),
srcImagen varchar (255)
);

CREATE TABLE directores(
idDirector int auto_increment PRIMARY KEY NOT NULL,
nombre varchar (255) NOT NULL,
genero ENUM(
		'Masculino',
		'Femenino',
		'Otro'
		), 
premios text,
fechaNacimiento DATE NOT NULL,
nacionalidad varchar (50),
descripcion text NOT NULL,
idPelicula int,
srcImagen varchar (255),
FOREIGN KEY directores(idPelicula) REFERENCES peliculas(idPelicula) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE productores(
idProductor int auto_increment PRIMARY KEY NOT NULL,
nombre varchar (255),
genero ENUM (
		'Masculino',
		'Femenino',
		'Otro'
		),
premios text,
fechaNacimiento DATE NOT NULL,
nacionalidad varchar (50),
descripcion text,
srcImagen varchar (255)
);

CREATE TABLE actores (
idActor int auto_increment PRIMARY KEY NOT NULL,
nombre varchar (255),
genero ENUM (
		'Masculino',
		'Femenino',
		'Otro'
		) NOT NULL,
premios text NOT NULL,
fechaNacimiento DATE NOT NULL,
nacionalidad varchar (50),
descripcion text,
srcImagen varchar (255)
);

CREATE TABLE certamenes (
codCertamen INT auto_increment PRIMARY KEY NOT NULL,
nombre varchar (255) NOT NULL,
tipo varchar (255) NOT NULL,
fechaCertamen DATE NOT NULL,
srcImagen varchar (255)
);
CREATE TABLE usuarios(
idUsuario int auto_increment PRIMARY KEY NOT NULL,
usuario varchar (255) NOT NULL,
nick varchar (255) NOT NULL,
contraseña varchar (255) NOT NULL,
email varchar (255) NOT NULL,
telefono int        
); 
CREATE TABLE criticas(
numeroCritica int auto_increment PRIMARY KEY NOT NULL,
idPelicula int,
idUsuario int,
tipo ENUM(
			'Valoración',
            'Opinión',
            'Ambos'
			)NOT NULL,
CONSTRAINT cricticas_id_usu
	FOREIGN KEY criticas(idUsuario)
	REFERENCES usuarios(idusuario) ON UPDATE CASCADE ON DELETE SET NULL,
CONSTRAINT criticas_id_peli
	FOREIGN KEY criticas(idPelicula)
	REFERENCES peliculas(idPelicula) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE premiosActor(
idPremioActor int auto_increment PRIMARY KEY NOT NULL,
codCertamen int ,
idActor int,
fechaPremio DATE NOT NULL,

CONSTRAINT premiosActor_cod_cert
	FOREIGN KEY premiosActor(codCertamen)
	REFERENCES certamenes(codCertamen) ON UPDATE CASCADE ON DELETE SET NULL,
CONSTRAINT premiosActor_id_act
	FOREIGN KEY premiosActor(idActor)
	REFERENCES actores(idActor) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE premiosDirector(
idPremioDirector int auto_increment PRIMARY KEY NOT NULL,
codCertamen int ,
idDirector int ,
fechaPremio DATE,
CONSTRAINT premiosDirector_cod_cert
	FOREIGN KEY premiosDirector(codCertamen) 
	REFERENCES certamenes(codCertamen) ON UPDATE CASCADE ON DELETE SET NULL,
CONSTRAINT premiosDirector_id_dir
	FOREIGN KEY premiosDirector(idDirector)
	 REFERENCES directores(idDirector) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE premiosPelicula(   
idPremioPelicula int auto_increment PRIMARY KEY NOT NULL,
codCertamen int ,
idPelicula int,
fechaPremio DATE,
CONSTRAINT premiosPelicula_cod_cert
	FOREIGN KEY premiosPelicula (codCertamen)
	REFERENCES certamenes(codCertamen) ON UPDATE CASCADE ON DELETE SET NULL,
CONSTRAINT premiosPelicula_id_peli
	FOREIGN KEY premiosPelicula (idPelicula) 
	REFERENCES peliculas(idPelicula) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE actuacion(
idActuacion int auto_increment PRIMARY KEY NOT NULL,
idActor int,
idPelicula int,
papel varchar (50) NOT  NULL,
CONSTRAINT actuacion_id_act1
	FOREIGN KEY actuacion(idActor)
	REFERENCES actores(idActor) ON UPDATE CASCADE ON DELETE SET NULL,
CONSTRAINT actuacion_id_peli2
	FOREIGN KEY actuacion(idPelicula)
	REFERENCES peliculas(idPelicula) ON UPDATE CASCADE ON DELETE SET NULL
);
CREATE TABLE produccion(
idProduccion int auto_increment PRIMARY KEY NOT NULL,
idProductor int,
idPelicula int,
fechaInicio DATE,
fechaFinalizacion DATE NOT NULL,
CONSTRAINT produccion_id_prod
	FOREIGN KEY produccion(idProductor)
	REFERENCES productores(idProductor) ON UPDATE CASCADE ON DELETE SET NULL,
CONSTRAINT produccion_id_peli
	FOREIGN KEY produccion (idPelicula) 
	REFERENCES peliculas(idPelicula) ON UPDATE CASCADE ON DELETE SET NULL
);
CREATE TABLE guardadoPeliculas(
idGuardadoPelicula int auto_increment PRIMARY KEY NOT NULL,
idUsuario int,
idPelicula int,
fechaGuardado DATE,
CONSTRAINT guardadoPeliculas_id_usu
	FOREIGN KEY  guardadoPeliculas(idUsuario) 
	REFERENCES usuarios(idUsuario) ON UPDATE CASCADE ON DELETE SET NULL,
CONSTRAINT guardadoPeliculas_id_peli
	FOREIGN KEY guardadoPeliculas(idPelicula) 
	REFERENCES peliculas(idPelicula) ON UPDATE CASCADE  ON DELETE SET NULL
);

ALTER TABLE criticas ADD COLUMN valoracion int(5);
ALTER TABLE criticas ADD COLUMN comentario longtext;
ALTER TABLE criticas DROP tipo;
ALTER TABLE criticas ADD COLUMN tipo ENUM ('valoracion','comentario');