<<<<<<< HEAD
# Git
 git add \<Nombre de archivo>.\<extension>

 git commit -m \<comentario>

 git status

 git show

 git log \<archivo>

 git push

 git pull

 ls

 cd ..

 pwd

touch \<NombreArchivo>

mkdir \<NombreArchivo>

clear

history

!14

rm  \<NombreArchivo>

cat \<NombreArchivo>

git diff codigo de un commit

git init \<directorio >

rm --hel

rm vacio.txt

cat \<nombrearchivo>

"security.wordspace.trust.untrustedfiles"

"git.autofech": true,

reset (codigo) para volver en el tiempo a ese codigo

reset hard (el mas duro)

git fetch

git merge

background

# framework

grilla (la ubicacion de las cosas como una tabla)

Aa (Estilos para las fuentes)

Componentes visuales pre_armados

# que trae un framework

ahorrar tiempo 

componentes visuales 

el codigo anda

# posts

usuarios 

comentarios 

categorias 

etiquetas 

escribe

tiene 

1:N

N:N

# Tipos de dato

Texto(CHAR(n) VARCHAR(n) TEXT)

Numeros(INTEGER, BIGINT, SMALLINT, DECIMAL(n,s), NUMERIC(n,s))

Fecha/hora(DATE TIME DETETIME TIMESTAMP)

Logicos(BOOLEAN, puede ser 1 o 0)

# Constraints (Restriccion)

Contraint(NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT, INDEX)

Descripcion

# Create 

Database

Table

View

Create table "name"

"DB"."table.name"

IND NOT NULL (Tipos de datos)

"ALT + 96"

    imaged dpng

# [Curso de Fundamentos de Bases de Datos](https://platzi.com/cursos/bd/)

## Bienvenida conceptos básicos y contexto histórico de las Bases de Datos

## Bienvenida conceptos básicos y contexto histórico de las Bases de Datos

## Playground: tu primera consulta en bases de datos


# Introducción a las bases de datos relacionales

## Historia de las bases de datos relacionales

## Qué son entidades y atributos

## Entidades de Platzi Blog

## Relaciones

## Múltiples muchos

## Diagrama ER

## Diagrama Físico: tipos de datos y constraints

## Diagrama Físico: normalización

## Formas normales en Bases de Datos relacionales

## Diagrama Físico: normalizando Platziblog


# RDBMS (MySQL) o cómo hacer lo anterior de manera práctica

## Instalación local de un RDBMS (Windows)

## ¿Qué es RDB y RDBMS?

## Instalación local de un RDBMS (Mac)

## Instalación local de un RDBMS (Ubuntu)

## Clientes gráficos

## Servicios administrados


# SQL hasta en la sopa

## Historia de SQL

## DDL create

## Playground: CREATE TABLE

DEFAULT CHARACTER SET utf8 ;

SELECT * FROM test_1.people;

## CREATE VIEW y DDL ALTER

todo puede ir de lado a lado sin ningun problema 

## DDL drop

DROP TABLE `test_1`.`people`;

DROP DATABASE `test_1`;

## Playground: VIEW, ALTER y DROP en SQL

## DML

data manipulation language

Insert, update, delete, select

INSERT INTO people (last_name, first_name, address, city)

VALUES ("hernandez", "laura", "calle 21", "monterrey");

UPDATE people

SET last_name = "Chavez", city= "merida"

WHERE person_id = 1;

UPDATE people

SET first_name = "juan"

WHERE city = "merida";

SET SQL_SAFE_UPDATES = 0;

para UTF8MB4

DELETE FROM people
WHERE person_id = 1;

DELETE FROM people;

SELECT fist_name, last_name
FROM people;

## Playground: CRUD con SQL


## ¿Qué tan standard es SQL?

## Creando Platziblog: tablas independientes

## Creando Platziblog: tablas dependientes

## Creando Platziblog: tablas transitivas


# Consultas a una base de datos

## ¿Por qué las consultas son tan importantes?

## Estructura básica de un Query

## SELECT

## Playground: SELECT en SQL

## FROM y SQL JOINs

## Utilizando la sentencia FROM

## Playground: FROM y LEFT JOIN en SQL

## WHERE

## Utilizando la sentencia WHERE nulo y no nulo

## Playground: Filtrando Datos con WHERE

## GROUP BY

## ORDER BY y HAVING

## Playground: Agrupamiento y Ordenamiento de Datos

## El interminable agujero de conejo (Nested queries)

## ¿Cómo convertir una pregunta en un query SQL?

## Preguntándole a la base de datos

## Consultando PlatziBlog

## Playground: Prueba Final con PlatziBlog


# Introducción a la bases de datos NO relacionales

## ¿Qué son y cuáles son los tipos de bases de datos no relacionales?

## Servicios administrados y jerarquía de datos


# Manejo de modelos de datos en bases de datos no relacionales

## Top level collection con Firebase

## Creando y borrando documentos en Firestore

## Colecciones vs subcolecciones

## Recreando Platziblog

## Construyendo Platziblog en Firestore

## Proyecto final: transformando tu proyecto en una db no relacional


# Bases de datos en la vida real

## Bases de datos en la vida real

## Big Data

## Data warehouse

## Data mining

## ETL

## Business intelligence

## Machine Learning

## Data Science

## ¿Por qué aprender bases de datos hoy?


# Bonus

## Bases de datos relacionales vs no relacionales

## Elegir una base de datos

=======
# Git
 git add \<Nombre de archivo>.\<extension>

 git commit -m \<comentario>

 git status

 git show

 git log \<archivo>

 git push

 git pull

 ls

 cd ..

 pwd

touch \<NombreArchivo>

mkdir \<NombreArchivo>

clear

history

!14

rm  \<NombreArchivo>

cat \<NombreArchivo>

git diff codigo de un commit

git init \<directorio >

rm --hel

rm vacio.txt

cat \<nombrearchivo>

"security.wordspace.trust.untrustedfiles"

"git.autofech": true,

reset (codigo) para volver en el tiempo a ese codigo

reset hard (el mas duro)

git fetch

git merge

background

# framework

grilla (la ubicacion de las cosas como una tabla)

Aa (Estilos para las fuentes)

Componentes visuales pre_armados

# que trae un framework

ahorrar tiempo 

componentes visuales 

el codigo anda

# posts

usuarios 

comentarios 

categorias 

etiquetas 

escribe

tiene 

1:N

N:N

# Tipos de dato

Texto(CHAR(n) VARCHAR(n) TEXT)

Numeros(INTEGER BIGINT SMALLINT DECIMAL(n,s) NUMERIC(n,s))

Fecha/hora(DATE TIME DETETIME TIMESTAMP)

Logicos(BOOLEAN, puede ser 1 o 0)

# Constraints (Restriccion)

Contraint(NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT, INDEX)

Descripcion


# Curso Práctico de JavaScript

## Prueba de JavaScript

¿Que es una variable y para que sirve?

variables = es para guarada muchas cosas o cajitas (espacios de memoria)

¿Cual es la diferencia entre declarar e inicializar una variable?

Una variable se declara para indicarle al programa a partir de qué lugar empieza a existir, qué nombre tendrá y qué tipo de datos almacenará

¿Cual es la diferencia entre sumar numero y concatenar strings?

números es una operación matemática y concatenar es unir strings uno tras otro.

¿Cual operador me permite sumar o concatenar?

El signo &amp; operador de cálculo permite unir elementos de texto sin tener que utilizar una función

Nombre: string
Apellido: string 
Nombre de usuario en platzi: strig (@fulanito)
Edad: number
Correo electronico: string (lala@gmail.com)
Mayor de edad: boolean 
Dinero ahorrado: number
deudas: number


## Variables

'''

lef nombre = 'Cesar'
lef apellido = 'Patiño polanco';
lef usarname = 'cesar'
lef edad = 16;
lef mail = 'cesitar@gmail.com';
lef esMayorDeEdad = true;
lef dineroAhorrado = 1000;
lef deuda = 100;
'''
lef dineroReal = DineroAhorrado - deudas;


## Funciones

funcion nombreCompleto ('parametro','parametro')
funcion nombreCompleto (nombre, apellido) {
    return name + ' ' + lastName 
}

nombreCompleto('argumento','argumento')
nombreCompleto('Iris','Alcachofa')

Las funciones nos permite (guardar) bloque de codigos para reutilizarlos y ejecutarlos en el futuro.
"El argumento es el que remplaza los parametros de la funcion"

Nos sirve cuando tenemos variable o bloques con codigos de mu pareciodos (con cambios que podria ser parametros y argumentos) 
que podemos encapsular para reutilizar mas de una vez en le futuro.

Tambien nos sirve para ordenar y mejorar 

nombreCompleto('natalia','villamil') = son argumentos 

console.log("MI nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");  

## Condicionales

## Ciclos

## Arrays y objetos

## Bonus: reducción de condicionales

## ¡Es tu turno: crea un tutorial!

# Manipulación del DOM

## Cómo conectar JavaScript con HTML

## Leyendo HTML desde JavaScript

## Escribiendo HTML desde JavaScript

## Eventos en JavaScript: interactuando con usuarios

## addEventListener

# Contribución a proyectos

## Conectando GitHub a proyectos de JavaScript

## Proyectos con JavaScript y GitHub desde cero

## Fork a proyectos en GitHub

## Analizando código de proyectos open-source

## Fusión del menú en desktop

## Fusión del menú en mobile

## Carrito de compras

## Lista de productos: HTML a partir de arrays

## Detalles de un producto

## Interacción entre todos los componentes

## Pull Requests: aportando código a proyectos en GitHub

## Feedback: conoce proyectos

# Despliegue

## Deploy con GitHub Pages

# Próximos pasos

## ¿Cuál es tu sueño con JavaScript?

## Comparte tu proyecto y certifícate




const name = "Cesar Eduardo";
const lastname = " Patiño Polanco";
const completeName = name + lastname;
const nickname = "cesarp";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digan " + nickname + ".");