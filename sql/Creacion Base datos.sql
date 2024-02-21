# CREACION BASE DATOS

DROP DATABASE IF EXISTS fnc;
CREATE DATABASE fnc COLLATE utf8_spanish2_ci;

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
descripcion text
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
descripcion text
);

CREATE TABLE actores (
idActor int auto_increment PRIMARY KEY NOT NULL,
nombre varchar (255),
genero ENUM (
		'Masculino',
		'Femenino',
		'Otro'
		),
premios text,
fechaNacimiento DATE NOT NULL,
nacionalidad varchar (50),
descripcion text
);

CREATE TABLE premios (
codPremio INT auto_increment PRIMARY KEY NOT NULL,
nombre varchar (255) NOT NULL,
fechaPremio DATE NOT NULL,

);

