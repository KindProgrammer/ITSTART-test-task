import { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { deleteSeminar } from "../api/seminars.js";
import { seminarsState } from "../state/seminarsState.js";
import { toast } from "react-toastify";

/**
 * Модальное окно для удаления семинара.
 * В пропсы передается название (seminarTitle) и id (seminarId) семинара, который нужно удалить
 * В случае успешного удаления всплывает оповещение, сообщающее об успешном удалении, 
 * в случае ошибки всплывает сообщение с текстом о том, что семинар не был удален
*/
const DeleteSeminarModal = (props) => {
    const [isDeleting, setDeleting] = useState(false);
    const handelDeleteSeminar = async () => {
        setDeleting(true); // Выключаем кнопки
        deleteSeminar(props.seminarId) // Делаем запрос на сервер для удаления семинара
            .then(() => {
                seminarsState.updateSeminars(); // В случае удачи обновляем хранилище
                toast.success(`Семинар ${ props.seminarTitle ? `"${props.seminarTitle}"`: "без имени" } успешно удален`, { theme: 'light' });
            })
            .catch(() => {
                toast.error('Произошла ошибка, семинар не был удален!', { theme: 'light' }); // В случае неудачи оповещаем о ней пользователя
            })
            .finally(() => {
                props.closeCallback(); // Закрываем модальное окно
            });
    }

    return (
        <Modal show>
            <Modal.Header>
                <Modal.Title>Удаление семинара</Modal.Title>
            </Modal.Header>
  
            <Modal.Body>
                <p>Удалить семинар <strong>&quot;{props.seminarTitle}&quot;</strong>?</p>
                <p>Отменить данное действие будет невозможно</p>
            </Modal.Body>
  
            <Modal.Footer>
                <Button className='w-25' variant="outline-danger" disabled={isDeleting} onClick={handelDeleteSeminar}>{isDeleting ? <Spinner as="span" animation="border" size="sm" /> : 'Удалить'}</Button>
                <Button className='w-25' variant="outline-dark" disabled={isDeleting} onClick={props.closeCallback}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteSeminarModal;