console.log("-------Tema No.1-------")
//console.log("it's alive!!")

var time = 25

if(time < 12){
    console.log("Buenos días")
    }

if(time < 20){
    console.log("Buena tarde")
}

if(time >= 20 ){
    console.log("Buenas tardes")
}

console.log("-------Reto No.1-------")

if(time > 24 || time < 0)
    {
    console.log("Hora Invalida")
    document.write("<h2>hora Ivalida</h2>")
    } else if (time < 12)
        {
            console.log("Buenos días")
            document.write("<h2>Buenos días</h2>")
        }else if (time < 20)
            {
                console.log("Buena tarde")
                document.write("<h2>Buenos días</h2>")
            }else if (time >=20)
                {
                    console.log("Buena tarde")
                    document.write("<h2>Buenos días</h2>")
                }
console.log("-------Tema No.2-------")

var day = 3

switch (day){
    case 1:
        console.log("Lunes")
    break
    case 2:
        console.log("Martes")
    break
    case 3:
        console.log("Miercoles")
    break
    case 4:
        console.log("Jueves")
    break
    case 5:
        console.log("Viernes")
    break
    case 6:
        console.log("Sabado")
    break
    case 6:
        console.log("Domingo")
    break
    default:
        console.log("No es un valor valido")
}

console.log("-------Tema No.3-------")
var velocidad = 125
var mensaje = velocidad > 100? "Exceso de velocidad" : "Velocidad adecuada"
console.log(mensaje)

console.log("-------Tema No.4-------")

for (var i =0; i < 10; i++){
    console.log("Hola mundo")
}

var l = 0

while (l < 10)
    {
        console.log("Hello world")
        l++
    }


console.log("-------Reto No.2-------")
console.log("Numeros pares")
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }

console.log("-------Reto No.3-------")
console.log("Numeros Primos")
for (let num = 2; num <= 100; num++) {
    let esPrimo = true;
    
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
  
    if (esPrimo) {
      console.log(num);
    }
  }


console.log("-------POSTWORT-------")
console.log("User Stories")
console.log("Como<Comprador>, quiero <Ver un catalogo variado de productos> para <Tener obciones para elegir>")
console.log("Como<Administrador>, quiero <Poder subir mis productos> para <Conseguir más venta>")
console.log("Como<Comprador>, quiero <Una forma de pago practica> para <Comprar desde casa>")
console.log("Como<Administrador>, quiero <Gestionar formas de pagos> para <que sea un auto cobro>")

    