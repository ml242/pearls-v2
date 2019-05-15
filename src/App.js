import React, { Component, Fragment } from 'react';
import { useRoutes } from 'hookrouter';
import './App.css';

const routes = {
    '/': () => <Home videoSrc={'home.mp4'} />,
    '/stockists': () => <Stockist videoSrc={'stockist.mp4'} />,
    '/information': () => <Information videoSrc={'info.mp4'} />,
    '/about': () => <About videoSrc={'about.mp4'} />,
};


class Home extends Component {
  render() {
    const { videoSrc } = this.props;
    return (
      <Fragment>
        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="App">
          <div className="App-header">
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Fragment>
    );
  }
}

class Stockist extends Component {
  render() {
    const { videoSrc } = this.props;
    return (
      <Fragment>
        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="App">
          <div className="App-header">
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Fragment>
    );
  }
}

class Information extends Component {
  render() {
    const { videoSrc } = this.props;
    return (
      <Fragment>
        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="App">
          <div className="App-header">
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Fragment>
    );
  }
}

class About extends Component {
  render() {
    const { videoSrc } = this.props;
    return (
       <Fragment>
        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="App">
          <div className="App-header">
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Fragment>
    );
  }
}

const MyApp = () => {
    const routeResult = useRoutes(routes);
    
    return routeResult || <Home />;
}

export default MyApp;