import {
    PolymerElement,
    html
} from '@polymer/polymer';
class HelloWorld extends PolymerElement {

    constructor(who) {
        super();
        this.who = who;
    }

    static get properties() {
        return {
            who: {
                type: String,
                value: 'World'
            }
        };
    }

    static get template() {
        return html`
        <div class="app-container">
            Hello [[who]]
        </div>

        <style>
            .app-container {
                text-align: center;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                font-size: 5em;
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

customElements.define('hello-world', HelloWorld);