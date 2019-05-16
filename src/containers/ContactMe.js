import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard, 
    MDBCardBody,
    MDBIcon,
    MDBInput,
    MDBBtn,
    MDBAnimation
} from 'mdbreact';

class ContactMe extends Component {

    constructor(props){
        super(props);
        this.state = {
            tmpText : ["W","r","i","t","e"," ","t","o"," ","m","e"],
            typing : "",
            index : 0
        }
    }

    typing = ()=>{
        const {index} = this.state;
        if(index === 11){
            setTimeout(()=>{
                this.setState({index : 0 , typing : ""})
            } , 3500)
        } else{
            setTimeout(()=>{
                this.setState({index : this.state.index + 1 , typing : this.state.typing + this.state.tmpText[index]});
            } , 90)
        }
    }

    render() {
        this.typing()
        return (
            <MDBContainer className="contactMeContainer" id="contactMe">
                <MDBAnimation reveal type="fadeInUp">
                    <MDBCard>
                        <MDBRow>
                            <MDBCol lg="8" md="6" sm="12">
                                <MDBCardBody className="form">
                                    <h3 className="mt-4">
                                        <MDBIcon icon="envelope" className="pr-2" />
                                        {this.state.typing}
                                    </h3>
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-name"
                                                    label="Your name"
                                                />
                                            </div>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-email"
                                                    label="Your email"
                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-phone"
                                                    label="Your phone"
                                                />
                                            </div>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="text"
                                                    id="form-contact-company"
                                                    label="Your company"
                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <div className="md-form mb-0">
                                                <MDBInput
                                                    type="textarea"
                                                    id="form-contact-message"
                                                    label="Your message"
                                                />
                                                <MDBBtn block className="sendBtn" color="send">
                                                    <MDBIcon icon="paper-plane" />
                                                </MDBBtn>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol lg="4" md="6" sm="12">
                                <MDBCardBody className="contact text-center h-100">
                                    <h3 className="my-4 pb-2">Contact information</h3>
                                    <ul className="text-lg-left list-unstyled ml-4">
                                        <li>
                                            <p className="asd">
                                                <MDBIcon icon="map-marker-alt" className="pr-2" />
                                                Tehran , Iran
                                        </p>
                                        </li>
                                        <li>
                                            <p>
                                                <MDBIcon icon="phone" className="pr-2" />
                                                <a href="tel:+ 98 910 211 8482">+ 98 910 211 8482</a>
                                        </p>
                                        </li>
                                        <li>
                                            <p>
                                                <MDBIcon icon="envelope" className="pr-2" />
                                                <a href="mailto:Amir.reza.haghverdi.khu@gmail.com">Amir.reza.haghverdi.khu@gmail.com</a>
                                        </p>
                                        </li>
                                    </ul>
                                    <hr className="hr-light my-4" />
                                    <ul className="list-inline text-center list-unstyled">
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg w-ic">
                                                <MDBIcon fab icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg w-ic">
                                                <MDBIcon fab icon="linkedin-in" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="p-2 fa-lg w-ic">
                                                <MDBIcon fab icon="instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBAnimation>
            </MDBContainer>
        )
    }
}

export default ContactMe;