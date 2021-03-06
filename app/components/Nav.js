import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink activeclass="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeclass="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeclass="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  )
}
