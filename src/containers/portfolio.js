import React, { Component } from 'react';
import { MDBContainer, MDBAnimation } from 'mdbreact';

class Portfolio extends Component{
    render(){
        return(
            <MDBContainer>
                <section className="text-center">
                    <h2 className="h1-responsive my-5">Portfolio</h2>
                    <MDBAnimation reveal type="fadeInLeft">
                        <h4>Asprin</h4>
                        <img src={require('../images/portfolio/asprin_web-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                    <MDBAnimation reveal type="fadeInLeft">
                        <h4>Vokala</h4>
                        <img src={require('../images/portfolio/lawyer-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                    <h4>DocTel</h4>
                    <p>lorem</p>
                    <MDBAnimation reveal type="fadeInUp">
                        <img src={require('../images/portfolio/docTel-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                    <h4>Bimar Negar</h4>
                    <p>lorem</p>
                    <MDBAnimation reveal type="fadeInUp">
                        <img src={require('../images/portfolio/bimarNegar-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                </section>
            </MDBContainer>
        )
    }
}

export default Portfolio;