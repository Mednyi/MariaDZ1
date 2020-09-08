'use strict';
import Component from './component.js';
export default class Header extends Component {
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
