import { useEffect } from 'react';
import Seminar from '../Components/Seminar.jsx';
import { Container, Row, Spinner } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { seminarsState } from '../state/seminarsState.js';

/** 
 * Главная страница.
 * Отображает список семинаров
*/
const MainPage = observer(() => {
    const { seminars, isLoading, isError } = seminarsState;

    useEffect(() => {
        const requestData = async () => {
            seminarsState.updateSeminars();
        };

        requestData();
    }, []);

    let content;

    if (isLoading) {
        content = 
            <div className='d-flex justify-content-center align-items-center pb-5'>
                <Spinner animation="border"/>
            </div>
    } else if (isError) {
        content = 
            <Container>
                <p>Во время загрузки семинаров произошла ошибка</p>
            </Container>

    } else if (seminars.length === 0) {
        content =
            <Container>
                <h2>Семинаров не найдено</h2>
            </Container>
    } else {
        content = 
            <Container>{
                seminars.map((seminar) => 
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
});

export default MainPage;