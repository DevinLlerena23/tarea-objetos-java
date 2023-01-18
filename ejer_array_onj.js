const {data,ciudades}=require("./datos")
console.log("Separando los datos en un archivo")
//console.log(data)
console.log(ciudades)

//2.listar las personas de sexo femenino
/*
const arrasexo =data.filter(info=>info.sexo=="F");
console.log("listado de personas de sexo femenino",arrasexo)
*/
//3 Listado de ciudades con temperatura mayor a 25 grados
const arraytemp=ciudades.filter(ciu=>ciu.temp>25)
console.log(arraytemp)

//4 Encuentre el total de la poblacion del array ciudades
const poblaciones=ciudades.reduce((a,ciudad)=>{
    return a+ciudad.poblacion
},0)
console.log("Total de la poblacion",poblaciones)

//5. Encuentre la sumatoria de los pesos de las personas de sexo masculino(array personas)
const pesototal=data.filter(info=>info.sexo=="M").reduce((a,to)=>{
    return a+to.peso
},0)
console.log("Sumatoria de pesos de las personas:",pesototal)

//6. Encuentre el promedio de las temperaturas (array ciudades)
const prome=ciudades.reduce((a,c)=>{
    return a+c.temp
},0)/ciudades.length
console.log("Promedio de temperatura de las ciudades:",prome)

//7Listado de personas de sexo masculino ordenados ascendentemente (a-z)
const pesotot = data.filter(info => info.sexo === "M")
                      .sort((a, b) => {
                        if(a.nombres < b.nombres) return -1;
                        if(a.nombres > b.nombres) return 1;
                        return 0;
                      });
console.log(pesotot)
//8 Agregue el campo país al array de ciudades (Los países pueden ser Ecuador, Colombia, Perú ). 
//Complete el array de ciudades con un total de 10 ciudades. 
// A continuación, calcule el total de habitantes del país "Ecuador"
const totalhabit=ciudades.filter(info=>info.pais=="Ecuador").reduce((a,to)=>{
    return a+to.poblacion
},0)
console.log("El total de habitantes en Ecuador es:",totalhabit)

//9 Escriba el código necesario para convertir el array de personas en una array que tenga objetos 
//con los campos {apellidos, nombres}. El método map le sería de mucha utilidad.
/*Ejemplo: 
[
    {
        cedula:"0001",
        apellidos: "Plaza",
        nombres: "Andrés",
        sexo: "M",
        peso: 70.4
    },
    {
        cedula:"0002",
        apellidos:"Perdomo",
        nombres: "Angela",
        sexo: "F",
        peso: 55.40
    }
]

Resultado esperado: 
[
   {
        apellidos: "Plaza",
        nombres: "Andrés"
    },
    {
        apellidos: "Perdomo",
        nombres: "Angela"
    }
]
*/

const nombreap= data.map(({apellidos,nombres})=>(
{
    ["apellidos"]:apellidos,
    ["nombre"]:nombres
}
)
)
console.log(nombreap)