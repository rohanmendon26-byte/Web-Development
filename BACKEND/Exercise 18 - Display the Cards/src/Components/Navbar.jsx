import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/" className="navbar-logo">
                        MyApp
                    </a>
                    <ul className="navbar-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
