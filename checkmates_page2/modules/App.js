'use strict';
import Component from './component.js'
import Landing from "./Landing.js";
import Header from "./header.js";
export default class App extends Component {
    onRender() {
        this.$el.append(this.components.header.render());
        this.$el.append(this.components.landing.render());

    }
    components = {
        header: new Header(),
        landing: new Landing(),
        
    }
}
const app = new App({}, document.body);
app.render();
