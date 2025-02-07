import delay from "../utils/delay";

const getSeminars = async () => {
    // Имитация долгой загрузки
    await delay(2000);

    return fetch('http://localhost:3000/seminars')
        .then(async (response) => {
            return response.json();
        })
        .catch((e) => {
            alert("Ошибка HTTP: " + e.status);
        });
}

const deleteSeminar = async (id) => {
    // Имитация долгой загрузки
    await delay(2000);
    
    return fetch(`http://localhost:3000/seminars/${id}/`, {
        method: 'DELETE',
    })
}

const editSeminar = async (id, seminar) => {
    // Имитация долгой загрузки
    await delay(2000);

    return fetch(`http://localhost:3000/seminars/${id}/`, {
        method: 'PUT',
        body: JSON.stringify(seminar)
    })
}

export { getSeminars, deleteSeminar, editSeminar };