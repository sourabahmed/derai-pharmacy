import React from 'react';

const Footer = () => {
    return (
        <div className="overflow-hidden">
            <div className=" row bg-light border">
                <div className=" col-sm-12 col-lg-7 p-3">
                    <h4 className="text-center p-3">Payments Gateway</h4>
                    <img className="img-fluid bg-white" src="https://i.ibb.co/89scZKL/ssl-Commerz-images.png" alt="" />
                </div>
                <div className=" col-sm-12 col-lg-5 p-4">
                    <h4 className="text-center p-3">Connect with us</h4>
                    <div className="">
                        <a href="/"><i className="fab fa-facebook-square fs-1"></i></a>
                        <a href="/"><i className="fab fa-instagram-square fs-1 m-4"></i></a>
                        <a href="/"><i className="fab fa-twitter-square fs-1"></i></a>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-danger" type="button" id="button-addon2">Subscribe</button>
                        <p className="m-5 text-secondary">We ensure that our product and service is high quality.</p>
                    </div>
                </div>
            </div>
            <hr />
            <h5 className="ps-5 pb-4">&copy;by derai pharmacy</h5>
        </div>
    );
};

export default Footer;