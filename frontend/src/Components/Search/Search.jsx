import React, { useState } from 'react';
import './Search.css';

const Main = ({ setSearchQuery }) => {

    return (
        <div className='search'>
            <h1>How can we help?</h1>
            <input type="text"
                placeholder='Search'
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
            </span>
        </div>
    )
}

export default Main