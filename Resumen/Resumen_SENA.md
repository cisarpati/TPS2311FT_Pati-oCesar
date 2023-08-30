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

queris anidados o subquieris (Dentro de un queri se puede hacer otro queri) 

SELECT new_table_protection.date, COUNT(*) AS posts_count
FROM (
SELECT DATE(MIN(fecha_publicacion)) AS date, YEAR(fecha_publicacion) AS post_year
FROM posts
GROUP BY  post_year
)AS new_table_projection
GROUP BY new_table_projection.date
ORDER BY new_table_projection.date;

SELECT *
FROM posts
WHERE fecha_publicacion = (
SELECT MAX (fecha_publicacion)
FROM posts
);

## ¿Cómo convertir una pregunta en un query SQL?

De pregunta de Query

Lo que quieres mostrar = SELECT

De donde voy a tomar los datos = FROM

Los filtros de los datos que quieres mostrar = WHERE

Los rubros por los que me interesa agrupar la informacion = GROUP BY

El orden en que quiero presentar mi informacion ORDER BY 

Los filtros que quiero que mis datos aqrupados tengan HAVING

SELECT posts.titulo, COUNT(*) num_etiquetas 
FROM posts 
 INNER JOIN posts_etiquetas ON posts.id = posts_etiquetas.post_id
 INNER JOIN etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id
GROUP BY posts.id
ORDER BY num_etiquetas DESC; 

SELECT posts.titulo, GROUP_CONCAT(nombre_etiqueta)
FROM posts 
 INNER JOIN posts_etiquetas ON posts.id = posts_etiquetas.post_id
 INNER JOIN etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id
GROUP BY posts.id;

SELECT *
FROM etiquetas 
 LEFT JOIN posts_etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id
 WHERE posts_etiquetas.etiqueta_id IS NULL;

## Preguntándole a la base de datos

SELECT post.titulo, COUNT(*) num_etiquetas
FROM posts
  INNER JOIN posts_etiquetas ON posts.id = post_etiquetas.post_id
  INNER JOIN etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id
GROUP BY posts_id;
ORDER BY num_etiquetas DESC;

¿Para que sirve el INNER JOIN?

LEFT  
RIGHT 
INNER 
OUTER 
FULL 
CROSS

SELECT posts.titulo
FROM posts;

posts.id
pos_etiquetas.post_id
SELECT * FROM platziblog.posts_etiquetas;

SELECT posts.titulo, COUNT(*) num_etiquetas
FROM posts
  INNER JOIN posts_etiquetas ON posts.id = posts_etiquetas.post_id
  INNER JOIN etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id
GROUP BY posts_id
ORDER BY num_etiquetas DESC;

SELECT posts.titulo, COUNT(*) num_etiquetas
FROM posts
  INNER JOIN posts_etiquetas ON posts.id = posts_etiquetas.post_id
GROUP BY post_id;

SELECT posts.titulo
FROM posts
  INNER JOIN posts_etiquetas ON posts.id = posts_etiquetas.post_id
  INNER JOIN etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id;
  
 SELECT *
FROM posts
  INNER JOIN posts_etiquetas ON posts.id = posts_etiquetas.post_id
  INNER JOIN etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id;
  
  SELECT posts.titulo
FROM posts
  INNER JOIN posts_etiquetas ON posts.id = posts_etiquetas.post_id;

SELECT *
FROM posts, posts_etiquetas;

¿Cuatas etiquetas tiene un post?

SELECT *
FROM etiqueta
  LEFT JOIN posts_etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id
WHERE posts_etiquetas.etiqueta_id IS NULL;

¿Que etiquetas no tienen post?



## Consultando PlatziBlog

SELECT c.nombre_categoria, COUNT(*) AS cant_posts
FROM categorias AS c
  INNER JOIN posts AS p ON c.id = p.categoria_id
GROUP BY c.id
ORDER BY cant_posts DESC
LIMIT 1;  

¿Cual es la categoria que tiene mas posts?

¿Cual es el usuario que a creado mas posts?

SELECT u.nickname, COUNT(*) cant_posts 
FROM usuarios AS u
  INNER JOIN posts AS p on u.id = p.usuario_id
GROUP BY u.id
ORDER BY cant_posts DESC; 

¿De que categorias esta escribiendo?

SELECT u.nickname, COUNT(*) cant_posts, group_concat(nombre_categoria) 
FROM usuarios AS u
  INNER JOIN posts AS p on u.id = p.usuario_id
  INNER JOIN categorias AS c on c.id = p.categoria_id
GROUP BY u.id
ORDER BY cant_posts DESC; 

SELECT *
FROM usuarios AS u	
  LEFT JOIN posts on u.id = posts.usuario_id
WHERE posts.usuario_id iS NULL;

¿De que categoria es esta?

SELECT u.nickname, COUNT(*) cant_posts, group_concat(nombre_categoria) 
FROM usuarios AS u
  INNER JOIN posts AS p on u.id = p.usuario_id
  INNER JOIN categorias AS c on c.id = p.categoria_id
GROUP BY u.id
ORDER BY cant_posts DESC; 



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

### group by

combina registros con valores idénticos en la lista de campos especificados en un único registro

## select

para agregar una colomna siempre va hacer en el select 

si hay 4 comas va a ver 5 columnas

ej:
hola1,hola2,hola3,hola4,hola5

## Curso Práctico de JavaScript

### Prueba de JavaScript

¿Que es una variable y para que sirve?

variables = es para guarada muchas cosas o cajitas (espacios de memoria)

¿Cual es la diferencia entre declarar e inicializar una variable?

Una variable se declara para indicarle al programa a partir de qué lugar empieza a existir, qué nombre tendrá y qué tipo de datos almacenará

¿Cual es la diferencia entre sumar numero y concatenar strings?

números es una operación matemática y concatenar es unir strings uno tras otro.

¿Cual operador me permite sumar o concatenar?

El signo & operador de cálculo permite unir elementos de texto sin tener que utilizar una función

Nombre: string Apellido: string Nombre de usuario en platzi: strig (@fulanito) Edad: number Correo electronico: string (lala@gmail.com) Mayor de edad: boolean Dinero ahorrado: number deudas: number

### Variables
'''

lef nombre = 'Cesar' lef apellido = 'Patiño polanco'; lef usarname = 'cesar' lef edad = 16; lef mail = 'cesitar@gmail.com'; lef esMayorDeEdad = true; lef dineroAhorrado = 1000; lef deuda = 100; ''' lef dineroReal = DineroAhorrado - deudas;

### Funciones
funcion nombreCompleto ('parametro','parametro') funcion nombreCompleto (nombre, apellido) { return name + ' ' + lastName }

nombreCompleto('argumento','argumento') nombreCompleto('Iris','Alcachofa')

Las funciones nos permite (guardar) bloque de codigos para reutilizarlos y ejecutarlos en el futuro. "El argumento es el que remplaza los parametros de la funcion"

Nos sirve cuando tenemos variable o bloques con codigos de mu pareciodos (con cambios que podria ser parametros y argumentos) que podemos encapsular para reutilizar mas de una vez en le futuro.

Tambien nos sirve para ordenar y mejorar

nombreCompleto('natalia','villamil') = son argumentos

console.log("MI nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

### Condicionales

son la forma en la que ejecutamos un bloqueo de codigo de comando a partir de una condicion 

¿Que tipo de condicionales existen?

IF (else y else if), switch
con el caso de if es para validar si una condicion es true o false 

switch
el condicional switch nos deja agregar una variable y por de case comprobar si cumple con su condicion

¿Puedo combinar funciones y condinionales?

Si. Las funciones pueden encapsular cualquier  

### Ciclos

let 
asigna nombres a los resultados de los cálculos

el ciclo es la forma para ejecutar un bloque de codigo hasta que se cumpla cierta condicion 

¿Que tipos de ciclos existen?

while, de while y for.

Es cuando la la validacion de nuestro condicionales nunca se cumple y termina totenado (dañando) la aplicacion

si aun que los ciclos son una especie de condicionales 

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es:" + i);
}

```js
while (respuesta != '4') {
    let pregunta = prompt('¿Cuanto es 2 + 2?')
    respuesta = pregunta; 
}
```

### Arrays y objetos

El array es una lista de elementos

```
const array = (1, "jaja", true, false);
```

Un objetro es una lista de elementos PERO  cada elemento tiene un nombre clave.

```
const obj = {
  nombre: "Fulanito",
  edad: 3,
  comidaFavorita: ["pollo frito", "vegetales"],
};
```

¿cuando es mejor usar objetos o arrays?

arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede imcumplir). Mientras que en un objeto cuando los nombfres de cada elemento son importantes para nuestro algoritmo.


¿puedo mezclar array s con objetos o incluso objetos con arrays?

Si. Los arrays pueden guaradar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

array = [] corchete

objeto = {} llave 

### Bonus: reducción de condicionales

### ¡Es tu turno: crea un tutorial!

## Manipulación del DOM

### Cómo conectar JavaScript con HTML



### Leyendo HTML desde JavaScript

### Escribiendo HTML desde JavaScript

### Eventos en JavaScript: interactuando con usuarios



### addEventListener

## Contribución a proyectos

### Conectando GitHub a proyectos de JavaScript

### Proyectos con JavaScript y GitHub desde cero

### Fork a proyectos en GitHub

### Analizando código de proyectos open-source

### Fusión del menú en desktop

### Fusión del menú en mobile

### Carrito de compras

### Lista de productos: HTML a partir de arrays

### Detalles de un producto

### Interacción entre todos los componentes

### Pull Requests: aportando código a proyectos en GitHub

### Feedback: conoce proyectos

## Despliegue

### Deploy con GitHub Pages

## Próximos pasos

### ¿Cuál es tu sueño con JavaScript?

### Comparte tu proyecto y certifícate

about:blank
pagina en blanco 

const name = "Cesar Eduardo"; const lastname = " Patiño Polanco"; const completeName = name + lastname; const nickname = "cesarp";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digan " + nickname + ".");

function mensaje (completeName, nickname){
    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."}
undefined
mensaje("mao", "ins")
'Mi nombre es mao, pero prefiero que me digas ins.'

const img = document.createElement("img");
img.setAttribute("src", "https://es.wallpaper.mob.org/gallery/tag=dragons/");

function btnOnclick () {
    const sumainputs = input1.value + input2.value;
    result.innerText = "Resultado: " + sumainputs;
} 