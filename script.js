'use strict';

// Scoping Practice : 93
// Function scope - Parent
/*
function calAge(firstName, birthYear) {
  // Function scope (Variable Environment)
  let currentName = firstName;
  let path = '';
  const age = 2023 - birthYear;

  // Function scope - childe
  function printAge() {
    const output = `${currentName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    // console.log(age); // Available age variable

    // Block scope
    if (age <= 20) {
      path = `Hi ${currentName} your age is ${age}, So you explore more your goals and achieved your AIM`;
    } else {
      path = `Hi ${currentName} your age is ${age}, So you 'Find your AIM and run your goals'`;
    }
  }
  printAge();

  return path;
  // console.log(output); // output variable not available in calAge function scope
  // ReferenceError: output is not defined
  // return age;
}

// Global Scope
const firstName = 'Praveen';

console.log(calAge('kishor', 2004));
// console.log(printAge());
// ReferenceError: printAge is not defined

// Variable Environment Hoisting and TDZ in practice

// Console
// console.log(notInitVar);
// console.log(notInitLet);
// console.log(notInitConst);

// Before Initialize
var notInitVar = 'Before initialize output undefined ';
let notInitLet = "Before initialize con't access";
const notInitConst = "Before initialize con't access";

// {------ Start This ------}
*/
// This keyword
/*
const calcAgeFunc = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeFunc(1992);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
  // Uncaught ReferenceError: Cannot access 'notInitLet' before initialization
};

calcAgeArrow(1999);

const praveen = {
  year: 1999,
  calcAge: function () {
    console.log(2023 - this.year);
  },
};

praveen.calcAge();

const kishor = {
  year: 2004,
};

// Create new object and store to this object
// kishor.calcAge = praveen.calcAge;
// console.log(kishor);
// kishor.calcAge();

// Create function copy to praveen.calcAge function
let newVariable = praveen.calcAge;

console.log(newVariable);
// newVariable();
console.log('----------------------------------------------');
// ArrowFunction vs Regular function
var firstNameTest = 'Ram';

const praveen02 = {
  firstNameTest: 'Praveen',
  year: 1999,
  calAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    // Problem in regular function used a this keyword
    // const isPraveen = function () {
    //   // ! Error : Uncaught TypeError: Cannot read properties of undefined (reading 'year')
    //   console.log(this);
    //   console.log(this.year >= 1990 && this.year <= 2015);
    // };

    // * Solution 01
    */
/**
 * common technique used in regular functions is to declare a variable, often named 'self' or 'that', to capture the value of this in an outer context. This is done to ensure that the desired this value is accessible within nested functions or callback functions where the this context may change.
 */

// const self = this;
// const isPraveen = function () {
//   console.log(self);
//   console.log(self.year >= 1990 && self.year <= 2015);
// };
// isPraveen();
/*
    // * Solution 02
    const isPraveen = () => {
      console.log(this);
      console.log(this.year >= 1990 && this.year <= 2015);
    };
    isPraveen();
  },

  // Never used to arrow method function in objects
  // greet: function () {
  //   const this;
  //   console.log(this);
  //   console.log(`Hi ${this.firstNameTest}`);
  // },

  greet: function () {
    const self = this;
    console.log('Greeting function');
    console.log(self);
    console.log(`Hi ${self.firstNameTest}`);
  },
};
praveen02.calAge();
praveen02.greet();

// function newFunc() {
//   // Regular function used in this keyword will be undefined.
//   console.log(this);
// }

let newFunc = () => {
  // Arrow functions do not bind their own this value but instead inherit it from the surrounding lexical scope.
  console.log(this);
};
newFunc();

// {------ End This --------}
*/
// * Arguments keyword
/*
console.log('Arguments');
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(1, 198, 15, 50);

let addArrowFunc = (a, b) => {
  // ! Uncaught ReferenceError: arguments is not defined
  console.log(arguments);
  return a + b;
};
addArrowFunc(42, 82, 456, 94);
*/

// * Primitive and objects(Reference type)

// Primitive types
let lastName = 'Kumar';
let oldLastName = lastName;
lastName = 'Deva';
console.log(lastName, oldLastName);

// Reference type
const praveenDetails = {
  firstName: 'Praveen',
  lastName: 'Kumar',
  age: 24,
};
const praveenLastNameChanged = praveenDetails;
praveenLastNameChanged.lastName = 'Strak';
// Changed in both objects
console.log('Before Change : ', praveenDetails); // Before Change :  { firstName: 'Praveen', lastName: 'Strak', age: 24 }
console.log('After Change : ', praveenLastNameChanged); // After Change :  { firstName: 'Praveen', lastName: 'Strak', age: 24 }
console.log('===========================');
// Copying Objects
const praveenDetails02 = {
  firstName: 'Praveen',
  lastName: 'Kumar',
  age: 24,
  family: ['kishor'],
};
// Correct way to change the object value
// ? Deep clone in object ?

// Object.assign({}, object); --> Clone the object
const praveenChangedObjValue = Object.assign({}, praveenDetails02);
praveenChangedObjValue.lastName = 'Strak';

praveenChangedObjValue.family.push('Harini');
praveenChangedObjValue.family.push('Mithra');
praveenChangedObjValue.family[0] = 'Siva';
praveenChangedObjValue.age = 25;

console.log('Before Change : ', praveenDetails02); // Before Change :  { firstName: 'Praveen', lastName: 'Kumar', age: 24 }
console.log('After Change : ', praveenChangedObjValue); // After Change :  { firstName: 'Praveen', lastName: 'Strak', age: 24 }
