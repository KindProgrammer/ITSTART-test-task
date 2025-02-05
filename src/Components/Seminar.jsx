import React from 'react';
import { Button } from 'react-bootstrap';

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
        <div className='seminar-card'>
            <div className='seminar-date'>
                <p>{time}</p>
                <p>{date}</p>
            </div>
            <div className='seminar-info'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='buttons'>
                <Button className='bi bi-trash' onClick={deleteSeminar}></Button>
                <Button className='bi bi-pencil' onClick={editSeminar}></Button>
            </div>
        </div>
    );
}

export default Seminar;