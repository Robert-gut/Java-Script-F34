//!1 Інкапсуляція (приватні методи і властивості)

// class Person {
//   #name
//   #age

//   constructor(name, age){
//     this.#name = name
//     this.#age = age
//   }

//   #printDetails(){
//     console.log(`!!!${this.#name}, ${this.#age}`);
//   }

//   showDetails(){
//     this.#printDetails()
//   }

//   setAge(newAge){
//     if(newAge >= 0){
//       this.#age = newAge
//     }else{
//       console.error('Invalid age!');
//     }
//   }

// }

// const person1 = new Person('John', 25)
// console.log('✌️person1 --->', person1);
// person1.#age = 20
// console.log(person1.#name);
// console.log(person1.#age);
// console.log(person1.#printDetails());
// person1.showDetails()
// person1.setAge(18)
// person1.showDetails()


//! 2 Поліморфізм (перевикористання коду)

class Shape {
  constructor(){
    this.type = 'Shape'
  }

  printType(){
    console.log(`this is a ${this.type}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.type = 'Circle'
    this.radius = radius
  }

  printType(){
    super.printType()
    console.log(`Radius ${this.radius}`);
  }

}

class Rectangle extends Shape {
  constructor(width, height){
    super()
    this.type = 'rectangle'
    this.width = width
    this.height = height
  }

  printType(){
    super.printType()
    console.log(`With diminsions ${this.width}X${this.height}`);
  }
}


function printShapeType(shape){
  shape.printType()
}


const genericShape = new Shape()
const genericCircle = new Circle(5)
const genericRectangle = new Rectangle(3,6)

// printShapeType(genericShape)
// printShapeType(genericCircle)
// printShapeType(genericRectangle)


//! 3 Наслідування

//Батьківський клас
class Animal {
  constructor(name, type){
    this.name = name 
    this.type = type
  }

  showtype(){
    console.log(this.type);
  }
}

// Класс який наслідує бітьківськи клас

class Dog extends Animal{
  constructor(name, breed, type){
    super(name, type)
    this.breed = breed || 'unknown breed'
  }

  makeSound(){
    console.log('Woof! woof!');
  }

  fetch() {
    console.log(`${this.name} is fetching the ball.`);
  }
}

class Shepherd extends Dog{
  constructor(name, breed, type){
    super(name,type,breed)
  }
}

const Bob = new Shepherd('Bob', 'Shepherd', 'Dog')

Bob.showtype()