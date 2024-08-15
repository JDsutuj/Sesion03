function multiply2(numbers) { // Forma for
    var res = []

    for (var i = 0; i < numbers.length; i++){
        res.push(numbers[i] * 2)
    }
    return res
}

function multiply22(numbers){ // Forma forEach
    var res = []
    numbers.forEach(function(item){
        res.push(item * 2)
    })
    return res
}

function multiply23(numbers){ // Forma recursiva
    if(numbers.length === 0)
        return[]
    var i = numbers.shift()
        return [i*2].concat(multiply23(numbers))
}

function calculateAverage (numbers){ // verificar

    var suma = []

    for (var i = 0; i < numbers.length; i++){
        suma += numbers[i]; // += sirve para suma = suma + el numero que lleve [i]
    }

    return suma / numbers.length
}

var input = [1, 3, 4, 7, 2, 1, 9, 0]
var  output = multiply2(input)
var  output1 = multiply22(input)
var  output2 = multiply23(input)
console.log(input)
console.log(output)
console.log(output1)
console.log(output2)
console.log("-------------Reto No.1 -------------")
var input = [1, 3, 4, 7, 2, 1, 9, 0]
var output3 = calculateAverage(input)
console.log("El promedio es: " + output3)

//-------------- Ejemplo 02 --------------
function obj2arr(obj){
    var keys = Object.keys(obj) // keys = objeto
    var res = []

    for (var i = 0; i < keys.length; i++){
        var val = obj[keys[i]]
        res.push([keys[i], val])
    }

    return res
}
var car = ['Nissan', "Versa", 2020]
var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }
  var carA = obj2arr(car)
  console.log(carA)

  console.log("-------------Reto No.2 -------------")
  function arrayToObject(arr){
    var obj = {}

    for(var i=0; i < arr.length; i++)
    {
        for(var i = 0; i < arr.length; i++){
            obj[arr[i][0]] = arr[i][i]
        }
        return obj;
    }
  }
  var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }
  var carA2 = obj2arr(car)
  console.log(carA2)
  console.log("-------------Reto No.2 de forma recursiva -------------")
  function arrayToObject(arr, obj = {}, index = 0) {

    if (index === arr.length) {
        return obj;
    }

    obj[arr[index][0]] = arr[index][1];

    return arrayToObject(arr, obj, index + 1);
}

var arr = [
    ['brand', 'Nissan'],
    ['model', 'Versa'],
    ['year', 2020]
]

var carObj = arrayToObject(arr);
console.log(carObj);

console.log("-------------Reto No.3 -------------")
var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
function pluck(list, propertyName) {
    var values = []

    for (var i=0; i < list.length; i++){
        values.push( list[i] [propertyName])
    }
    return values
}
var Name = pluck(singers, 'name', 'band', 'born');
console.log(Name)