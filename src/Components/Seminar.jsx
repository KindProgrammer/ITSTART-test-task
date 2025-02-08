import { useState } from 'react';
import { Container,Button, Col, Row } from 'react-bootstrap';
import DeleteSeminarModal from './DeleteSeminarModal.jsx';
import EditSeminarModal from './EditSeminarModal.jsx';

import TrashIcon from '../assets/trash.svg?react';
import PencilIcon from '../assets/pencil.svg?react';

/**
 * Карточка семинара.
 * Отображает информацию о семинаре и содержит кнопки для редактирования и удаления семинара.
 * 
 * @component
 * @example
 * const seminar = {
 *     "id": "9",
 *     "title": "Мастер-класс от Kosmoteros",
 *     "description": "Практический мастер-класс по использованию инновационных косметических средств.",
 *     "date": "17.02.2025",
 *     "time": "18:00",
 *     "photo": "https://picsum.photos/id/9/750/730"
 *   }
 * 
 * return (
 *   <Seminar
 *       key={seminar.id}
 *       id={seminar.id}
 *       title={seminar.title}
 *       description={seminar.description}
 *       date={seminar.date}
 *       time={seminar.time}
 *       photo={seminar.photo} 
 *    />
 * )
*/
const Seminar = (props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    return (
        <Container>
            {showDeleteModal ? <DeleteSeminarModal seminarId={props.id} seminarTitle={props.title} closeCallback={handleCloseDeleteModal} /> : ''}
            {showEditModal ? <EditSeminarModal seminar={props} closeCallback={handleCloseEditModal} /> : ''}
            <Row className='seminar-card justify-content-between mb-2 border-bottom'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <p className="fs-2 mb-0">{props.time ?? '??:??'}</p>
                    <p>{props.date ?? 'Unknown date'}</p>
                </Col>
                <Col className='d-flex flex-column justify-content-center' xs={8}>
                    <h4 className='text-start'>{props.title ?? 'Unknown title'}</h4>
                    <p className='text-start'>{props.description ?? 'Unknown description'}</p>
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                    <Button variant="outline-dark" onClick={handleShowDeleteModal}><TrashIcon /></Button>
                    <Button variant="outline-dark" onClick={handleShowEditModal} className='ms-1' ><PencilIcon /></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Seminar;