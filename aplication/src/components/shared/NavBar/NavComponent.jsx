import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </li>
                <li className={location.pathname === '/profile' ? 'active' : ''}>
                    <Link to="/profile">Profile</Link>
                </li>
                <li className={location.pathname === '/dashboard' ? 'active' : ''}>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;
