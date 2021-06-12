create database SocialTecla
use SocialTecla

create table region (
	id_region int not null identity(1,1),
	nombre_pais varchar (30),
	nombre_ciudad varchar (30),
	primary key (id_region)
)

create table idioma (
	id_idioma int not null identity (1,1),
	idioma varchar (30) not null,
	primary key (id_idioma)
)

create table titulo (
	id_titulo int not null identity (1,1),
	titulo varchar (50),
	primary key (id_titulo)
)

create table certificado  (
	id_certificado int not null identity (1,1),
	certificado varchar (50),
	primary key (id_certificado)
)

create table hobbies (
	id_hobbie int not null identity (1,1),
	categoria varchar (50) not null,
	nombre_hobbie varchar (50) not null,
	primary key (id_hobbie)
)

create table conocimiento (
	id_conocimiento int not null identity(1,1),
	bd binary (2),
	apis binary (2),
	testing binary (2),
	seguridad binary (2),
	t_objetos binary (2),
	primary key (id_conocimiento)
)

create table tecnologia (
	 id_tecnologia int not null identity (1,1),
	 nodejs binary (2),
	 frontend binary (2),
	 swagger binary (2),
	 javascript binary (2),
	 primary key (id_tecnologia)
)

create table desempeno (
	id_desempeno int not null identity (1,1),
	calidad_codigo binary (2),
	velocidad_entrega binary (2),
	performance binary (2),
	primary key (id_desempeno)
)

create table blandas (
	id_blanda int not null identity (1,1),
	enfocado binary (2),
	trabajo_equipo binary (2),
	compromiso binary (2),
	comunicacion binary (2),
	capacidad_aprendizaje binary (2),
	resolucion_problemas binary (2),
	primary key (id_blanda)
)

create table entornos_profesionales (
	id_entorno_profesional int not null identity (1,1),
	versionado binary (2),
	trello binary (2),
	slack binary (2),
	metodologia binary (2),
	primary key (id_entorno_profesional)
)

create table comentarios (
	id_comentario int not null identity (1,1),
	comentario varchar (300) not null,
	primary key(id_comentario)
)


create table usuario (
	id_usuario int identity(1,1) not null,
	nombres varchar (50) not null,
	apellidos varchar (50) not null,
	edad int not null,
	linkedin varchar (100),
	id_region int not null,
	id_idioma int not null,
	id_titulo int not null,
	id_certificado int not null,
	id_hobbie int not null,
	id_conocimiento int not null,
	id_tecnologia int not null,
	id_desempeno int not null,
	id_blandas int not null,
	id_entorno_profesional int not null,
	id_comentario int not null,
	primary key (id_usuario),
	foreign key (id_idioma) references idioma (id_idioma),
	foreign key (id_region) references region (id_region),
	foreign key (id_titulo) references titulo (id_titulo),
	foreign key (id_certificado) references certificado (id_certificado),
	foreign key (id_hobbie) references hobbies (id_hobbie),
	foreign key (id_conocimiento) references conocimiento (id_conocimiento),
	foreign key (id_tecnologia) references tecnologia (id_tecnologia),
	foreign key (id_desempeno) references desempeno (id_desempeno),
	foreign key (id_blandas) references blandas (id_blanda),
	foreign key (id_entorno_profesional) references entornos_profesionales (id_entorno_profesional),
	foreign key (id_comentario) references comentarios (id_comentario)
)

