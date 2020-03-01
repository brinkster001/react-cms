import React from 'react';
import '../css/Home.scss';

class Home extends React.Component {
    render() {
      return (
        <div id='home'>
          <div className='page-header'>
                <h1 className='page-title'>Home</h1>
                <p className='page-description'>Page description</p>
            </div>  
        </div>
      )
    }
  }

export default Home;