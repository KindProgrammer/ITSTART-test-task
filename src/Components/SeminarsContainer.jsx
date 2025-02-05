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
                { data.map((seminar) => {
                    const {         
                        id,
                        title,
                        description,
                        date,
                        time,
                        photo} = seminar
                    return(
                    <Seminar 
                        id={id}
                        title={title}
                        description={description}
                        date={date}
                        time={time}
                        photo={photo}
                    />
                    );
                }) }
            </div>
        </>
    );
}

export default SeminarsContainer;