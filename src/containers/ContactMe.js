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
import Axios from 'axios';

class ContactMe extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading : false
        }
    }

    // typing = ()=>{
    //     const {index} = this.state;
    //     if(index === 11){
    //         setTimeout(()=>{
    //             this.setState({index : 0 , typing : ""})
    //         } , 3500)
    //     } else{
    //         setTimeout(()=>{
    //             this.setState({index : this.state.index + 1 , typing : this.state.typing + this.state.tmpText[index]});
    //         } , 90)
    //     }
    // }

    submitForm = () => {
        this.setState({isLoading : true})
        var name = this.refs.name.state.innerValue;
        var email = this.refs.email.state.innerValue;
        var phone = this.refs.phone.state.innerValue;
        var company = this.refs.company.state.innerValue;
        var message = this.refs.message.state.innerValue;
        var msgObj = {name , email , phone , company , message};
        Axios.post("http://amirrezahaghverdi.com/contact.php" , msgObj)
        .then(data=>{
            if(data.data === 1 && data.status === 200){
                alert("I received your message successfully, Thank You :)");
                this.refs.name.state.innerValue = "";
                this.refs.email.state.innerValue = "";
                this.refs.phone.state.innerValue = "";
                this.refs.company.state.innerValue = "";
                this.refs.message.state.innerValue = "";
                this.setState({isLoading : false})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <MDBContainer className="contactMeContainer" id="contactMe">
                <h2 className="h1-responsive my-5 centerTitle">Contact Me</h2>
                <MDBAnimation reveal type="fadeInUp">
                    <MDBCard>
                        <MDBRow>
                            <MDBCol lg="8" md="6" sm="12">
                                <MDBCardBody className="form">
                                    <h3 className="mt-4">
                                        <MDBIcon icon="envelope" className="pr-2" />
                                        Write To Me
                                    </h3>
                                    <form onSubmit={(e)=>{e.preventDefault();this.submitForm();}}>
                                        <MDBRow>
                                            <MDBCol md="6">
                                                <div className="md-form mb-0">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-name"
                                                        label="Your name *"
                                                        ref="name"
                                                        required
                                                    />
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <div className="md-form mb-0">
                                                    <MDBInput
                                                        type="email"
                                                        id="form-contact-email *"
                                                        label="Your email*"
                                                        ref="email"
                                                        required
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
                                                        ref="phone"
                                                    />
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <div className="md-form mb-0">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-company"
                                                        label="Your company"
                                                        ref="company"
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
                                                        label="Your message *"
                                                        ref="message"
                                                        required
                                                    />
                                                    <MDBBtn block className="sendBtn" type="submit" color="send">
                                                        {
                                                            this.state.isLoading === false ? (
                                                                <MDBIcon icon="paper-plane" />
                                                            ) : (
                                                                    <div class="spinner-border text-success" role="status">
                                                                        <span class="sr-only">Loading...</span>
                                                                    </div>
                                                                )
                                                        }
                                                    </MDBBtn>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                    </form>
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
                                                <a className="testimonialLink" style={{fontSize : '16px' , fontWeight : 200}} href="tel:+ 98 910 211 8482">+ 98 910 211 8482</a>
                                        </p>
                                        </li>
                                        <li>
                                            <p>
                                                <MDBIcon icon="envelope" className="pr-2" />
                                                <a className="testimonialLink" style={{fontSize : '16px' , fontWeight : 200}} href="mailto:Amir.reza.haghverdi.khu@gmail.com">Amir.reza.haghverdi.khu@gmail.com</a>
                                        </p>
                                        </li>
                                    </ul>
                                    <hr className="hr-light my-4" />
                                    <ul className="list-inline text-center list-unstyled">
                                        <li className="list-inline-item">
                                            <a href="https://t.me/amir23reza" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg w-ic testimonialLink">
                                                <MDBIcon fab icon="telegram" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="http://instagram.com/amir.23.reza" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg w-ic testimonialLink">
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