import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" ><h1 className="color">Port<span className="folio">folio</span></h1></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/"><span className="font-weight-bolder">Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/about"><span className="font-weight-bolder">About</span></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link " to="/contact"><span className="font-weight-bolder">Contact</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login"><span className="font-weight-bolder">Login</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register"><span className="font-weight-bolder">Registration</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
