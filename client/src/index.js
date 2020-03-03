import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import './css/Nav.scss';
import Home from './domain/Home';
import Services from './domain/Services';
import Portfolio from './domain/Portfolio';
import Contact from './domain/Contact';

import Cart from './cart/Cart';
import Enquire from './cart/Enquire';
import Products from './products/Products';
import Product from './products/Product';


import NotFound from './domain/NotFound';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const routing = (
    <Router>
      <Navbar bg="light" expand="lg" id='navbar'>
        <Navbar.Brand href="/">site-config</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/services" className='nav-link'>Services</Link>
            <Link to="/portfolio" className='nav-link'>Portfolio</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
            <Link to="/cart/enquire" className='nav-link nav-enquire'>ENQUIRE</Link>

            <Link to="/cart" className='nav-link'>Cart</Link>
            <Link to="/products" className='nav-link'>Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/cart/enquire' component={Enquire} />
        <Route exact path='/products' component={Products} />
        <Route path='/products' component={Product} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );


ReactDOM.render(routing, document.getElementById('root'));


