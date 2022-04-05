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
            <h1>Your Desired Jersey</h1>
            <h1>Is our main priority</h1> <br/>
            <p>Looking to buy some awesome jersey with premium category and design?
            No Problem. We are here at your service with best possible price and design.We are here to provide you the best design of some popular club and country's jersey so that you dont feel a bit hesitate to choose the best product for you.
            </p>

            </div>
            <div className="jersey-pic-container">
                <img src="https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" alt="" />
                
            </div>
           
            </div>
            <h1>Customer Reviews</h1>
            <div className="jersey-review-container">
                {
                    jerseys.map(jersey => <Jersey
                    key={jersey.id} 
                    jersey={jersey}
                    ></Jersey>).slice(0,3)
                }
                
            </div>
            <div className='see-all-button'>
                <Link to="/reviews"><button class="button">See All Reviews!</button></Link>
                </div>
        </div>
        
        
    );
};

export default JerseyHome;