var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Battle Your Friends on GitHub</h1>
        <Link className="button" to="/battle">
          Go Battle!!
        </Link>
      </div>
    )
  }
}

module.exports = Home;
