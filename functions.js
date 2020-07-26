'use strict';
// Function declaration
/*
    function <function_name> (arg1, arg2, ...args) {
        <function body>
    }
 */
function power(a, b) {
    console.log(a**b);
    return a**b;
}
// Function invocation
power(2,3);
const result = power(2,3); // result = 8
console.log(result);

// Function expression
const power_exp = function (a, b) {
    console.log(a**b);
    return a**b;
};
power_exp(2,3);
const result_exp = power_exp(2,3); // result = 8
console.log(result_exp);

// Callback
let sq = function(a) {return a**2};
let sumq = function(a,b,callback) {
    let result = a + b;
    result = callback(result);
    console.log(result);
};
sumq(2,3,sq);

//Context
let context = function() {
    console.log(this)
};
const tank = {
    fuel: 1000,
    context
};
tank.context();
tank.fire = function() {this.ammo--};
tank.ammo = 100;
tank.fire();

// NFE (Named function expression)

const sum = function sum (n) {
    console.log(n);
    if (n > 0) {
        return n + sum(n-1)
    } else {
        return 0
    }
};

// Arrow function
/*
   const <function name> = (arg1, arg2, ...args) => {
        <function body>
   }
   const <function name> = (arg1, arg2, ...) => arg1 + arg2
   const <function name> = arg => ++arg
   const <function name> = () => 2+1
   const <function name> = () => ({
        a: 10
   })
 */
const getName = function (firstName, lastName, lang = 'ru') {
    let greeting = {
        en: 'Hello',
        ru: 'Привет'
    };
    console.log(`${greeting[lang]} ${firstName} ${lastName}`);
};

// Example with Rasputin
const getName2 = function (firstName, lastName, lang = 'ru') {
    firstName = 'Peter';
    lastName = 'Jackson';
    let greeting = {
        en: 'Hello',
        ru: 'Привет'
    };
    console.log(`${greeting[lang]} ${firstName} ${lastName}`);
};

// Generator
let tank_gen = (ammo, armor) => ({ammo, armor});
let T90s = [];
for(let i = 0 ; i < 100; i++) {
    T90s.push(tank_gen(100, 50))
}

// Closure
const generateIncrement = () => {
    let i = 0;
    return () => console.log(i++);
};

// Async functions

// 1. Callbacks
const books = [
    {
        author: "Ben",
        title: "Ben the first"
    },
    {
        author: "Rafik",
        title: "Good days in Egypt"
    }
];

const authors = ['Ben', 'Rafik'];

const db = {
    books,
    authors
};

const getData = (callback) => {
    let data = 1000;
    setTimeout(callback, 5000, data);
};

const callback = data => {
    console.log(data)
};

const getLibData = (type, callback) => {
    let data = db[type];
    setTimeout(callback, 5000, data);
};

const getAuthors = (authors) => {
    console.log(authors);
    getLibData('books', books => {
        console.log(books);
    })
};

getLibData('authors', getAuthors);
// -----------------------------------------------
// Promises
// Promise - object with several states [pending, fullfilled, rejected]

let promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 1000);
});
promise.then(data => console.log(1000));

let getPromiseData = (type) => new Promise((resolve, reject) => {
    let data = db[type];
    setTimeout(resolve, 5000, data);
});

let getPromiseBooks = getPromiseData('authors').then(authors => getPromiseData('books'));

//-----------------------------------------------------
// Async

const asyncGet = async function () {
    const authors = await getPromiseData('authors');
    const books = await  getPromiseData('books');
    return { authors, books };
};
asyncGet();

const asyncGetArrow = async () => {};
//------------------------------------------------------



