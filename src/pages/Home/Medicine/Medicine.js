import React from 'react';
import { Link } from 'react-router-dom';
import './Medicine.css'

const Medicine = (props) => {
    const { name, img, company, price, id } = props.medicine;
    const url = `/home/${id}`
    return (
        <div className="medicine">
            <img className="img-fluid" src={img} alt="" />
            <div className="text p-3">
                <h5>{name}</h5>
                <a href="/"><em>{company}</em></a>
                <h5 className="price"><span>৳</span>{price}</h5>
                <Link className="text-dark" to={url}>Details</Link>
            </div>
        </div>
    );
};

export default Medicine;