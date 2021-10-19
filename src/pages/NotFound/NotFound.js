import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center m-5 p-5">
            <h5 className="text-danger">Error: 404 page not found</h5>
            <img className="mx-auto img-fluid" src="https://i.ibb.co/1qw0cHm/2488756.png" alt="" /><br />
            <button className="btn btn-danger m-3"><Link className="text-decoration-none text-white" to="/home">Home</Link></button>
        </div>
    );
};

export default NotFound;