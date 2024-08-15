var numbers = [1, 2, 3, 4, 5]

function double (n){
    return 2 * n
}

var double = numbers.map(double)

//console.log(double)

// -------------- Inmutabilidad --------------  

var car = {
    brand: "Nissan",
    model: "Sentra",
    year: 2022
}

//function addColor (car)
//{
//    car.color = "Black"
//    return car
//}

function addColor(car){
    var carro = {... car, color: "Black"}
    return carro
}
//console.log("Antes: ", car)
var newCar = addColor(car)
//console.log("Despues: ", newCar)

//console.log(car == newCar)

// -------------- Funciones Puras --------------
var n = 1
function foo(x){
    n++
    return x + n
}

//console.log("Valor de n: ", n , "Valor de foo(1)", foo(1))
//console.log("Valor de n: ", n , "Valor de foo(1)", foo(1))
//console.log("Valor de n: ", n , "Valor de foo(1)", foo(1))

function goo(x){
    return x * 5
}

//console.log("Valor de n: ", n , "Valor de foo(3)", foo(3))
//console.log("Valor de n: ", n , "Valor de foo(3)", foo(3))
//console.log("Valor de n: ", n , "Valor de foo(3)", foo(3))

// -------------- Ejemplo 02 --------------
var cart = ["Laptop"]

function agregarProducto ( carrito, producto, cantidad){
   if(cantidad == 1)
    return [...carrito, producto]
   return agregarProducto([... carrito, producto], producto, cantidad-1)

}

//console.log(agregarProducto(cart, "Audifonos", 3))
//console.log(agregarProducto(cart, "Audifonos", 3))

// ---- Ejemplo 03 Funciones de orden superior ----
function num2arr (num){
    return num.toString().split("") //.split sirve para separa los elementos cada que encuentre ""
    // 123 --> "123" --> ["1", "2", "3"]
}

console.log(num2arr(1972))

function str2num(str) {
    return Number(str) //combierte de cadena a numeros
    //"5" --> 5
}

function num2arrN(num){
    //123 --> [1,2,3]
    return num2arr(num).map(str2num)
}

function suma(acc, cv){
    return acc + cv
}

function sumaDigitos(num){
    return num2arrN (num).reduce(suma,0)
}

console.log(sumaDigitos(1972))

function sumDigits (num){
    return num
            .toString()
            .split("")
            .map(str2num)
            .reduce(suma, 0)
}
console.log(sumDigits(1972))

console.log("----------- Reto No.1----------")
function flatten (arr){
    return arr.reduce(function(acc, cv){
        return acc.concat(cv)
    },
    [])
}
console.log(flatten([[], [2, 3, 4], [2, 6, 7]]))

console.log("----------- Reto No.2----------")
function compact(arr){
    return arr.filter(function(x){return x})
}
console.log(compact([0, 1, false, 2, "", 3]))











