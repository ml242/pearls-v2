import React, { Component, Fragment } from 'react';
import { useRoutes } from 'hookrouter';
import './App.css';

const routes = {
    '/': () => <Home videoSrc='home.mp4' poster='home.jpg' />,
    '/stockists': () => <Stockist videoSrc='stockist.mp4' poster='stockist.jpg' linkUrl={'/'} />,
    '/information': () => <Information videoSrc='info.mp4' poster='info.jpg' linkUrl={'/'} />,
    '/about': () => <About videoSrc='about.mp4' poster='about.jpg' linkUrl={'/'} />,
};

const Video = props => (
  <Fragment>
    <div className='overlay' />
    <video autoPlay muted loop preload='auto' id="myVideo" poster={props.poster}>
      <source src={props.videoSrc} type="video/mp4" />
    </video>
  </Fragment>
);

const Back = props => (
  <div className='navbar'>
    <a href={props.linkUrl}>back</a>
  </div>
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
                <h2>PEARLS BEFORE&nbsp;
                  <span className='left-swine'>SWINE</span>
                </h2>
              </div>          
              <div className="right">
                <h2><span className='right-swine'>SWINE</span></h2>
                <h2 className='page-link'><a href='about'>About</a></h2>
                <h2 className='page-link'><a href='stockists'>Stockists</a></h2>
                <h2 className='page-link'><a href='information'>Information</a></h2>
              </div>
            </div>
              <div className='mobile'>
                <h2>PEARLS BEFORE SWINE</h2>
                <h2 className='page-link'><a href='about'>About</a></h2>
                <h2 className='page-link'><a href='stockists'>Stockists</a></h2>
                <h2 className='page-link'><a href='information'>Information</a></h2>
              </div>
          </div>
      </Fragment>
    );
  }
}

class Stockist extends Component {
  render() {
    const { videoSrc, linkUrl } = this.props;
    return (
      <Fragment>
        <Video videoSrc={videoSrc} />
        <Back linkUrl={linkUrl} />
        <div className='content'>
          <div className='content-inner'>
            <div className='stockist-container'>
              <h2 className='area'><span>U</span><span>K</span></h2>
              <h2 className='business-name'>
                <span>M</span>
                <span>A</span>
                <span>T</span>
                <span>C</span>
                <span>H</span>
                <span>E</span>
                <span>S</span>
                <span>F</span>
                <span>A</span>
                <span>S</span>
                <span>H</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
                <span>.</span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
              </h2>               
            </div>
            <div className='stockist-container'>
              <h2 className='area'>
                <span>N</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>H</span>

                <span>A</span>
                <span>M</span>
                <span>E</span>
                <span>R</span>
                <span>I</span>
                <span>C</span>
                <span>A</span>
              </h2>
              <h2 className='business-name'>
                <span>S</span>
                <span>S</span>
                <span>E</span>
                <span>N</span>
                <span>S</span>
                <span>E</span>
              </h2>
              <h2 className='business-name'>
                <span>K</span>
                <span>I</span>
                <span>T</span>
                <span>H</span>
              </h2>
              <h2 className='business-name'>
                <span>H</span>
                <span>L</span>
                <span>O</span>
                <span>R</span>
                <span>E</span>
                <span>N</span>
                <span>Z</span>
                <span>O</span>
              </h2>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

class Information extends Component {
  render() {
    const { videoSrc, linkUrl } = this.props;
    return (
      <Fragment>
        <Video videoSrc={videoSrc} />
        <Back linkUrl={linkUrl} />
        <div className='content'>
          <div className='content-inner'>
            <div className='stockist-container'>
              <h2 className='area'>
                <span>S</span>
                <span>A</span>
                <span>L</span>
                <span>E</span>
                <span>S</span>
              </h2>
              <div className='contact-details'>
                <a href='mailto:USER@PEARLSBEFORESWINE.CA'>
                  <h2>User</h2>
                  <h2>@</h2>
                  <h2>PEARLSBEFORE</h2>
                  <h2>SWINE.CA</h2>
                </a>
              </div>

              <h2 className='area'>
                <span>P</span>
                <span>R</span>
                <span>E</span>
                <span>S</span>
                <span>S</span>
              </h2>

              <div className='contact-details'>
                <a href='mailto:PRESS@PEARLSBEFORESWINE.CA'>
                  <h2>PRESS</h2>
                  <h2>@</h2>
                  <h2>PEARLSBEFORE</h2>
                  <h2>SWINE.CA</h2>
                </a>
              </div>  

              <h2 className='area'>
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>S</span>
              </h2>

              <div className='contact-details'>
                <a href='mailto:PROJECTS@PEARLSBEFORESWINE.CA'>
                  <h2>PROJECTS</h2>
                  <h2>@</h2>
                  <h2>PEARLSBEFORE</h2>
                  <h2>SWINE.CA</h2>
                </a>  
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

class About extends Component {
  render() {
    const { videoSrc, linkUrl } = this.props;
    return (
      <Fragment>
        <Video videoSrc={videoSrc} />
        <Back linkUrl={linkUrl} />
        <div className='content'>
          <div className='content-inner-about'>            
            Pearls Before Swine manifests via a counter-research model that explores defected precious metals and pearls. Purity is a ubiquitous facet of quantification within traditional industry standards of the fine jewellery sector. The current climate is a conglomerate of brands fabricating jewellery at mass. PBS stands as one of the few artisanal jewellery brands, handcrafting each piece from Vancouver, BC, using defunct apparatus present in the fields of science and corporate cosmetic dentistry.
          </div>
        </div>
      </Fragment>
    );
  }
}

const PBS = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <Home />;
};

export default PBS;