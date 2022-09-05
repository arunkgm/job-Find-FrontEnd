import React from "react";
import {Link} from "react-router-dom"



function Navigation(){
    const Logout=()=>{
window.localStorage.clear("auth")
window.alert("Logged out Successfully")
    }
    return(
        
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
                        <Link class="nav-link active" to="/Home">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/Profile">PROFILE</Link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-left">
                <li class="nav-item">
                        <Link class="nav-link active" to="/Signup">SIGNUP</Link>
                    </li>
                <li class="nav-item">
                        <Link class="nav-link active" to="/Login">SIGNIN</Link>
                    </li>
                <li class="nav-item">
                        <Link class="nav-link active" to="/Login" onClick={Logout}>SIGNOUT</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/companyNAV">ADMIN</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}
export default Navigation;