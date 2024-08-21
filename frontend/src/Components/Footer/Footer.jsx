import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-part'>
                <h2>Abstract</h2>
                <p>Branches</p>
            </div>
            <div className='footer-part'>
                <h2>Resources</h2>
                <p>Blog</p>
                <p>Help Center</p>
                <p>Release Notes</p>
                <p>Status</p>
            </div>
            <div className='footer-part'>
                <h2>Commmunity</h2>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Dribbble</p>
                <p>Podcast</p>
            </div>
            <div className='footer-part'>
                <h2>Company</h2>
                <p>About Us</p>
                <p>Careers</p>
                <p>Legal</p>
                <h4>Contact Us</h4>
                <p>info@abstract.com</p>
            </div>
            <div className='footer-copyright'>
                <img src="https://cdn.dribbble.com/users/2834621/avatars/normal/c9c2c615fa4133141ecafb16156b769e.png?1543261924" alt="" />
                <p>©Copyright 2024</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer