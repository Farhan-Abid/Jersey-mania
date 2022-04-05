import React, { useEffect, useState } from 'react';
import Review from '../../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [jerseys,setJerseys] = useState([]);
    useEffect( () => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setJerseys(data));

    }, []);
    return (
        <div className='jersey-reviews'>
            <h2>See What our Customer Says...</h2>
            <br />
            {
                    jerseys.map(jersey => <Review 
                    key={jersey.id}
                    jersey={jersey}
                    ></Review>)
                }
        </div>
    );
};

export default Reviews;