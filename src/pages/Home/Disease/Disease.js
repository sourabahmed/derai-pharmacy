import React from 'react';
import './Disease.css'

const Disease = (props) => {
    const {img, name} = props.disease;
    return (
        <div className="disease">
            <img className="img-fluid" src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Disease;