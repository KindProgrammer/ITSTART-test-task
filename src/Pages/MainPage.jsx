import { useState, useEffect } from 'react';
import Seminar from '../Components/Seminar.jsx';
import { getSeminars } from '../api/seminars.js';
import { Container, Row, Spinner } from 'react-bootstrap';

const MainPage = () => {
    const [data, setData] = useState(null);
    console.log(data);
    useEffect(() => {
        const requestData = async () => {
            setData(await getSeminars());
        };

        requestData();
    }, []);

    let content;

    if (data === null) {
        content = 
            <div className='d-flex justify-content-center align-items-center pb-5'>
                <Spinner animation="border"/>
            </div>
    } else if (data.length === 0) {
        content =
            <Container>
                <h2>Семинаров не найдено</h2>
            </Container>
    } else {
        content = 
            <Container>{
                data.map((seminar) => 
                    <Seminar 
                        key={seminar.id}
                        id={seminar.id}
                        title={seminar.title}
                        description={seminar.description}
                        date={seminar.date}
                        time={seminar.time}
                        photo={seminar.photo}
                    />)
            }</Container>
    }

    return (
        <Container className='bg-light p-4 rounded'>
            <Row><h1 className='mb-5'>Семинары</h1></Row>
            {content}
        </Container>
    );
}

export default MainPage;