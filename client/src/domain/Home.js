import React from 'react';
import '../css/global.scss';
import '../css/Home.scss';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
    render() {
      return (
        <div id='home'>
            <h1>BUSINESS PRESENTATION </h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <br></br>
            <p>
              <Button variant="success">Learn more</Button>
            </p>
        </div>
      )
    }
  }

export default Home;