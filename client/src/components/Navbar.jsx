import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <ul>
                <li>
                    <Link to="/Wellcome">Wellcome</Link>
                </li>
                <li>
                    <Link to="/Ebook">eBooks</Link>
                </li>
                <li>
                    <Link to="/Store">Store</Link>
                </li>
                <li>
                    <Link to="/Contacts">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;