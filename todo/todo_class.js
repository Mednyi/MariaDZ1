'use strict';

const todos = [{title: 'todo1', status: true}, {title: 'todo2', status: false}];
class Component {
    constructor(data = {}) {
        this.data = data;
        this.methods = this.methods();
        Object.keys(this.methods).forEach(methodName => {
            this.methods[methodName]  = this.methods[methodName].bind(this)
        })
    }
    methods () {return {}}
    template () {return `<div></div>`}
    destroy () {
        this.$el.remove();
        delete this;
    }
    onRender () {}
    render () {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.template();
        if (this.$el) {
            this.$el.innerHTML = wrapper.firstElementChild.innerHTML;
        } else {
            this.$el = wrapper.firstElementChild;
        }
        this.onRender();
        return this.$el
    }
}

class TodoView extends Component {
    constructor(data = { title: '', status: false }) {
        super(data);
    }
    methods () {
        return {
            remove() {
                this.destroy()
            },
            changeTitle() {
                const titleInputValue = this.$el.children[0].value;
                this.data.title = titleInputValue;
                this.render();
            },
            changeStatus() {
                const inputStatus = +this.$el.children[1].value;
                this.data.status = inputStatus;
                this.render();
            }
        }
    }
    template () {
        return `
                <div class="todo">
                  <input class ="input" value="${this.data.title}" id="myTextField" placeholder="Добавить задачу">
                  <select class ="dropdown">
                     <option ${this.data.status ? 'selected' : ''} value=1>Сделано</option>
                     <option ${!this.data.status ? 'selected' : ''} value=0>Не сделано</option>
                  </select>
                  <span class="icon" data-action="delete">X</span>
                </div> 
        `
    }
    onRender () {
        const deleteButton = this.$el.children[2];
        deleteButton.addEventListener('click', this.methods.remove);
        const titleInput = this.$el.children[0];
        titleInput.addEventListener('blur', this.methods.changeTitle);
        const inputStatus = this.$el.children[1];
        inputStatus.addEventListener('change', this.methods.changeStatus);
        return this.$el;
    }
}

/*class TodoView {
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
                     <option ${this.data.status ? 'selected' : ''} value=1>Сделано</option>
                     <option ${!this.data.status ? 'selected' : ''} value=0>Не сделано</option>
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
        },
        changeStatus () {
            const inputStatus = + this.$el.children[1].value;
            this.data.status = inputStatus;
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
        const inputStatus = this.$el.children[1];
        inputStatus.addEventListener('change', this.methods.changeStatus);
        return this.$el;
    }
}*/

class TodoList extends Component {
    constructor(data = {filter: '', tasks: []}) {
            super(data);
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
    onRender () {
         this.data.tasks.forEach(task => {
            const todoComponent = new TodoView(task);
            this.$el.appendChild(todoComponent.render());
        });
        return this.$el;
    }
}

const todoList = new TodoList({tasks: todos});
document.getElementsByTagName('body')[0].append(todoList.render());
