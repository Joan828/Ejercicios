// 1. Variables


//x Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”.
//x Comenta el código que muestra el cuadro de diálogo.
//x Crear variable tipo let de nombre “variableSinValor” y declárala sin asignarle ningún valor.
//x Crear 2 variables tipo let de nombres “booleano1” y “booleano2” con valores booleanos.
//x Crear variable tipo const de nombre “P”I declarada con valor 3.14.
//x Crear variable tipo const de nombre “TAU” declarada con valor 2 veces PI.
//x Crear variable tipo const de nombre “miNombre” declarada con valor tu nombre.
//x Crear variable tipo const de nombre “miNumeroFav” declarada con valor numérico.
//x Crea una variable de tipo booleano.
//x Muestra por consola la longitud de la variable “miNombre”.
//x Muestra por consola el tipo de dato de la variable “miNumeroFav”.
//x Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7”, concatenado variables declaradas más arriba.
//x Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
//x Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack’.
//x Convierte la variable “miNumeroFav” en una string y, luego, muestra por consola el tipo de dato que es dicha variable.
//x Crea una variable y asígnale un valor. Después, utilizando template literal, haz uso de la variable que habías creado, 
//x guarda el template literal en otra variable y sácala por consola.
//x Muestra por consola la variable “PI” hasta los 2 primeros decimales.

// alert("JavaScript funcionando correctamente")

let variableSinValor
let booleano1 = false
let booleano2 = false
const PI = 3.14159
const TAU = PI*2
const miNombre = "Joan"
let miNumeroFav = 8
const booleano3 = false
const frase = "Seré un crack en JavaScript al terminar el bootcamp"
const frase2 = "Hola soy un crack"
let valor1 = 1
let frase3 = `${frase2}, concretamente soy el número ${valor1} del ranking de mi clase`

console.log(miNombre.length)
console.log(typeof miNumeroFav)
console.log(`Mi nombre es ${miNombre} y mi número favorito es ${miNumeroFav}`)
console.log(frase.toUpperCase())
console.log(frase2.substring(0, 4))
miNumeroFav = ""
console.log(typeof miNumeroFav)
console.log(frase3)
console.log(PI.toFixed(2))



// 2. Arrays


//x Crear variable de nombre “arrayVacio” cuyo valor sea un array vacío.
//x Crear variable de nombre “arrayNumeros” declarada con un array de números del 0 al 9 (0, 1, 2...).
//x Crear variable de nombre “arrayNumeros2” declarada con un array de números del 0 al 15 (0, 1, 2...).
//x Crear variable de nombre “arrayNumerosPares” declarada con un array con los números pares del 0 al 9 (considerando al 0 par).
//x Crear variable de nombre “arrayNumerosNeg” declarada con un array de números del 0 al -9 (0, -1, -2...).
//x Crear variable de nombre “holaMundo” declarada con valor array con las palabras 'Hola' y 'Mundo'.
//x Crear variable de nombre “loGuardoTodo” declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'.
//x Crear variable de nombre “arrayDeArrays” declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']].
//x Muestra por consola la longitud del array “loGuardoTodo”.
//x Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola.
//x Muestra por consola la propiedad ‘que’ de la variable “loGuardoTodo”.
// Añade la propiedad ‘Euralio’ en la array “loGuardoTodo” y muéstrala por consola.

const arrayVacio = []
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const arrayNumerosPares = [0, 2, 4, 6, 8]
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
const holaMundo = ["Hola", "Mundo"]
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const nuevoElemento = "estás?"

console.log(loGuardoTodo.length)
loGuardoTodo.push(nuevoElemento)
console.log(loGuardoTodo)
console.log(loGuardoTodo[1])
loGuardoTodo.push("Euralio")
console.log(loGuardoTodo)


// 3. Objetos


//x Crea un objeto de nombre “Coche” que tenga las propiedades: marca, modelo y matrícula, con sus respectivos valores.
//x Crea un objeto de nombre “Casa” que tenga las propiedades: codPostal, calle, portal y piso, con sus respectivos valores.
//x Crea un objeto de nombre “FullStackDeveloper” que tenga las propiedades: array lenguajes (ej. ‘javascript’, ’php’), array proyectos (ej. ‘mi página personal’, etc.).
//x Crea un objeto de nombre “Perro” que tenga las propiedades: nombre, raza, color y edad, con sus respectivos valores.
//x Crea un objeto de nombre “Noticia” que tenga las propiedades: titular y cuerpo, con sus respectivos valores.
//x Crea un objeto de nombre “Persona” que tenga las propiedades: nombre, apellidos y edad, con sus respectivos valores.
//x Muestra por consola el nombre de la variable “Persona”.
//x Muestra por consola el lenguaje javascript de la variable “FullStackDeveloper”.
//x Crea un objeto de nombre “Portatil” que tenga la propiedad marca. Accede a esta propiedad con .marca y muéstrala por consola.
//x Obtén el valor de la propiedad marca del objeto anteriormente creado (“Portatil”) con [“marca"], y muéstrala por consola.
//x Crea un objeto de nombre “Concierto” con una propiedad llamada grupos que es un array. Obtén el valor de la propiedad y muéstrala por consola.
//x Crea un objeto de nombre “Led”, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul. Obtén el valor de las propiedades guardándolo en la variable “array RGB[Rojo, Verde, Azul]” y muestra este array por consola.
//x La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’].
//x Crea un objeto de nombre “O_Error” con la propiedad código. Obtén el valor de la propiedad y muéstrala por consola.
//x Crea un objeto de nombre “Grupo” con la propiedad integrantes (array). Obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes.
//x Crea un objeto de nombre “Impresora” con la propiedad objeto tinta{rojo, verde, azul}. Obtén el valor de la propiedad guardándolo en la variable “nivelesTinta” y muéstrala por consola.
//x Crea un objeto de nombre "Movil” con la propiedad especificaciones. Obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muéstrala por consola.
//x Dado el objeto de nombre “Portatil” con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”. Consolea el resultado.
//x Dado el objeto de nombre “Concierto”, añade el valor Guns N' Roses a la propiedad grupos. Consolea el resultado.


const Coche = {
    marca: "Honda",
    modelo: "Prelude",
    matricula: "1010NSX"
}

const Casa = {
    codPostal: "46460",
    calle: "san francisco",
    portal: "3",
    piso: "22"

}
const FullStackDeveloper = {
    lenguajes: ["javascript", "java", "php"],
    proyectos: ["mi página personal", "La súper carta"],
}

const Perro = {
    nombre: "Crono",
    raza: "Braco",
    color: "Gris",
    edad: 10
}

const Noticia = {
    titular: "Muere Pelé",
    cuerpo: "Hace tiempo ya"
}

const Persona = {
    nombre: "Joan",
    apellidos: "Martínez",
    edad: 23
}

const Portatil = {
    marca: "Asus",
}

const Concierto = {
    grupos: ["Estopa"],
}

const Led = {
    lampara1: "rojo",
    lampara2: "verde",
    lampara3: "azul"
}

const arrayRGB = [Led.lampara1, Led.lampara2, Led.lampara3]

const O_error = {
    codigo: "2345"
}

const Grupo = {
    integrantes: ["Joan", "Sergio", "María"]
}

const Impresora = {
    tinta: ["rojo", "verde", "azul"]
}

const Movil = {
    especificaciones: "Snapdragon860"
}


console.log(Persona)
console.log(FullStackDeveloper.lenguajes[0])
console.log(Portatil.marca)
console.log(Portatil["marca"])
console.log(Concierto.grupos[0])
console.log(arrayRGB)
console.log(O_error.codigo)
console.log(Grupo.integrantes[0])
const nivelesTinta = Impresora.tinta
console.log(nivelesTinta)
const especificaciones = Movil["especificaciones"]
console.log(especificaciones)
Portatil.marca = "MSI"
console.log(Portatil.marca)
Concierto.grupos.push("Guns N' Roses")
console.log(Concierto.grupos)
