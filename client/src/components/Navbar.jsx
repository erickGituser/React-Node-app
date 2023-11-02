import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sNav from './Navbar.module.css';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className={sNav.Home}><FaHome size='1.3rem'/> Home</Link>
            <ul>
                <li>
                    <NavLink to="/Books">eBooks</NavLink>
                </li>
                <li>
                    <NavLink to="/Store">Store</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;