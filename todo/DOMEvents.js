'use strict';
// Event listeners

// Events:
/**
 * click
 * mouseover
 * mousemove
 * contextmenu
 * blur // works only with elements which have tabindex attribute.
 * focus // works only with elements which have tabindex attribute.
 * keydown
 * keyup
 */

// click

// 1 <div class="button" onclick="createTask()">Добавить</div>
/*console.log(this);
let i = 0;
function createTask () {
    const main = document.getElementsByTagName('main')[0];
    const newTask = document.createElement('div');
    newTask.className = 'todo';
    newTask.innerHTML = '<input class ="input" id="myTextField" placeholder="Добавить задачу">';
    main.append(newTask);
}
*/
// 2

const deleteTask = (e) => {
    console.log(e);
};

const createTask2 = (e) => {
    console.log(e);
    e.preventDefault(); // cancel default behavior
    e.stopPropagation(); // cancel bubbling
    const main = document.getElementsByTagName('main')[0];
    const newTask = document.createElement('div');
    newTask.className = 'todo';
    newTask.innerHTML = `
                            <input class ="input" id="myTextField" placeholder="Добавить задачу">
                            <select class ="dropdown">
                                <option>Сделано</option>
                                <option>Не сделано</option>
                            </select>
                            <span class="icon" data-action="delete">X</span>
                        `;
    newTask.addEventListener('click', function (e) {
        if (e.target.dataset && e.target.dataset.action === 'delete') this.remove();
    });
    main.append(newTask);
    newTask.firstElementChild.focus();
};
// window.onload = () => {
//    const addButton = document.getElementById('add');
//    addButton.onclick = createTask2;
// };
// or specify [ defer ] attribute in <script> tag

const addButton = document.getElementById('add');
addButton.onclick = createTask2;
addButton.oncontextmenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
};

// 3 addEventListener

const tasks = document.getElementsByClassName('todo');
for (let task of tasks) {
    task.addEventListener('click', function (e) {
        if (e.target.dataset && e.target.dataset.action === 'delete') this.remove();
    })
}

const focusMethod = function getFocus() {
    document.getElementById("myTextField").focus();
  };

const searchField = document.getElementById('search');
searchField.oninput = function (e) {
    const tasks = document.getElementsByClassName('todo');
    for (let task of tasks) {
        if (task.firstElementChild.value.includes(this.value)) {
            task.setAttribute('style', 'display: grid');
        } else {
            task.setAttribute('style', 'display: none');
        }
    }
};
