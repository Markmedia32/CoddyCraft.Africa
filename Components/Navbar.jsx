import {Link } from 'react-router-dom';
function Navbar(){
    return (
        <nav className='navbar'>
            <h1 className='logo'>Coddy Craft Africa</h1>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;