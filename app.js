// inclure ou déclarer la classe Event
// utiliser un module Loader Javascript
import { EventFormComponent } from './components/event-form-component.js';
import { EventListComponent } from './components/event-list-component.js';
import { EventCardComponent } from './components/event-card-component.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        console.log("App initialization");
        // creer / déclarer nos composant
        customElements.define('event-form', EventFormComponent);
        customElements.define('event-list', EventListComponent);
        customElements.define('event-card', EventCardComponent);
    }
}

new App();