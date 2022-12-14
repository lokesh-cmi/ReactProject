import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav >
            <ul>
                <Link to = '/'>
                    <li>Home</li>
                </Link>
                <Link to = '/About'>
                    <li>About</li>
                </Link>
                <Link to = '/TicTacToe'>
                    <li>TicTacToe</li>
                </Link>
            </ul>
        </nav>
    );
}
export default Nav;