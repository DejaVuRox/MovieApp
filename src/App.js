import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { HashRouter as Router, Route } from "react-router-dom";
import SingleMovie from './components/movie/SingleMovie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/movie/:id" component={SingleMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
