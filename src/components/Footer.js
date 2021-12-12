import React from 'react'
import { FaFacebook, FaLinkedinIn, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <div>
                            <p>231 Acme St.</p>
                            <h4>Houston, Tx</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} /> 1-324-553-249</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} /> contact@galaxy.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>
                        "Follow along and see how I built this space travel website in React JS. We will be using a couple react packages such as React Icons and React Router Dom V6 so we can have multiple pages in our React application. "
                    </p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
