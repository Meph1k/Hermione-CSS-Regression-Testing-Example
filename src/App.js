import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/skills" component={Skills} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
