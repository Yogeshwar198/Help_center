import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="https://cdn.dribbble.com/users/2834621/avatars/normal/c9c2c615fa4133141ecafb16156b769e.png?1543261924" alt="" />
            <div className='left'>
                Abstract <span></span> Help center
            </div>
            <div className='right'>
                <button>Submit a request</button>
            </div>
        </div>
    )
}

export default Navbar