import React, { Component } from 'react';
import {useRoutes} from 'hookrouter';
import logo from './logo.svg';
import './App.css';

const routes = {
    '/': () => <HomePage />,
    '/contact': () => <ContactPage />,
    '/information': () => <InformationPage />,
};


class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HomeSlice</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class ContactPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Contact</h2>
        </div>
      </div>
    );
  }
}

class InformationPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Information</h2>
        </div>
      </div>
    );
  }
}

const MyApp = () => {
    const routeResult = useRoutes(routes);
    
    return routeResult || <HomePage />;
}

export default MyApp;