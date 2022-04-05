import React from 'react';
import useJerseys from '../../../Hooks/useJerseys';
import './JerseyHome.css';

const JerseyHome = () => {
    const [jerseys,setJerseys] = useJerseys();
    
    return (
        <div>
            <div className="jersey-container">
            <div className="jersey-text-container">
            <h1>Your Desired Jersey</h1> <br />
            <h1>Is our main priority</h1> <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio labore officia non esse. Minus iure veniam voluptates quisquam! Veritatis corrupti eius omnis facere nam sed voluptatum quia! Dolorum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam libero, explicabo necessitatibus quia laboriosam labore vitae ex praesentium fugit voluptatum repudiandae sequi unde? Cumque, earum necessitatibus! Nostrum, dolorem. Quaerat?</p>

            </div>
            <div className="jersey-pic-container">
                
                
            </div>
           
            </div>
            <div className="jersey-review-container">
                <h2>reviews</h2>
            </div>
        </div>
        
        
    );
};

export default JerseyHome;