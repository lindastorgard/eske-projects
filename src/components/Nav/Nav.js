import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">
                Eske
            </a>
            <div>
                <ul>
                    <li>
                        <Link to={'/portfolio'}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to={'/tjenster'}>Tjenster</Link>
                    </li>
                    <li>
                        <Link to={'/omoss'}>Om Oss</Link>
                    </li>
                    <li>
                        <Link to={'/video'}>Video</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
