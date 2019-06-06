import React , {Component} from 'react';
import {
    MDBContainer , 
    MDBRow , 
    MDBCol , 
    MDBView ,
    MDBAnimation
} from 'mdbreact';
import Project from '../components/project';

class ProjectGallery extends Component{
    render(){
        return(
            <MDBContainer>
                <section className="text-center">
                    <h2 className="h1-responsive my-5">
                        Portfolio
                    </h2>
                    <p className="dark-grey-text w-responsive mx-auto mb-5">
                        You can see some the latest projects I've been working on below. <br /> As I'm getting more and more interested in Health Informatics
                        I just mentioned some projects I've done in this field.<br /> If you want to inquire about my other projects you can simply <a href="#contactMe" className="testimonialLink">contact me</a> :)
                    </p>
                    <MDBRow>
                        <MDBCol md="3" style={{padding : '10px'}}>
                            <Project 
                                staticSrc={require('../images/projects/CME.png')} 
                                dynamicSrc={require('../images/projects/CME.mp4')}  
                            />
                        </MDBCol>
                        <MDBCol md="3" style={{padding : '10px'}}>
                            <Project
                                staticSrc={require('../images/projects/law.png')}
                                dynamicSrc={require('../images/projects/law.mp4')}
                            />
                        </MDBCol>
                        <MDBCol md="3" style={{padding : '10px'}}>
                            <Project
                                staticSrc={require('../images/projects/CME.png')}
                                dynamicSrc={require('../images/projects/CME.mp4')}
                            />
                        </MDBCol>
                        <MDBCol md="3" style={{padding : '10px'}}>
                            <Project
                                staticSrc={require('../images/projects/law.png')}
                                dynamicSrc={require('../images/projects/law.mp4')}
                            />
                        </MDBCol>   
                    </MDBRow>
                </section>
            </MDBContainer>
        )
    }
}

export default ProjectGallery;