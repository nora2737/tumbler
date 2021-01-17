import logo from './logo.svg';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Cart from './components/Cart'
import Products from './components/Proudect'
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Fetching from "./components/Fetching";
import Home from "./components/Home";

function App(){ 
 

  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Gallery">
            <Fetching />
          </Route>
          <Route exact path="/Services">
            <Services  />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
  }
 

export default App
