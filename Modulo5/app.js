// Constructor
var Person = function (name, year, job){
    this.name = name
    this.bithYear = year
    this.job = job
}

// Prototype
Person.prototype.age = function(){
    var today = new Date()
    var year = today.getFullYear()
    return year - this.bithYear
}

//Instancias
var john = new Person("John", 1990, "Developer")
var mark = new Person("Mark", 1985, "Teacher")
var jane = new Person("Jane", 1975, "Designer")

console.log(john.age)
console.log(mark)
console.log(jane)

console.log("---------------Reto No.1---------------")
var Vec = function(x, y) {
    this.x = x;
    this.y = y;
  };
  
  Vec.prototype.plus = function(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  };
  
  Vec.prototype.minus = function(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  };
  
  Vec.prototype.length = function() { // Math.sqrt = calcula la raiz cuadrada 
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  
  // Ejemplo de uso:
  var vec1 = new Vec(1, 2);
  var vec2 = new Vec(2, 3);
  
  console.log(vec1.plus(vec2)); 
  console.log(vec1.minus(vec2)); 
  console.log(vec1.length());
  //------------------------------------------------
  // Herencia 
  var Developer = function( name, year, job, language){ // Developer edera de Person
    Person.call( this, name, year, "Developer") // llamada de Person

    this.language = language

  }
  Developer.prototype = {... Person.prototype} // ... = todo lo que ya tiene Developer.prototype

  var Doctor = function (name, year, especialidad){
    Person.call (this, name, year, "Doctor")

    this.especialidad = especialidad
  }

  var ana = new Developer ("Ana", 1999, "Javascript")
  var bruno = new Doctor ("Bruno", 1995, "Neurologo" )

  console.log(ana)
  console.log(bruno)

  console.log(ana.age())



  console.log("---------------Reto No.2---------------")

  var Group = function() {
    this.members = [];
  };
  
  Group.prototype.add = function(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }
  
  Group.prototype.has = function(value) {
    return this.members.includes(value)
  }
  
  Group.from = function(arr) {
    let group = new Group()
    for (let value of arr) {
      group.add(value);
    }
    return group;
  }
  
  var group = Group.from([1, 2, 3, 4, 5]);
  console.log(group);
  console.log(group.has(5)); 
  console.log(group.has(10)); 
  
  group.add(10);
  console.log(group.has(10)); // true

  console.log("---------------Reto No.3---------------")

  var Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
  }

  var triangle = new Triangle(3, 4, 5);
  console.log(triangle.getPerimeter()); 