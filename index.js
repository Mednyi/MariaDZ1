'use strict';

// EcmaScript - ES10
// Variables declaration
let variable; // local variable, modern style
var variable1; // global variable, obsolete
const variable2; // const local variable, modern style

// Variables initialization
let init_variable = 10;
variable = 20;

// Data types

// Number
let z = 100; // integer
let r = 100.345; // float
let inf = infinity; // infinity
let nonANumber = 'hello'/2; //(NaN - not a number)

// BigInt - big integers
const bigOne = 9007199254740993n;

// String
const str = 'Hello';
const str1 = "Hello";
const big_str = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Etiam iaculis sem risus, eu eleifend nulla accumsan sit amet. 
    Phasellus ut velit urna. Proin iaculis, eros ac sodales finibus, mi metus iaculis elit, 
    eu accumsan enim metus quis elit. 
    Phasellus maximus facilisis ligula ac varius. Nunc aliquet facilisis leo, quis hendrerit est. Nullam id libero mi.  
    Vivamus eu purus eget turpis iaculis sollicitudin id eu eros. Nulla ac nisi lorem. Morbi ac odio rutrum, 
    fermentum quam ac, maximus nibh.
`;
let interp = 800;
let interp_str = `My deposite is ${interp}, ok`; // string interpolation

//Boolean
let truth = true;
let lies = false;

/*
   a and b  =
   0     0  0
   0     1  0
   1     0  0
   1     1  1

   a or b  =
   0    0  0
   0    1  1
   1    0  1
   1    1  1
 */

// undefined
let undef = undefined; // variable was declared but not initialized

// null
let nulltype = null;

// Object
let obj = {}; // empty object
let car = {
    fuel: 100, // object field (name: field, type: number, value: 100)
    model: 'Mercedes',
    color: 'black',
    engine: {
        type: 'tfsi',
        p: 500
    }
};
console.log(car.fuel) // 100
car.fuel = 10000
car.engine = "Hello"

typeof car // object , typeof helps to determine type of variable
