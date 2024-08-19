import React from 'react'
const Navbar = () => {
    return (
        <div className='navbar' style={{
            background: "#000",
            height: "60px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: 'center'
        }}>
            <img src="https://cdn.dribbble.com/users/2834621/avatars/normal/c9c2c615fa4133141ecafb16156b769e.png?1543261924" alt=""
                width="25px" style={{ marginRight: "10px", borderRadius: "10px", border: "1.5px solid #fff" }}
            />
            <div className='left' style={{
                color: "#fff",
                marginLeft: "-465px",
            }}>
                Abstract <span style={{
                    border: "1px solid #fff",
                    height: "500px",
                    marginRight: '8px',
                    marginLeft: "6px"
                }}></span> Help center
            </div>
            <div className='right'>
                <button style={{
                    border: "1px solid gray",
                    backgroundColor: "#000",
                    borderRadius: "5px",
                    padding: "6px 10px",
                    color: "#fff",
                    cursor: "pointer",
                }}>Submit a request</button>
            </div>
        </div>
    )
}

export default Navbar