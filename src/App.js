import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './containers/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Home from './components/Home';
import Auth from './Auth/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Route
            exact
            path="/"
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={props => <Profile auth={this.auth} {...props} />}
          />

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
