import { HttpClient } from "../utils/http.js";

export class EventService {
    static fetchEvents() {
        return HttpClient.get('http://localhost:3004/events');
    }
}