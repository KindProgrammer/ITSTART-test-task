import React, { useState, useEffect, useId } from 'react';
import Seminar from '../Components/Seminar.jsx';
import { getSeminars } from '../api/seminars.js';
import { Container, Row } from 'react-bootstrap';

const MainPage = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const requestData = async () => {
            setData(await getSeminars());
        };

        requestData();
    }, []);

    return (
        <Container className='bg-light p-4 rounded'>
            <Row><h1 className='mb-4'>Семинары</h1></Row>
            <div>
                { data.map((seminar) => 
                    <Seminar 
                        key={seminar.id}
                        id={seminar.id}
                        title={seminar.title}
                        description={seminar.description}
                        date={seminar.date}
                        time={seminar.time}
                        photo={seminar.photo}
                    />
                )}
            </div>
        </Container>
    );
}

export default MainPage;