'use strict';
// statuses:
// 0 - todo
// 2 - in progress
// 3 - done
const todos = [{title: 'todo1', status: 0}, {title: 'todo2', status: 1}];
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
    constructor(data = { title: '', description: '', status: false }) {
        super(data);
    }
    methods () {
        return {
            changeTitle() {
                const titleInputValue = this.$el.children[0].value;
                this.data.title = titleInputValue;
                this.render();
            },
            changeDesc() {
                const descInputValue = this.$el.children[1].value;
                this.data.description = descInputValue;
                this.render();
            },
            drag (e) {
                e.dataTransfer.setData('text', this.data.title);
            }
        }
    }
    template () {
        return `
                <div class="card" draggable="true">
                    <input type="text" placeholder="Title" value="${this.data.title}">
                    <textarea placeholder="Description">${this.data.description}</textarea>
                </div>
        `
    }
    onRender () {
        const titleInput = this.$el.children[0];
        titleInput.addEventListener('blur', this.methods.changeTitle);
        const descInput = this.$el.children[1];
        descInput.addEventListener('blur', this.methods.changeDesc);
        this.$el.addEventListener('dragstart', this.methods.drag)
    }
}


class TodoList extends Component {
    constructor(data = {filter: '', tasks: []}) {
            super(data);
            if (this.data.filter === undefined) this.data.filter = '';
        }

    template () {
        return ` 
        <main>
            <div id="todo"></div>
            <div id="progress"></div>
            <div id="done"></div>
        </main>
        `
    }
    methods () {
        return {
            drop (e) {
                const statusMap = {
                    todo: 0,
                    progress: 1,
                    done: 2
                };
                const draggedData = e.dataTransfer.getData('text');
                const task = this.data.tasks.find(it => it.title === draggedData);
                task.status = statusMap[e.currentTarget.id];
                this.render();
            },
            allowDrop (e) {
                e.preventDefault();
            }
        }
    }
    onRender () {
        const columns = this.$el.children;
        for (let column of columns) {
            column.addEventListener('dragover', this.methods.allowDrop);
            column.addEventListener('drop', this.methods.drop);
        }
        this.data.tasks.forEach(task => {
            const todoComponent = new TodoView(task);
            columns[task.status].appendChild(todoComponent.render());
        });
        return this.$el;
    }
}

const todoList = new TodoList({tasks: todos});
document.getElementsByTagName('body')[0].append(todoList.render());
