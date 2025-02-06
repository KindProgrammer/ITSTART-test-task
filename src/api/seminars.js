
const getSeminars = async () => {
    return fetch('http://localhost:3000/seminars')
        .then(async (response) => {
            return response.json();
        })
        .catch((e) => {
            alert("Ошибка HTTP: " + response.status);
        });
}

export default getSeminars;