import React from 'react';
import { Link } from 'react-router-dom';
import './Medicine.css'

const Medicine = (props) => {
    const { name, img, company, price, id } = props.medicine;
    return (
        <div className="medicine">
            <img className="img-fluid" src={img} alt="" />
            <div className="text p-3">
                <h5>{name}</h5>
                <a href="/"><em>{company}</em></a>
                <h5 className="price"><span>৳</span>{price}</h5>
                <button className="btn btn-danger"><Link className="text-white" to={`/home/${id}`}>Details</Link></button>
            </div>
        </div>
    );
};

export default Medicine;