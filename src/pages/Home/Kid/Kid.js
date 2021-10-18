import React from 'react';
import './Kid.css'

const Kid = (props) => {
    const{name, img, company, catagory, price} = props.kid;
    return (
        <div className="kid">
            <img className="img-fluid" src={img} alt="" />
            <h5>{name}</h5>
            <p><small>{catagory}</small></p>
            <a href="/">{company}</a>
            <h4> ৳{price}</h4>
        </div>
    );
};

export default Kid;