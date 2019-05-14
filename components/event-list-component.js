import { AppComponent } from "./app-component.js";
import { EventCardComponent } from "./event-card-component.js";
import { Event } from "../models/event-class.js";
import { EventService } from "../services/event-service.js";

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
            this.container.appendChild(new EventCardComponent(e.detail));
        });
    }

    onReady() {
        console.log('Event List Component is ready');
        // manually add card
        // this.container.appendChild(new EventCardComponent(new Event("Test", "Test")));

        // add from ws
        this.loadEvents();
    }

    loadEvents() {
        EventService.fetchEvents().then((data) => {
            console.log("events fetch", JSON.parse(data));

            for (event of JSON.parse(data)) {
                this.container.appendChild(new EventCardComponent(event));
            }
        });
    }
}