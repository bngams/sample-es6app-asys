export class AppComponent extends HTMLElement {

    connectedCallback() {
        this.display();
        this.bindElements();
        this.bindEvents();
        this.onReady();
    }

    display() { }
    bindEvents() { }
    bindElements() { }
    onReady() { }
}