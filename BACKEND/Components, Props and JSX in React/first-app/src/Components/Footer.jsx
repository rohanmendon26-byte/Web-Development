import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-container">

                    <div class="footer-section">
                        <h3>MyWebsite</h3>
                        <p>Simple, clean and modern website design.</p>
                    </div>

                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4>Contact</h4>
                        <p>Email: example@mail.com</p>
                        <p>Phone: +91 98765 43210</p>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p>© 2026 MyWebsite | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
