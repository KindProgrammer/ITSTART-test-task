import delay from "../utils/delay";

const SEMINARS_BASE_URL = import.meta.env.VITE_SERVER_ADDR;

/**
 * Получить от сервера список семинаров
 * @returns список семинаров
 */
const getSeminars = async () => {
    // Имитация долгой загрузки
    await delay(2000);

    return fetch(`${SEMINARS_BASE_URL}/seminars`)
        .then(async (response) => {
            return response.json();
        })
}

/**
 * Запрос на сервер для удаления семинара
 * @param {*} id id семинара, который требуется удалить
 */
const deleteSeminar = async (id) => {
    // Имитация долгой загрузки
    await delay(2000);
    
    return fetch(`${SEMINARS_BASE_URL}/seminars/${id}/`, {
        method: 'DELETE',
    })
}

/**
 * Запрос на сервер для обновления семинара
 * @param {*} id id семинара, который надо обновить
 * @param {*} seminar новые данные семинара
 */
const editSeminar = async (id, seminar) => {
    // Имитация долгой загрузки
    await delay(2000);

    return fetch(`${SEMINARS_BASE_URL}/seminars/${id}/`, {
        method: 'PUT',
        body: JSON.stringify(seminar)
    })
}

export { getSeminars, deleteSeminar, editSeminar };