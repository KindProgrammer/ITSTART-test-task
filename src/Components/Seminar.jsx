import React, { useState } from 'react';
import { Container,Button, Col, Row } from 'react-bootstrap';
import DeleteSeminarModal from './DeleteSeminarModal.jsx';

import trashIcon from '../assets/trash.svg';
import pencilIcon from '../assets/pencil.svg';

const Seminar = (props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    return (
        <Container>
            {showDeleteModal ? <DeleteSeminarModal seminarId={props.id} seminarTitle={props.title} closeCallback={handleCloseDeleteModal} /> : ''}
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
                    <Button variant="outline-dark" onClick={handleShowDeleteModal}><img src={trashIcon} alt="Удалить"></img></Button>
                    <Button variant="outline-dark" className='ms-1' ><img src={pencilIcon} alt="Редактировать"></img></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Seminar;