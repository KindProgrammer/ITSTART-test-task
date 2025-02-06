import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import trashIcon from '../assets/trash.svg';
import pencilIcon from '../assets/pencil.svg';

const Seminar = (props) => {
    const {
        id,
        title,
        description,
        date,
        time,
        photo
    } = props

    const deleteSeminar = () => {

    }

    const editSeminar = () => {

    }

    return (
        <Row className='seminar-card d-flex flex-row justify-content-between mb-2 border-bottom'>
            <Col className='d-flex flex-column justify-content-center'>
                <p className="fs-2 mb-0">{time}</p>
                <p>{date}</p>
            </Col>
            <Col className='d-flex flex-column justify-content-center' xs={8}>
                <h4 className='text-start'>{title}</h4>
                <p className='text-start'>{description}</p>
            </Col>
            <Col className='d-flex align-items-center justify-content-center'>
                <Button variant="outline-dark" onClick={deleteSeminar}><img src={trashIcon} alt="Удалить"></img></Button>
                <Button variant="outline-dark" className='ms-1' onClick={editSeminar}><img src={pencilIcon} alt="Редактировать"></img></Button>
            </Col>
        </Row>
    );
}

export default Seminar;