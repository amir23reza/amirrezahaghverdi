import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBView,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBMask,
  MDBBtn
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Link, Element
} from 'react-scroll';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="myNavBar" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand>
                <img src={require('../images/logo.png')} className="fluid logo_img" alt="logo" />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <Link to="home" spy={true} smooth={true} duration={1200}>
                    <MDBNavItem>
                      <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                  </Link>
                  <Link to="soFar" spy={true} smooth={true} duration={1200}>
                    <MDBNavItem>
                      <MDBNavLink to="#">About Me</MDBNavLink>
                    </MDBNavItem>
                  </Link>
                  <Link to="portfolio" spy={true} smooth={true} duration={1200}>
                    <MDBNavItem>
                      <MDBNavLink to="#">Portfolio</MDBNavLink>
                    </MDBNavItem>
                  </Link>
                  <Link to="skills" spy={true} smooth={true} duration={1200}>
                    <MDBNavItem>
                      <MDBNavLink to="#">Skills</MDBNavLink>
                    </MDBNavItem>
                  </Link>
                  <Link to="considerations" spy={true} smooth={true} duration={1200}>
                    <MDBNavItem>
                      <MDBNavLink to="#">Considerations</MDBNavLink>
                    </MDBNavItem>
                  </Link>
                  <MDBNavItem onClick={() => { window.open("mailto:ahaghver@uwo.ca") }}>
                    <MDBNavLink to="#">Contact Me</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={() => { window.open("https://www.linkedin.com/in/amir-reza-haghverdi/") }}>
                    <MDBNavLink to="#"><i class="fab fa-linkedin"></i></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={() => { window.open("https://twitter.com/AmirrezaHagh") }}>
                    <MDBNavLink to="#"><i class="fab fa-twitter"></i></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <Element name="home">
            <MDBView src={require('../images/about.jpg')}>
              <MDBMask overlay="my_overLay" className="flex-center flex-column text-white text-center aboutContainer">
                <div className="aboutInfoContainer">
                  <h2>Hello & Welcome</h2>
                  <h1>I'm Amir Reza Haghverdi</h1>
                  <br />
                  <MDBBtn className="cvBtn" outline color="white" href="./CV_Amirreza_Haghverdi.pdf" target="_blank">
                    Download CV
                  </MDBBtn>
                  <div className="icon-scroll">
                    <div className="mouse">
                      <div className="wheel"></div>
                    </div>
                  </div>
                </div>
                <div className="aboutPhoto" />

              </MDBMask>
            </MDBView>
          </Element>
        </header>
      </div>
    );
  }
}

export default Intro;