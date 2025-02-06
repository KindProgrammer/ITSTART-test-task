import delay from "../utils/delay";

const getSeminars = async () => {
    // Имитация долгой загрузки
    await delay(3000);
    return fetch('http://localhost:3000/seminars')
        .then(async (response) => {
            return response.json();
        })
        .catch((e) => {
            alert("Ошибка HTTP: " + response.status);
        });
}

const deleteSeminar = async (id) => {
    // Имитация долгой загрузки
    await delay(3000);
    
    return fetch(`http://localhost:3000/seminars/${id}/`, {
        method: 'DELETE',
    })
}

export { getSeminars, deleteSeminar };