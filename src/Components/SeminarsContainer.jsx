import React, { useState, useEffect } from 'react';
import Seminar from './Seminar.jsx';

const SeminarsContainer = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const requestData = async () => {
            const response = await fetch('http://localhost:3000/seminars')
            .then(async (response) => {
                setData(await response.json());
            })
            .catch((e) => {
                alert("Ошибка HTTP: " + response.status);
            });
        };

          requestData();
    }, []);

    return (
        <>
            <h1>Семинары</h1>
            <div className='seminars-container'>
                { data.map((seminar) => 
                    <Seminar 
                        id={seminar.id}
                        title={seminar.title}
                        description={seminar.description}
                        date={seminar.date}
                        time={seminar.time}
                        photo={seminar.photo}
                    />
                )}
            </div>
        </>
    );
}

export default SeminarsContainer;