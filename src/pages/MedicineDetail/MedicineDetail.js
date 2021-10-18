import React from 'react';
import { Link } from 'react-router-dom';
import './MedicineDetail.css'

const MedicineDetail = (props) => {
    const { name, company, price, img, detail } = props.detail;
    return (
        <div className="p-5 detail">
            <div className="p-1 p-lg-3">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className=" text-center">
                    <h5>{name}</h5>
                    <a className="text-decoration-none text-danger" href="/">{company}</a>
                    <h5 className="text-danger font-weight-bolder">৳{price}</h5>
                </div>
            </div>
            <div className="p-3">
                <h4>Learn more about {name} Medicine...</h4>
                <p>{detail}</p>
                <button className="btn btn-danger me-4"><Link className="text-white text-decoration-none" to="/home">Go back</Link></button>
                <button className="btn btn-danger">Buy now</button>
            </div>
        </div>
    );
};

export default MedicineDetail;