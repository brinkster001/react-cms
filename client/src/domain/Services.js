import React from 'react';
import '../css/global.scss';
import '../css/Services.scss';
import { Link } from 'react-router-dom';

class Services extends React.Component {
  

  render() {
    return (
      <div id='services'>
        <h1 className='underlined'>Services</h1>
        <p className='page-description'>Page description of services</p>           
        <div className='row'>
          <div className='col-lg-3 service-card' activeClassName='active' >
            <h2 className='service-title'>Accounting</h2>
            <p className='service-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <Link to='/services' className='more'>More</Link>
          </div>
          <div className='col-lg-3 service-card'>
            <h2 className='service-title'>Logistic</h2>
            <p className='service-description'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to='/services' className='more'>More</Link>
          </div>
          <div className='col-lg-3 service-card'>
            <h2 className='service-title'>Transportation</h2>
            <p className='service-description'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Link to='/services' className='more'>More</Link>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Services;