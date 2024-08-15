console.log("_______________________________________")
var ocupacion = function(job, name){
    switch(job){
        case "developer":
            return name + " desarrolla apps muy cool "
        case "designer":
            return name + " crea diseños increibles "
        default:
            return name + " hace otra cosa " 
    }
}

console.log(ocupacion("developer", "Juan"))
console.log("_______________________________________")
function logName(name){
    console.log("Hola" + name)
}

logName("Javier")

var logName2 = function(name){
    console.log("Hola" + name)
}
logName2("Ana");

(function(name){
    console.log("Hola " + name)
})("Julia");

console.log("____________________Reto 1___________________")
var Resultado1 = 0 
var Resultado2 
var Resultado3 = 1 

for(let i = 0; i <= 8; i++)
    {
        Resultado2 = Resultado1 + Resultado3
        console.log(Resultado2)
        if(i % 2 == 0)
        {
            Resultado1 = Resultado2 
        }
        else
        {
            Resultado3 = Resultado2
        }
    }

console.log("____________________Reto 2___________________")
var Resultado01 = 0 
var Resultado02 
var Resultado03 = 1 
console.log("Ingrese la cantidad de veces que desea que se repita")
var numero = prompt("Introduce un número:");
numero = parseInt(numero)
for(let i = 0; i <= numero; i++)
    {
        Resultado02 = Resultado01 + Resultado03
        console.log(Resultado02)
        if(i % 2 == 0)
        {
            Resultado01 = Resultado02 
        }
        else
        {
            Resultado03 = Resultado02
        }
    }