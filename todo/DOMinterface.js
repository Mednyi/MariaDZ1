'use strict';
// Interaction with DOM
console.log(document); // document - top-level wrapper

const body = document.body;
// <body>​…​</body>​
const head = document.head;
// <head>​…​</head>​
const htmlEl = document.documentElement;
// <html> ... </html>

// Work with children

const children = document.body.children; // HTMLCollection of DOM Elements
for (let child of document.body.children) {
    console.log(child); // List all the children
}
const nthhild = document.body.children[0];
const firstChild = document.body.firstChild;
const lastChild = document.body.lastChild;

// Work with Parent

const parent = firstChild.parentNode;

// Work with siblings

const leftSibling = body.previousElementSibling;
const rightSibling = body.nextElementSibling;

// Get any element

const elementById = document.getElementById('list');
const elementsByClassName = document.getElementsByClassName('todo');
const elementsByName = document.getElementsByName('2');
const elementsBytTagName = document.getElementsByTagName('span');
const elText = document.getElementById('list').innerText;

//-------------------------------------------------------------------------------------
// Content

let elInnerHMLT = elementById.innerHTML;
elInnerHMLT += '<div></div>';
let elOuterHTML = elementById.outerHTML;
elOuterHTML += '<div></div>';

// Attributes

elementById.setAttribute('style', 'background-color: red;');
elementById.setAttribute('data-list', 'firstlist'); // set attribute value
console.log(elementById.dataset.list); // Prints data-list attribute value
elementById.getAttribute('data-list'); // get attribute value
elementById.removeAttribute('data-list'); // removes attributes

// Elements

const main = document.getElementsByTagName('main')[0]
// main
// <main>​…​</main>​
const newTask = document.createElement('div');
// newTask
// <div>​</div>​
newTask.className = 'todo';
// "todo"
newTask.innerHTML = '<span>Новый элемент</span><span>Сделано</span>'
// "<span>Новый элемент</span><span>Сделано</span>"
main.append(newTask); // Add child to the end of children collection
main.prepend(newTask); // Add child to the beginning of children collection
main.before(newTask); // Add left sibling
main.after(newTask); // add right sibling
main.replaceWith(newTask); // replace current element
