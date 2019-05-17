import React, { Component, Fragment } from 'react';
import { useRoutes } from 'hookrouter';
import './App.css';

const routes = {
    '/': () => <Home videoSrc={'home.mp4'} />,
    '/stockists': () => <Stockist videoSrc={'stockist.mp4'} />,
    '/information': () => <Information videoSrc={'info.mp4'} />,
    '/about': () => <About videoSrc={'about.mp4'} />,
};

const Video = props => (
  <video autoPlay muted loop id="myVideo">
    <source src={props.videoSrc} type="video/mp4" />
  </video>
);


class Home extends Component {
  render() {
    const { videoSrc } = this.props;
    return (
      <Fragment>
        <Video videoSrc={videoSrc} />
          <div className='content'>
            <div className='inner'>
              <div className="left">
                <img src='pb.png' alt='logo-left' />
              </div>          
              <div className="right">
                <img src='swine.png' alt='logo-right' />
                <h2>About</h2>
                <h2>Stockists</h2>
                <h2>Information</h2>
              </div>
            </div>
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
        <Video videoSrc={videoSrc} />
        <div className="App">
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
        <Video videoSrc={videoSrc} />
        <div className="App">
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