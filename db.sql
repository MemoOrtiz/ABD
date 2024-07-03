CREATE TABLE Estado_Civil (
  id_edo_civil INTEGER NOT NULL ,
  nombre VARCHAR(20) NOT NULL,
  constraint pk_estadocivil PRIMARY KEY(id_edo_civil)
);

CREATE TABLE Carreras (
  id_carrera INTEGER NOT NULL,
  nombre_carrera VARCHAR(50) NOT NULL,
  constraint pk_carreras PRIMARY KEY(id_carrera)
);

CREATE TABLE Generos (
  id_genero INTEGER NOT NULL ,
  nombre  VARCHAR(20) NOT NULL,
  constraint pk_generos PRIMARY KEY(id_genero)
);

CREATE TABLE Departamentos (
  id_Departamento INTEGER NOT NULL ,
  nombre_departamento VARCHAR(45) NOT NULL,
  constraint pk_departamentos PRIMARY KEY(id_Departamento)
);

CREATE TABLE Estados_Queja (
  id_estado_queja INTEGER NOT NULL,
  nombre_estado VARCHAR(30) NOT NULL,
  constraint pk_edoquejas PRIMARY KEY(id_estado_queja)
);

CREATE TABLE Conceptos_Queja (
  id_concepto INTEGER NOT NULL ,
  concepto VARCHAR(100) NOT NULL,
  constraint pk_conceptosqueja PRIMARY KEY(id_concepto)
);

CREATE TABLE Moderador (
  id_moderador INTEGER NOT NULL ,
  nombre_mod VARCHAR(50) NOT NULL,
  paterno_mod VARCHAR(30) NOT NULL,
  materno_mod VARCHAR(30) NULL,
  constraint pk_mod PRIMARY KEY(id_moderador)
);

CREATE TABLE Log_in (
  id_login INTEGER NOT NULL ,
  nombre_usuario VARCHAR(32) NOT NULL,
  contrasena VARCHAR(32) NOT NULL,
  constraint pk_login PRIMARY KEY(id_login)
);



CREATE TABLE Alumnos (
  matricula INTEGER NOT NULL ,
  id_edo_civil INTEGER NOT NULL,
  id_genero INTEGER NOT NULL,
  nombre_alumno VARCHAR(30) NOT NULL,
  paterno_alumno VARCHAR(30) NOT NULL,
  materno_alumno VARCHAR(30) NOT NULL,
  constraint pk_alumnos PRIMARY KEY(matricula),
  constraint fk_edocivilalumnos foreign key (id_edo_civil) references Estado_Civil (id_edo_civil),
  constraint fk_generoalumnos foreign key (id_genero) references Generos (id_genero)
);

CREATE TABLE Materias (
  materia_id VARCHAR(8) NOT NULL,
  id_carrera INTEGER NOT NULL,
  nombre_mat VARCHAR(60) NOT NULL,
  constraint pk_materias PRIMARY KEY(materia_id),
  constraint fk_carreramaterias foreign key (id_carrera) references Carreras (id_carrera)
);



CREATE TABLE Docentes (
  docente_id INTEGER NOT NULL ,
  id_edo_civil INTEGER NOT NULL,
  id_genero INTEGER NOT NULL,
  nombre_docente VARCHAR(30) NOT NULL,
  paterno_docente VARCHAR(30) NOT NULL,
  materno_docente VARCHAR(30) NULL,
  constraint pk_docentes PRIMARY KEY(docente_id),
  constraint fk_edocivildocentes foreign key (id_edo_civil) references Estado_Civil (id_edo_civil),
  constraint fk_generodocentes foreign key (id_genero) references Generos (id_genero)
);

//aqui tengo duda en esta relacion

CREATE TABLE Materia_has_Docente (
  docente_id INTEGER NOT NULL,
  materia_id VARCHAR(8) NOT NULL,
  constraint fk_materia_materias_has_docentes foreign key (docente_id) references Docentes (docente_id),
  constraint fk_docentes_materias_has_docentes foreign key (materia_id) references Materias (materia_id)
);

CREATE TABLE CORREOS_ALUMNOS (
  id_correos INTEGER NOT NULL ,
  matricula INTEGER NOT NULL,
  correo VARCHAR(50) NOT NULL,
  constraint pk_correos PRIMARY KEY(id_correos),
  constraint fk_matriculacorreos foreign key (matricula) references Alumnos (matricula),
);

CREATE TABLE CORREOS_DOCENTES (
  id_correos INTEGER NOT NULL,
  docente_id INTEGER NOT NULL,
  correo VARCHAR(50) NOT NULL,
  constraint pk_correos PRIMARY KEY(id_correos),
  constraint fk_docentecorreos foreign key (docente_id) references Docentes (docente_id)
);


CREATE TABLE TELEFONOS_ALUMNOS (
  id_telefono INTEGER NOT NULL ,
  matricula INTEGER NULL,
  telefono VARCHAR(10) NOT NULL,
  constraint pk_telefonos PRIMARY KEY(id_telefono),
  constraint fk_matriculatelefonos foreign key (matricula) references Alumnos (matricula)
);

CREATE TABLE TELEFONOS_DOCENTES (
  id_telefono INTEGER NOT NULL AUTO_INCREMENT,
  docente_id INTEGER NULL,
  telefono VARCHAR(10) NOT NULL,
  constraint pk_telefonos PRIMARY KEY(id_telefono),
  constraint fk_docentetelefonos foreign key (docente_id) references Docentes(docente_id),
);

CREATE TABLE Quejas (
  queja_id INTEGER NOT NULL,
  id_estado_queja INTEGER NOT NULL,
  id_moderador INTEGER NOT NULL,
  id_Departamento INTEGER NOT NULL,
  id_concepto INTEGER NOT NULL,
  matricula INTEGER NOT NULL,
  detalles_queja VARCHAR(10000) NULL,
  fecha_ini_queja DATE NULL,
  fecha_fin_queja DATE NULL,
  constraint pk_quejas PRIMARY KEY(queja_id),
  constraint fk_estadoquejaquejas foreign key(id_estado_queja) references Estados_Queja(id_estado_queja),
  constraint fk_moderadorquejas foreign key(id_moderador) references Moderador(id_moderador),
  constraint fk_departamentoquejas foreign key(id_Departamento) references Departamentos(id_Departamento),
  constraint fk_conceptoquejas foreign key(id_concepto) references Conceptos_Queja(id_concepto),
  constraint fk_matriculaquejas foreign key(matricula) references Alumnos(matricula)
);



CREATE TABLE Detalles_Queja (
  id_detalles_queja INTEGER NOT NULL,
  queja_id INTEGER NOT NULL,
  descripcion VARCHAR(2500) NULL,
  constraint pk_iddetallesqueja PRIMARY key (id_detalles_queja),
  constraint fk_quejadetallesqueja foreign key (queja_id) references Quejas (queja_id)
);


