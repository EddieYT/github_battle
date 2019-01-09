var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink activeClass="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClass="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClass="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
