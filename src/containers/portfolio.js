import React, { Component } from 'react';
import { MDBContainer, MDBAnimation } from 'mdbreact';

class Portfolio extends Component {
    render() {
        return (
            <MDBContainer>
                <section className="text-center">
                    <h2 className="h1-responsive my-5" id="portfolio">Portfolio</h2>
                    <br />
                    {/* <h4>Rapid Sensemaking of Scientific Documents</h4>
                    <p>M.Sc. Thesis project developed with ReactJS and D3.JS in order to implement a visual analytics system that supports researchers in making sense of the uploaded collection of scientific documents. The system is connected to an API developed with Flask and Python modules to provide Advanced Machine Learning and NLP functions and analytical information about each document.</p>
                    <MDBAnimation reveal type="fadeInUp">
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{display: "flex", flexDirection: "row", flex: 1}}>
                                <div style={{flex: 1}}><img src={require('../images/portfolio/biblio1.png')} alt="asprin" className="portfolioImage" /></div>
                                <div style={{flex: 1}}><img src={require('../images/portfolio/clusters.png')} alt="asprin" className="portfolioImage" /></div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", flex: 1}}>
                                <div style={{flex: 1}}><img src={require('../images/portfolio/pop.png')} alt="asprin" className="portfolioImage" /></div>
                                <div style={{flex: 1}}><img src={require('../images/portfolio/skim.png')} alt="asprin" className="portfolioImage" /></div>
                            </div>
                        </div>
                    </MDBAnimation>
                    <br /> */}
                    <h4>Asprin</h4>
                    <p>An application which is in collaboration with <a href="http://thc.tums.ac.ir/en/" className="testimonialLink">Tehran Heart Center</a> and about making a more comfortable situation for hypertension patients. It allows patients and doctors to experience online visits, online prescriptions, set reminders, fill up their online medical record and so many other features. It's implementation took more than 7,500 lines of code in clinet side using React Native Technology.</p>
                    <MDBAnimation reveal type="fadeInUp">
                        <img src={require('../images/portfolio/asprin_web-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                    <br />
                    <h4>Vokala</h4>
                    <p>My B.Sc. final project, which is about junior lawyers answering law-related questions of people in the application, getting rated by them and becoming propminent in their career. I used React Native for the client side, Express JS for server side and Mongo DB for database of the application. I managed to get the score of 20 / 20 for the project under supervision of Dr.Leili Mirtaheri.</p>
                    <MDBAnimation reveal type="fadeInUp">
                        <img src={require('../images/portfolio/lawyer-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                    <br />
                    <h4>DocTel</h4>
                    <p>This application is implemented for tele-communication of patients of patients and doctors through video call, voice call and real-time chatting. Beside React Native, other technologies like websocket and webrtc are used in this project. </p>
                    <MDBAnimation reveal type="fadeInUp">
                        <img src={require('../images/portfolio/docTel-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                    <br />
                    <h4>Bimar Negar</h4>
                    <p>There are morning classes held in hospitals for medical interns and student, inspecting a medical case as a routine. This application allows the doctor to describe the situation of a case and make diagnosis-related kind of questions for the students. Therefore a strong databse of medical cases is gathered after a while via this application.Further more a doctor can have a better evaluation of the students. React Native is the main technology used in this project. </p>
                    <MDBAnimation reveal type="fadeInUp">
                        <img src={require('../images/portfolio/bimarNegar-min.png')} alt="asprin" className="portfolioImage" />
                    </MDBAnimation>
                </section>
            </MDBContainer>
        )
    }
}

export default Portfolio;