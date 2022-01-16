import React from 'react';
import './SignUp.css';
import logo from '../../../images/download.svg'
import banner_img from '../../../images/robogradingBanner.png'

const SignUp = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 ">
                        <div className="brand">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="line_break">
                                <hr />
                            </div>
                            <div className="headline-section text-white">
                                <div className="">
                                    <h1 className='header-text'>Automated Card <br /> Grading</h1>
                                    <p className='header-p'>Get accurate, fast and completely transparent grades for your <br /> cards, Learn More.</p>
                                </div>
                            </div>
                            <div>
                                <img className="front-img" src={banner_img} alt="" />
                            </div>
                        </div>

                    </div>
                    {/* login form  */}
                    <div className="col-lg-6 col-sm-12">
                        <div className="login-text text-white">
                            <h2>Log In to Your AGS Account to Access Robograding</h2>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default SignUp;