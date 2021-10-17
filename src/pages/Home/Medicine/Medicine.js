import React from 'react';
import './Medicine.css'

const Medicine = (props) => {
    const { name, img, company, price } = props.medicine;
    return (
        <div className="medicine">
            <img className="img-fluid" src={img} alt="" />
            <div className="text p-3">
                <h5>{name}</h5>
                <a href="/"><em>{company}</em></a>
                <h5 className="price"><span>৳</span>{price}</h5>
                <button className="btn btn-danger">Details</button>
            </div>
        </div>
    );
};

export default Medicine;