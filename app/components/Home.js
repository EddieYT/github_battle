import React from 'react';
import { Link } from 'react-router-dom';

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

export default Home;
