import React from "react";
import {Link} from "react-router-dom"



function ComNavigation(){
    const Logout=()=>{
        window.localStorage.clear("auth")
        window.alert("Logged out Successfully")
            }
    return(
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="">🅹🅾🅱 🅵🅸🅽🅳 </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/companysign">SIGNUP</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/companylogin">LOGIN</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/PostJob">POSTJOB</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/cmpprofile" >SEARCH EMPLOYEE</Link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-left">
                <li class="nav-item">
                        <Link class="nav-link active" to="/Login" onClick={Logout}>SIGNOUT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </>
    )
}

export default ComNavigation;