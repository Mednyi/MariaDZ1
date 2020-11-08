'use strict';
import Component from './component';
export default class Header extends Component {
    constructor() {
        super(null, './main.css');
    }
    template() {
        return `
                <header>
                    <div>&#9819; Amazing Checkmates</div>
                    <div>
                        <div class="burger"></div>
                        <div class="burger2"></div>
                        <div class="burger3"></div>
                    </div>
                </header>
        `
    }
}