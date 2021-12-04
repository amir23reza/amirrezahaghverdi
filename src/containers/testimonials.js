import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBIcon, MDBAnimation } from "mdbreact";

const TestimonialsPage = () => {
    return (
        <MDBContainer>
            <section className="team-section text-center my-5">
                <h2 className="h1-responsive my-5">
                    Considerations
                </h2>
                <p className="dark-grey-text w-responsive mx-auto mb-5">
                    The following testimonials are from dear people who has been working with me through these recent years.<br />
                    If you are interested to have a saying about me you can <a href="mailto:ahaghver@uwo.ca" className="testimonialLink">contact me</a> :) .
                </p>

                <MDBRow className="text-center">
                    <MDBCol md="4">
                        <MDBAnimation reveal type="fadeInLeft">
                            <MDBView>
                                <MDBView className="mx-auto">
                                    <img
                                        src={require('../images/testimonial/mirtaheri.jpg')}
                                        alt=""
                                        className="rounded-circle z-depth-1 img-fluid"
                                    />
                                </MDBView>
                                <h4 className="font-weight-bold dark-grey-text mt-4">
                                    Dr. Leili Mirtaheri
                            </h4>
                                <h6 className="font-weight-bold blue-text my-3">
                                    Assistant Professor at Kharazmi University
                            </h6>
                                <p className="font-weight-normal dark-grey-text">
                                    <MDBIcon className="fa fa-quote-left pr-2" />
                                    He represents a complete package of a human, having a strong say both in technical and moral aspects as an engineer.
                            </p>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation reveal type="fadeInUp">
                            <MDBView>
                                <MDBView className="mx-auto">
                                    <img
                                        src={require('../images/testimonial/taheri.jpg')}
                                        alt="taheri"
                                        className="rounded-circle z-depth-1 img-fluid"
                                    />
                                </MDBView>
                                <h4 className="font-weight-bold dark-grey-text mt-4">
                                    Mahdi Taheri
                            </h4>
                                <h6 className="font-weight-bold blue-text my-3">
                                    CEO of RayanPajouh
                            </h6>
                                <p className="font-weight-normal dark-grey-text">
                                    <MDBIcon className="fa fa-quote-left pr-2" />
                                    He is going to be beneficial, even more than what he is right now, to his all surroundings. I like the way he searches to solve complexities.
                            </p>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation reveal type="fadeInRight">
                            <MDBView>
                                <MDBView className="mx-auto">
                                    <img
                                        src={require('../images/testimonial/salehi.jpg')}
                                        alt="salehi"
                                        className="rounded-circle z-depth-1 img-fluid"
                                    />
                                </MDBView>
                                <h4 className="font-weight-bold dark-grey-text mt-4">
                                    Ali Reza Salehi
                            </h4>
                                <h6 className="font-weight-bold blue-text my-3">
                                    CTO of RayanPajouh
                            </h6>
                                <p className="font-weight-normal dark-grey-text">
                                    <MDBIcon className="fa fa-quote-left pr-2" />
                                    His ability to manage junior developers of the company and feeling responsible to complete the tasks in time is admirable.
                            </p>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    );
}

export default TestimonialsPage;