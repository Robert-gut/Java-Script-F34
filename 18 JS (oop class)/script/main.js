// ? oop , class

//! 1 Інкапсуляція 
//! 2 Наслідування 
//! 3 Поліморфізм 
//! 4 Абстракція


//? class

class Dog{
  static weight = '10'
  name
  breed
  age
  // this = {}
  constructor(name, breed, age){
    this.name = name
    this.breed = breed
    this.age = age
  }
  
  ShowDogInfo(){
    console.log(`Name: ${this.name}, Bread: ${this.breed}, Age: ${this.age}`);
  }
}


const Bob = new Dog('Bob', 'Taksa', 3)
const Jack = new Dog('Jack', 'Shepherd', 6)
// console.log('✌️Jack --->', Jack.name);
// console.log('✌️Bob --->', Bob.age);

// Bob.ShowDogInfo()
// Jack.ShowDogInfo()

// console.log(Dog.weight);

////////////////////////////////////////////////////////////////////////

// class HunterDog extends Dog{
//   constructor(name, breed, age, power){
//     super(name, breed, age)
//     this.power = power
//   }

//   PlusHealth(hp){
//     console.log(`Power: ${this.power}`);
//     this.power += hp
//     console.log(`Power: ${this.power}`);
//   }

//   MinusHealth(hp){
//     console.log(`Power: ${this.power}`);
//     this.power -= hp
//     console.log(`Power: ${this.power}`);
//   }

//   ShowDogInfo(){
//     console.log(`Name: ${this.name}, Bread: ${this.breed}, Age: ${this.age} Power: ${this.power}`);
//   }
// }


// const Rex = new HunterDog('Rex', 'Bulldog', 4, 100)
// console.log('✌️Rex --->', Rex);
// Rex.ShowDogInfo()
// Rex.PlusHealth(50)
// Rex.ShowDogInfo()
// Rex.MinusHealth(70)
// Rex.ShowDogInfo()

// Rex.age = 5
// Rex.ShowDogInfo()

// class Cat extends Dog{
//   constructor(name, breed, age, color){
//     super(name, breed, age)
//     this.color = color
//   }
//   ShowCatInfo(){
//     super.ShowDogInfo()
//     console.log(this.color);
//   }
// }

// // const Murchik = new Cat('Murchik', 'Bobtail', 2, 'black')

// // Murchik.ShowCatInfo()

////////////////////////////////////////////////////////////////////////////

class Ractangle {
  constructor(length, width){
    this.length = length
    this.width = width
  }

  getArea(){
    return this.length * this.width
  }

  getPerimeter(){
    return 2 * (this.length + this.width)
  }
}

const rectangle1 = new Ractangle(10, 5)
const rectangle2 = new Ractangle(5, 2)
// console.log(rectangle1.getArea());
// console.log(rectangle2.getArea());
// console.log(rectangle1.getPerimeter());
// console.log(rectangle2.getPerimeter());



///////////////////////////////////////////////////////////////////////////////////////

class Person {
  constructor(name, age){
    this.name = name
    this.age = age
    this.hobbies = []
  }

  addHobby(hobby){
    this.hobbies.push(hobby)
  }

  getHobbies(){
    return this.hobbies
  }
}

const John = new Person('John', 25)
console.log('✌️John --->', John);
John.addHobby('reading')
John.addHobby('swimming')
console.log('✌️John --->', John);

console.log(John.getHobbies());