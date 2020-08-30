'use strict';

const todos = [{title: 'todo1', status: true}, {title: 'todo2', status: false}];
class TodoView {
    constructor(data = {title: '', status: false}) {
        this.data = data;
        Object.keys(this.methods).forEach(methodName => {
           this.methods[methodName]  = this.methods[methodName].bind(this)
        })
    }
    template () {
        return ` 
                 <input class ="input" value="${this.data.title}" id="myTextField" placeholder="Добавить задачу">
                 <select class ="dropdown">
                     <option ${this.data.status ? 'selected' : ''}>Сделано</option>
                     <option ${!this.data.status ? 'selected' : ''}>Не сделано</option>
                 </select>
                 <span class="icon" data-action="delete">X</span>
        `
    }
    methods = {
        remove () {
            this.$el.remove();
            delete this;
        },
        changeTitle () {
            const titleInputValue = this.$el.children[0].value;
            this.data.title = titleInputValue;
            this.render();
        }
    }
    render () {
        if (!this.$el) {
            this.$el = document.createElement('div');
            this.$el.className = 'todo'
        }
        this.$el.innerHTML = this.template();
        const deleteButton = this.$el.children[2];
        deleteButton.addEventListener('click', this.methods.remove);
        const titleInput = this.$el.children[0];
        titleInput.addEventListener('blur', this.methods.changeTitle);
        return this.$el;
    }
}

class TodoList {
    constructor(data = {filter: '', tasks: []}) {
        this.data = data;
        this.methods = {}
    }
    template () {
        return ` 
        <main>
          <div class="controls">
              <input class ="input" id="search" placeholder="Поиск...">
              <button id="add" class = "button" onclick="focusMethod()">Добавить</button>
          </div>
        </main>`
    }
    render () {
        if (!this.$el) {
            this.$el = document.createElement('div');
        }
        this.$el.innerHTML = this.template();
        this.$el = this.$el.firstElementChild;
        this.data.tasks.forEach(task => {
            const todoComponent = new TodoView(task);
            this.$el.appendChild(todoComponent.render());
        });
        return this.$el;
    }
}

const todoList = new TodoList({tasks: todos});
document.getElementsByTagName('body')[0].append(todoList.render());
