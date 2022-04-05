import React from 'react';
import { Link } from 'react-router-dom';
import useJerseys from '../../../Hooks/useJerseys';
import Jersey from '../../Jersey/Jersey';
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
                <img src="https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" alt="" />
                
            </div>
           
            </div>
            <div className="jersey-review-container">
                {
                    jerseys.map(jersey => <Jersey
                    key={jersey.id} 
                    jersey={jersey}
                    ></Jersey>).slice(0,3)
                }
                <br />
                <Link to="/reviews"><button>See All reviews</button></Link>
            </div>
        </div>
        
        
    );
};

export default JerseyHome;