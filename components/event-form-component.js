import { AppComponent } from "./app-component.js";
import { Event } from '../models/event-class.js';

const TEMPLATE = `
<form id="event-form">
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="event-name">
        <label class="mdl-textfield__label" for="event-name">Name...</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="event-category">
        <label class="mdl-textfield__label" for="event-category">Category...</label>
    </div>
    <!-- Colored raised button -->
    <button id="event-submit" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        OK
    </button>
</form>
`;

export class EventFormComponent extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindEvents() {
        this.submit();
    }

    /*
     Create class attributes to bind some view elements
    */
    bindElements() {
        this.submitBtn = document.querySelector('#event-submit');
        this.inputName = document.querySelector('#event-name');
        this.inputCategory = document.querySelector('#event-category');
    }

    onReady() { }

    /*
        Listen form submit
    */
    submit() {
        this.submitBtn.addEventListener('click', () => {
            // event object
            let event = new Event(
                this.inputName.value,
                this.inputCategory.value
            );

            // custom event and dispatch
            let domEvent = new CustomEvent('event-create', { detail: event });
            document.dispatchEvent(domEvent);
        })
    }
}