import { Modal, Button, Spinner } from "react-bootstrap";
import { editSeminar } from "../api/seminars.js";
import { Form } from "react-bootstrap";
import { useFormik } from 'formik';
import editFormSchema from "../validate.js";
import moment from "moment";

const FORM_FIELD_DATE_FORMAT = 'yyyy-MM-DD';
const DATE_FORMAT = 'DD.MM.yyyy';

const EditSeminarModal = (props) => {
    const formik = useFormik({
        initialValues: { 
            title: props.seminar.title ?? '',
            description: props.seminar.description ?? '',
            date: props.seminar.date? moment(props.seminar.date, DATE_FORMAT).format(FORM_FIELD_DATE_FORMAT) : '',
            time: props.seminar.time ?? ''
        },
        validationSchema: editFormSchema,
        onSubmit: (values) => {
            const updatedSeminar = {
                title: values.title,
                description: values.description,
                date: moment(values.date).format(DATE_FORMAT),
                time: values.time,
            }
            editSeminar(props.seminar.id, updatedSeminar).finally(() => {
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