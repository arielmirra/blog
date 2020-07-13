import {
    PolymerElement,
    html
} from './node_modules/@polymer/polymer/polymer-element.js';
class PolymerApp extends PolymerElement {

    static get properties() {
        return {
            who: {
                type: String,
                value: 'Medium'
            }
        }
    }
    static get template() {
        return html `
        <div class="app-container">
            Hello [[who]]
        </div>

        <style>
            .app-container {
                text-align: center;
                height: 100vh;
                width: 100vw;
                background-color: #e3e3e3;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        </style>
        `;
    }
}
customElements.define('polymer-app', PolymerApp);