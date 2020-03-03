import React from 'react';
import '../css/global.scss';
import '../css/Portfolio.scss';

class Portfolio extends React.Component {
    render() {
      return (
        <div id='portfolio'>
          <h1 className='underlined'>Portfolio</h1>
          <p className='page-description'>Page description of services</p>         
          <div className='row'>
            <div className='col-lg-3 portfolio-card'>
              <h2 className='portfolio-title'>Acme Inc</h2>
              <p className='portfolio-description'>Auctor neque vitae tempus quam pellentesque.</p>
            </div>
            <div className='col-lg-3 portfolio-card'>
              <h2 className='portfolio-title'>Digital Scope</h2>
              <p className='portfolio-description'> Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. </p>
            </div>
            <div className='col-lg-3 portfolio-card'>
              <h2 className='portfolio-title'>BlueSpine</h2>
              <p className='portfolio-description'>In pellentesque massa placerat duis ultricies lacus sed.</p>
            </div>
            <div className='col-lg-3 portfolio-card'>
              <h2 className='portfolio-title'>Woolrus</h2>
              <p className='portfolio-description'>Tempus iaculis urna id volutpat lacus laoreet non.</p>
            </div>
            <div className='col-lg-3 portfolio-card'>
              <h2 className='portfolio-title'>Trueware  </h2>
              <p className='portfolio-description'>Porta non pulvinar neque laoreet suspendisse interdum consectetur.</p>
            </div>
            <div className='col-lg-3 portfolio-card'>
              <h2 className='portfolio-title'>Synectical</h2>
              <p className='portfolio-description'>Commodo quis imperdiet massa tincidunt nunc.</p>
            </div>
          </div>
        </div>
      )
    }
  }

export default Portfolio;