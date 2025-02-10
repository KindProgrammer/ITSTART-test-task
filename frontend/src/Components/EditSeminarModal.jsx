import { Modal, Button, Spinner } from "react-bootstrap";
import { editSeminar } from "../api/seminars.js";
import { Form } from "react-bootstrap";
import { useFormik } from 'formik';
import editFormSchema from "../validate.js";
import moment from "moment";
import { seminarsState } from "../state/seminarsState.js";
import { toast } from "react-toastify";
import { DATE_FORMAT, FORM_FIELD_DATE_FORMAT } from "../utils/date.js";
/**
 * Модальное окно для редактирования семинара.
 * В пропсы передается объект seminar, который содержит следующие поля: 
 * title - название семинара.
 * description - описание.
 * date - дата проведения.
 * time - время проведения.
 * В случае успешного редактирования всплывает оповещение, сообщающее об успешном обновлении семинара, 
 * в случае ошибки всплывает сообщение с текстом о том, что семинар не был обновлен.
*/
const EditSeminarModal = (props) => {
    const formik = useFormik({
        initialValues: { 
            title: props.seminar.title ?? '',
            description: props.seminar.description ?? '',
            date: props.seminar.date? moment(props.seminar.date, DATE_FORMAT).format(FORM_FIELD_DATE_FORMAT) : '',
            time: props.seminar.time ?? ''
        },
        validationSchema: editFormSchema, // Валидируем с помощью yup
        onSubmit: (values) => {
            const updatedSeminar = {
                title: values.title,
                description: values.description,
                date: moment(values.date).format(DATE_FORMAT),
                time: values.time,
            }
            editSeminar(props.seminar.id, updatedSeminar) // Делаем запрос на сервер для обновления
                .then(async () => {
                    seminarsState.updateSeminars(); // В случае удачи обновляем хранилище
                    toast.success('Семинар успешно обновлен', { theme: 'light' });
                })
                .catch(() => {
                    toast.error('Произошла ошибка, семинар не был обновлен!', { theme: 'light' }); // В случае неудачи оповещаем о ней пользователя
                })
                .finally(() => {
                    formik.setSubmitting(false);
                    props.closeCallback();
                });
            
        },
    });

    return (
        <Modal show>
            <Modal.Header>
                <Modal.Title>Редактировать</Modal.Title>
            </Modal.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Modal.Body>
                    <Form.Label className="form-label" htmlFor="title">Заголовок:</Form.Label>
                    <Form.Control 
                        className={formik.errors.title? 'is-invalid': ''}
                        type="text" 
                        id="title" 
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    {formik.errors.title? <p className="text-danger">{formik.errors.title}</p>: ''}

                    <Form.Label className="form-label" htmlFor="description">Описание семинара:</Form.Label>
                    <Form.Control 
                        className={formik.errors.description? 'is-invalid': ''}
                        as="textarea" 
                        id="description" 
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    {formik.errors.description? <p className="text-danger">{formik.errors.description}</p>: ''}

                    <Form.Label className="form-label" htmlFor="date">Дата:</Form.Label>
                    <Form.Control 
                        className={formik.errors.date? 'is-invalid': ''}
                        type="date" 
                        id="date" 
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    />
                    {formik.errors.date? <p className="text-danger">{formik.errors.date}</p>: ''}

                    <Form.Label className="form-label" htmlFor="time">Время:</Form.Label>
                    <Form.Control 
                        className={formik.errors.time? 'is-invalid': ''}
                        type="time" 
                        id="time" 
                        onChange={formik.handleChange}
                        value={formik.values.time}
                    />
                    {formik.errors.time? <p className="text-danger">{formik.errors.time}</p>: ''}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='w-25' variant="outline-dark" disabled={formik.isSubmitting} type="submit">
                        {formik.isSubmitting ? <Spinner as="span" animation="border" size="sm" /> : 'Сохранить'}
                    </Button>
                    <Button className='w-25' variant="outline-dark" disabled={formik.isSubmitting} onClick={props.closeCallback}>
                        Отмена
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default EditSeminarModal;