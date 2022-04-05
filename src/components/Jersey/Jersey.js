import React from 'react';
import './Jersey.css';

const Jersey = (props) => {
    const {name,picture,comment,ratings} = props.jersey;
    return (
        <div className='jersey'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{comment}</p>
            <h4>Ratings : {ratings}</h4>
        </div>
    );
};

export default Jersey;