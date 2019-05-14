import { HttpClient } from "../utils/http.js";

export class EventService {
    fetchProducts() {
        return HttpClient.get('http://localhost:3004/events');
    }
}