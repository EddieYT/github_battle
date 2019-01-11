var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
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

module.exports = Nav;
