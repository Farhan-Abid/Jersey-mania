import React from 'react';
import './Jerseys.css';

const Jerseys = (props) => {
    const {name,picture,comment} = props.jerseys;
    return (
        <div>
            <div className="card-container">
            <div className="card">
        <div className="card-header">
          <img src="" alt="" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">{name}</span>
          <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
          <p>
            {comment}
          </p>
          <div className="user">
            <img src={picture} alt="" />
            <div className="user-info">
              <h5>Jerome Walton</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Jerseys;