'use strict';

class Component {
    constructor(options) {
        this.data = {};
        this.methods = {};
        this.subRender = options.subRender;
    }
    template () {
        return ``
    }
    render () {
        if (!this.el) {
            this.el = document.createElement('div');
        }
        this.el.innerHTML = this.template();
        this.el = this.el.firstElementChild;
        this.subRender();
        return this.el;
    }
}

const todo = (task = {
    title: 'Название',
    status: false
}) => ({
    template () {
        return ` 
             <div class="todo">
                 <input class ="input" value="${this.data.task.title}" id="myTextField" placeholder="Добавить задачу">
                   <select class ="dropdown">
                       <option ${this.data.task.status ? 'selected' : ''}>Сделано</option>
                       <option ${!this.data.task.status ? 'selected' : ''}>Не сделано</option>
                   </select>
                 <span class="icon" data-action="delete">X</span>
             </div>
        `
    },
    data: {
        task
    },
    deleteTask () {},
    rename () {},
    render () {
        if (!this.el) {
            this.el = document.createElement('div');
        }
        this.el.innerHTML = this.template();
        this.el = this.el.firstElementChild;
        return this.el;
    }
});

const todoList = {
    template () {
        return ` 
        <main>
          <div class="controls">
              <input class ="input" id="search" placeholder="Поиск...">
              <button id="add" class = "button" onclick="focusMethod()">Добавить</button>
          </div>
        </main>`
    },
    data: {
        filter: '',
        todos: []
    },
    applyFilter () {},
    addTodo () {},
    render () {
        if (!this.el) {
            this.el = document.createElement('div');
        }
        this.el.innerHTML = this.template();
        this.el = this.el.firstElementChild;
        for(let i=0; i<10; i++) {
            const todoComponent = todo();
            this.el.appendChild(todoComponent.render());
        }
        return this.el;
    }
};

document.getElementsByTagName('body')[0].append(todoList.render());
