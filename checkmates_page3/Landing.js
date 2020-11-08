'use strict';
import Component from './component'
export default class Landing extends Component {
    constructor() {
        super(null, './main.css');
    }
    template() {
        return `
        <main>

        <div class="time">
            <img src ="00_15.jpg">
        </div>   
    
    <table class="chess-board">
                <tbody align="center">
                   
                    <tr>
                        <td class="dark white">&#9814</td>
                        <td class="light white">&#9816</td>
                        <td class="dark white">&#9815</td>
                        <td class="light white">&#9812</td>
                        <td class="dark white">&#9813</td>
                        <td class="light white">&#9815</td>
                        <td class="dark white">&#9816</td>
                        <td class="light white">&#9814</td>
                    </tr>
                    <tr>
                        <td class="light white">&#9817</td>
                        <td class="dark white">&#9817</td>
                        <td class="light white">&#9817</td>
                        <td class="dark white">&#9817</td>
                        <td class="light white">&#9817</td>
                        <td class="dark white">&#9817</td>
                        <td class="light white">&#9817</td>
                        <td class="dark white">&#9817</td>
                    </tr>
                    <tr>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                    </tr>
                    <tr>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                    </tr>
                    <tr>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                    </tr>
                    <tr>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                        <td class="light"></td>
                        <td class="dark"></td>
                    </tr>
                    <tr>
                        <td class="dark black">&#9823</td>
                        <td class="light black">&#9823</td>
                        <td class="dark black">&#9823</td>
                        <td class="light black">&#9823</td>
                        <td class="dark black">&#9823</td>
                        <td class="light black">&#9823</td>
                        <td class="dark black">&#9823</td>
                        <td class="light black">&#9823</td>
                    </tr>
                    <tr>
                        <td class="light black">&#9820</td>
                        <td class="dark black">&#9822</td>
                        <td class="light black">&#9821</td>
                        <td class="dark black">&#9818</td>
                        <td class="light black">&#9819</td>
                        <td class="dark black">&#9821</td>
                        <td class="light black">&#9822</td>
                        <td class="dark black">&#9820</td>
                    </tr>
                </tbody>
            </table>
     
      
    <div class="btn">
        <img src ="hands.jpg">
        <input class="button" value="Timer">
        <img src ="disk.jpg">
    </div>
    
    </main>
        `
    }
}
