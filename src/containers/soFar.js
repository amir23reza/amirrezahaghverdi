import React, { Component } from 'react';
import {
    MDBContainer,
    MDBAnimation
} from 'mdbreact';

class SoFar extends Component {
    render() {
        return (
            <MDBContainer>
                <section id="timeline" class="timeline-outer">
                    <div class="container" id="content">
                        <div class="row">
                            <div class="col s12 m12 l12">
                                <h2 className="h1-responsive my-5">
                                    What has happened so far?
                                </h2>
                                <ul class="timeline">
                                    <MDBAnimation reveal type="fadeInLeft">
                                        <li class="event" data-date="2015/Present">
                                            <h3>Management and Entreprenurship (MSc)</h3>
                                            <p>
                                                This September 2015 I will begin an MSc in Management and Entrepreneurship at University of Sussex, to broaden my knowledge and gain skills necessary for my future in business and management.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="2015/Present">
                                            <h3>Claromentis</h3>
                                            <p>
                                                Claromentis is an intranet software provider company. I started working at the Brighton office as a Marketing Designer while I was still attending my final year at the University of Sussex. My primary responsibilities included creating corporate identity
                                                for the company; I re-designed their website, and have created marketing materials such as brochures.
                                        </p>
                                            <p>Since graduating from university, I have also undertaken responsibilities for designing a product for the company. The roles I have been given have provided the perfect opportunity to implement the skills I have gained throughout my higher
                                            education, as well as experiencing the running of a successful business.</p>
                                        </li>
                                    </MDBAnimation>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </MDBContainer >
        )
    }
}

export default SoFar;