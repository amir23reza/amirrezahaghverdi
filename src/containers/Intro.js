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
              <MDBNavbarBrand href="/">
                <img src={require('../images/logo.png')} className="fluid logo_img" alt="logo" />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">So Far</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Skills</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Considerations</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Portifolio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#contactMe">Contact Me</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView src={require('../images/welcome.jpg')}>
                  <MDBMask overlay="my_overLay" className="flex-center flex-column text-white text-center">
                    <h2>Hello & Welcome</h2>
                    <h1>I'm Amir Reza Haghverdi</h1>
                    <br />
                    <MDBBtn className="cvBtn" outline color="white">
                      Download CV
                    </MDBBtn>
                    <div className="icon-scroll">
                      <div className="mouse">
                        <div className="wheel"></div>
                      </div>
                    </div>
                  </MDBMask>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView src={require('../images/tophpc.png')}>
                  <MDBMask overlay="my_overLay" className="flex-center flex-column text-white text-center">
                    <h2>I am honored</h2>
                    <h1>To be an executive member of TopHPC Congress</h1>
                    <br />
                    <MDBBtn className="cvBtn" outline color="white">
                      Download CV
                    </MDBBtn>
                    <div className="icon-scroll">
                      <div className="mouse">
                        <div className="wheel"></div>
                      </div>
                    </div>
                  </MDBMask>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView src={require('../images/react_iran.jpg')}>
                  <MDBMask overlay="my_overLay" className="flex-center flex-column text-white text-center">
                    <h2>I am honored</h2>
                    <h1>To be a member of React Iran Community.</h1>
                    <br />
                    <MDBBtn className="cvBtn" outline color="white">
                      Download CV
                    </MDBBtn>
                    <div className="icon-scroll">
                      <div className="mouse">
                        <div className="wheel"></div>
                      </div>
                    </div>
                  </MDBMask>
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </header>
      </div>
    );
  }
}

export default Intro;