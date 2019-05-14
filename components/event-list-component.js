import { AppComponent } from "./app-component.js";
import { EventCardComponent } from "./event-card-component.js";
import { Event } from "../models/event-class.js";

const TEMPLATE = `
<div id="event-list"></div>
`;

export class EventListComponent extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindEvents() {
        this.handleEventFormCreate();
    }

    /*
     Create class attributes to bind some view elements
    */
    bindElements() {
        this.container = document.querySelector('#event-list');
    }

    handleEventFormCreate() {
        document.addEventListener('event-create', (e) => {
            console.log('event to add ', e.detail);
            // add an event card
            // create a card
            // let card = new EventCardComponent();
            // // add card to our List
            // this.container.appendChild(card);
            this.container.appendChild(new EventCardComponent(e.detail));
        });
    }

    onReady() {
        console.log('Event List Component is ready');
        this.container.appendChild(new EventCardComponent(new Event("Test", "Test")));
    }
}