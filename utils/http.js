export class HttpClient {

    static get(url) {
        return new Promise((resolve, reject) => {
            // ajax req
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                } else if (xhr.readyState === 4) {
                    reject(xhr.responseText);
                }
            }
            xhr.send();
        });
    }
}