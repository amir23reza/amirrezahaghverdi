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
                    If you are interested to have a saying about me you can <a href="#contactMe" className="testimonialLink">contact me</a> :) .
                </p>

                <MDBRow className="text-center">
                    <MDBCol md="4">
                        <MDBAnimation reveal type="fadeInLeft">
                            <MDBView>
                                <MDBView className="mx-auto">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                                        alt=""
                                        className="rounded-circle z-depth-1 img-fluid"
                                    />
                                </MDBView>
                                <h4 className="font-weight-bold dark-grey-text mt-4">
                                    Dr. Leili Mirtaheri
                            </h4>
                                <h6 className="font-weight-bold blue-text my-3">
                                    Local Chair of TopHPC
                            </h6>
                                <p className="font-weight-normal dark-grey-text">
                                    <MDBIcon className="fa fa-quote-left pr-2" />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic tenetur quae quaerat ad velit ab hic
                                    tenetur.
                            </p>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation reveal type="fadeInUp">
                            <MDBView>
                                <MDBView className="mx-auto">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                        alt=""
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
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation reveal type="fadeInRight">
                            <MDBView>
                                <MDBView className="mx-auto">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                        alt=""
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
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti.
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