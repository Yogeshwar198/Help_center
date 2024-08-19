import React, { useState } from 'react';


const Main = ({ setSearchQuery }) => {

    return (
        <div className='main' style={{
            height: "27rem",
            background: "#C6FCFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1 style={{ fontSize: "50px" }}>How can we help?</h1>
            <input type="text"
                placeholder='Search'
                onChange={(e)=>setSearchQuery(e.target.value.toLowerCase())}
                style={{
                    padding: "20px 400px 20px 10px",
                    margin: "20px",
                    outline: "none",
                }} />
            <span style={{
                position: "absolute", right: "22rem",
                top: "18.5rem"
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
            </span>
        </div>
    )
}

export default Main