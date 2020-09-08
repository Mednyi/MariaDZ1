'use strict';
export default class Component {
    constructor(data = {}, $el = undefined) {
        this.data = data;
        this.$el = $el;
        this.methods = this.methods();
        Object.keys(this.methods).forEach(methodName => {
            this.methods[methodName]  = this.methods[methodName].bind(this);
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
        return this.$el;
    }
}
