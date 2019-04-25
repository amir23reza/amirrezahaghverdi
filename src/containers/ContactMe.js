import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBView,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';

class ContactMe extends Component {
    render() {
        return (
            <MDBContainer className="contactMeContainer">
                <MDBCard>
                    <MDBRow>
                        <MDBCol size="8">

                        </MDBCol>
                        <MDBCol size="4">
                            <MDBCardBody className="contact text-center h-100">
                                <h3 className="my-4 pb-2">Contact information</h3>
                                <ul className="text-lg-left list-unstyled ml-4">
                                    <li>
                                        <p>
                                            <MDBIcon icon="map-marker-alt" className="pr-2" />
                                            New York, 94126 USA
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <MDBIcon icon="phone" className="pr-2" />+ 01 234 567 89
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <MDBIcon icon="envelope" className="pr-2" />
                                            contact@example.com
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
            </MDBContainer>
        )
    }
}

export default ContactMe;