import React from 'react';
import './OnlineDoctor.css'

const OnlineDoctor = () => {
    return (
        <div className="m-5 doctor">
            <div>
                <img className="img-fluid" src="https://i.ibb.co/x26KPt8/contact-us.png" alt="" />
            </div>
            <div>
                <button className="btn btn-success fs-5">Call: 01254685445</button>
            </div>
        </div>
    );
};

export default OnlineDoctor;