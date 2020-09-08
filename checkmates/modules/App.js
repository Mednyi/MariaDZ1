'use strict';
import Component from './component.js'
import Header from "./Header.js";
import Landing from "./Landing.js";
import Footer from "./Footer.js";
export default class App extends Component {
    onRender() {
        this.$el.append(this.components.header.render());
        this.$el.append(this.components.landing.render());
        this.$el.append(this.components.footer.render());
    }
    components = {
        header: new Header(),
        landing: new Landing(),
        footer: new Footer()
    }
}
const app = new App({}, document.body);
app.render();
