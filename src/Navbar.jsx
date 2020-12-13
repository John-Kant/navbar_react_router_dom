import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg px-3" id="navBar">
                <Link to="/" className="navbar-brand">
                    <h4>LOGO</h4>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
                    <span className="navbar-icon">
                        <FaBars />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="myNav">
                    <ul className="navbar-nav mx-auto">
                        <Link to="/" className="nav-item active">
                            <h1 className="nav-link">home</h1>
                        </Link>
                        <Link to="/about" className="nav-item ">
                            <h1 className="nav-link">about</h1>
                        </Link>
                        <Link to="/portfolio" className="nav-item ">
                            <h1 className="nav-link">portfolio</h1>
                        </Link>
                        <Link to="/contact" className="nav-item ">
                            <h1 className="nav-link">contact</h1>
                        </Link>
                    </ul>
                    {/* social icons */}
                    <div className="nav-icons d-none d-lg-block">
                        <Link to="#" className="nav-icon">
                            <FaFacebook/>
                        </Link>
                        <Link to="#" className="nav-icon">
                            <FaTwitter />
                        </Link>
                        <Link to="#" className="nav-icon">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar


            
            

