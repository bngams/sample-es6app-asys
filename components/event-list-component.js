import { AppComponent } from "./app-component.js";

const TEMPLATE = `
<div id="event-list"></div>
`;

export class EventListComponent extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindEvents() {
    }

    /*
     Create class attributes to bind some view elements
    */
    bindElements() {
        this.container = document.querySelector('#event-list');
    }

    onReady() { }
}