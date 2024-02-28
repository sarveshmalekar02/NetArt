import React from 'react';
import logo from "./image/logo.png";

function Navbar() {
    return (
        <div className='flex justify-center'>
            <img src={logo} alt='logo' style={{ maxWidth: '30vw', height: 'auto' }} />
        </div>
    );
}

export default Navbar;
