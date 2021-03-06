'use strict';
import Component from './component.js'
export default class Landing extends Component {
    constructor() {
        super();
        this.data.password = '';
        this.data.email = '';
    }
    template() {
        return `
        <main>
            <header> &#9819; Amazing Checkmates </header>
           <article class="article">
              <input class="text_input" type="text" placeholder="E-mail" value="${this.data.email}">
              <input class="text_input" type="passsword" placeholder="Password" value="${this.data.password}">
           </article>
           <article class="article1">
               <input class="button" type="submit" value="Login">
               <input class="button underline" type="submit" value="Register">
           </article>
       </main>
       
        `
    }
    methods () {
        return {
            remove() {
                this.destroy()
            },
            changeEmail() {
                const EmailInputValue = this.$el.children[1].children[0].value;
                this.data.email = EmailInputValue;
                this.render();
            },
            changePassword() {
                const PasswordInputValue = this.$el.children[1].children[1].value;
                this.data.password = PasswordInputValue;
                this.render();
            }
        }
    }

    onRender () {
        const submitButton = this.$el.children[2].children[0];
        submitButton.addEventListener('click', this.methods.submit);
        const emailInput = this.$el.children[1].children[0];
        emailInput.addEventListener('blur', this.methods.changeEmail);
        const passwordInput = this.$el.children[1].children[1];
        passwordInput.addEventListener('blur', this.methods.changePassword);
    }

}
