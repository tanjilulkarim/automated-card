import React from 'react';
import logo from '../../../images/logo.svg'
import "./dashboard.css"

const Dashboard = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light nav bg-primary ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="nav-brand" href="/">
                            <img src={logo} alt="" />
                        </a>


                        <ul class="navbar-nav mb-2 mb-lg-0 top-menu me-0">


                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="/">Live Feed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="/">POP Report</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Dashboard;