
    export default () => {
        return fetch("http://quotes.stormconsultancy.co.uk/random.json").then(
            response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse;
            }
            )
    }


