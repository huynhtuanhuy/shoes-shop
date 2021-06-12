import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Routers from './routers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routers />
        <Footer />
      </Router>
    )
  }
}
