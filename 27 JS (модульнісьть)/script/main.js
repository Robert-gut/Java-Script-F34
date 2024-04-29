//! підключення через html
// console.log(plus(1,1));
// console.log(minus(10,1));
// console.log(division(10,2));
// console.log(multiplication(10,5));

//! export import

// import plus from './modules/plus.js'
// import multiplication from './modules/multiplication.js';
// import minus from './modules/minus.js';
// import { division } from './modules/division.js';

// console.log(plus(1,1));
// console.log(multiplication(10,5));
// console.log(minus(10,1));
// console.log(division(10,2));

// ! exports imports

// import {plus, minus, division, multiplication} from './modules/math.js'

// import math from "./modules/math-obj.js";

// console.log(math.plus(1,1));
// console.log(math.multiplication(10,5));
// console.log(math.minus(10,1));
// console.log(math.division(10,2));

import {plus, minus, division, multiplication} from './modules/math-obj.js'

console.log(plus(1,1));
console.log(multiplication(10,5));
console.log(minus(10,1));
console.log(division(10,2));