import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/">Go to Home Page</NavLink>
        <NavLink to="/create">Go to Add expense Page</NavLink>
        <NavLink to="/edit">Go to edit Page</NavLink>
        <NavLink to="/help">Go to help Page</NavLink>
    </header>
);

export default Header;