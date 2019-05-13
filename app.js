// inclure ou déclarer la classe Event
// utiliser un module Loader Javascript
import { Event } from './models/event-class.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        console.log("App initialization");
        // creer un objet de type Event
        let myEvent = new Event('Football Cup', 'Sport');
    }
}

new App();