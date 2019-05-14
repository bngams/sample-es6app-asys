import { AppComponent } from './app-component.js';

const TEMPLATE = `
<div class="event-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">
            <span class="event-name">Name</span> -
            <span class="event-category">XX</span>
        </h2>
    </div>
    <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </div>
    <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View
        </a>
    </div>
</div>
`;

export class EventCardComponent extends AppComponent {

    constructor(event) {
        super();
        this.event = event;
    }

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.eventName = this.querySelector('.event-name');
        this.eventCategory = this.querySelector('.event-category');
    }

    bindEvents() {
    }

    onReady() {
        console.log('Event Card Component is ready');
        this.refresh();
    }

    /**
     * Refresh event info in template
     */
    refresh() {
        this.eventName.innerHTML = this.event.name;
        this.eventCategory.innerHTML = this.event.category;
    }
}