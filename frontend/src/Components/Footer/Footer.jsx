import React from 'react'

const Footer = () => {
    return (
        <div className='footer' style={{
            paddingTop:"50px",
            paddingLeft: "60px",
            display: "flex",
            gap: "100px",
            background: "#000", color: '#fff'
        }}>
            <div>
                <h2 style={{marginBottom:"10px", lineHeight:"28px"}}>Abstract</h2>
                <p>Branches</p>
            </div>
            <div>
                <h2 style={{marginBottom:"10px", lineHeight:"28px"}}>Resources</h2>
                <p>Blog</p>
                <p>Help Center</p>
                <p>Release Notes</p>
                <p>Status</p>
            </div>
            <div>
                <h2 style={{marginBottom:"10px", lineHeight:"28px"}}>Commmunity</h2>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Dribbble</p>
                <p>Podcast</p>
            </div>
            <div>
                <h2 style={{marginBottom:"10px", lineHeight:"28px"}}>Company</h2>
                <p>About Us</p>
                <p>Careers</p>
                <p>Legal</p>
                <h4 style={{ marginTop: "40px" }}>Contact Us</h4>
                <p>info@abstract.com</p>
            </div>
            <div style={{ margin: "128px 40px 40px 20px" }}>
                <img src="https://cdn.dribbble.com/users/2834621/avatars/normal/c9c2c615fa4133141ecafb16156b769e.png?1543261924" alt=""
                    width="25px" style={{
                        marginRight: "10px", borderRadius: "10px",
                        border: "1.5px solid #fff", marginBottom: "10px"
                    }}
                />
                <p>©Copyright 2024</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer