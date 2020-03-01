import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import './css/Nav.scss';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
    <Router>
      <div id='nav'>
        <ul>
          <li className='nav-link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-link'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='nav-link'>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li className='nav-link'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>     
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );


ReactDOM.render(routing, document.getElementById('root'));


