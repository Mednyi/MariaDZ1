'use strict';
const Todo = function Todo (description = "Пример", status = false) {
    this.description = description;
    this.status = status;
};

const generateArr = (generator, count) => {
    let arr = [];
    for (let i = 0; i< count; i++) {
        arr.push(new generator);
    }
    return arr;
};

const todos = generateArr(Todo, 10);


