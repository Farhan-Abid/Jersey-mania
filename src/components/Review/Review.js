import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name,picture,comment,ratings} = props.jersey;

    return (
        <div className='jersey-individual-review'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{comment}</p>
            <h4>Ratings: {ratings}</h4>
        </div>
    );
};

export default Review;