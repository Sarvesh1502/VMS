import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to= '/stddash' className={({isActive}) => isActive ? "active-link" : ""}>
                DASHBOARD
                </NavLink>
            </li>

            <li>
                <NavLink to= '/stdevents'  className={({isActive}) => isActive ? "active-link" : ""}>
                LIVE EVENTS
                </NavLink>
            </li>

            <li>
                <NavLink to= '/stdleaderboard' className={({isActive}) => isActive ? "active-link" : ""}>
                LEADERBOARD
                </NavLink>
            </li>
        </ul>
    </div>
  );
}

export default Navbar;
