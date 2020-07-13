import {
    PolymerElement,
    html
} from './node_modules/@polymer/polymer/polymer-element.js';
import './HelloWorld.js'
class PolymerApp extends PolymerElement {

    static get properties() {
        return {
            who: {
                type: String,
                value: 'World'
            }
        }
    }
    static get template() {
        return html `
        <hello-world who="there!"></hello-world>
        `;
    }
}
customElements.define('polymer-app', PolymerApp);