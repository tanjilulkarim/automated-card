import React from 'react';
import logo from '../../../images/download.svg'
import banner_img from '../../../images/robogradingBanner.png'

const Register = () => {
    return (
        <>
            <div className="login_page">
                <div className="login_left">
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
                                <p className='header_p'>Get accurate, fast and completely transparent grades for your <br /> cards, <a href="/">Learn More</a>.</p>
                            </div>
                        </div>
                        <div>
                            <img className="front-img" src={banner_img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="login_right">
                    <div className="login-text">
                        <p>Sign Up to AGS to Access Robograding
                            <br /> Robograding</p>

                        <form action="" className='logIn-form'>
                            <div className="main_form">
                                <div className='email'>
                                    <input type="text" class="form-control" id="name" placeholder="Full Name">
                                    </input>
                                </div>
                                <br />
                                <div className='email'>
                                    <input type="text" class="form-control" id="name" placeholder="Create Username">
                                    </input>
                                </div>
                                <br />
                                <div className='email'>
                                    <input type="email" class="form-control" id="name" placeholder="Email">
                                    </input>
                                </div>
                                <br />
                                <div className='password'>
                                    <input type="password" class="form-control" id="password" placeholder="Password"></input>
                                </div>
                                <br />
                                <div className='password'>
                                    <input type="password" class="form-control" id="password" placeholder=" Confirm Password"></input>
                                </div>
                            </div>
                            <button className='submit-btn'>Sign Up</button>
                            <br />


                        </form>

                        <div className="line_break-2">
                            <hr />
                        </div>
                        <p className='fs-6'>Have an account?</p>
                        <a className='SignUP' href="/">Sign In</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;