import React, { Component } from 'react';
import { MDBContainer, MDBProgress, MDBAnimation, MDBRow, MDBCol } from 'mdbreact';

class Skills extends Component {
    render() {
        return (
            <MDBContainer>
                <section className="text-center">
                    <h2 className="h1-responsive my-5">Skills</h2>
                <MDBRow className="skill_row">
                    <MDBCol lg="12" md="12" sm="12">
                        <h3 className="skill_header">UI/UX Design</h3>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>REACT NATIVE</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                EXPERT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>REACT JS</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>HTML 5 / CSS 3 / BOOTSTRAP</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>ADOBE XD</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="skill_row">
                    <MDBCol lg="6" md="6" sm="12">
                        <h3 className="skill_header">English Profeciency (IELTS)</h3>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>OVERALL BANDSCORE</h5>
                            <MDBProgress value={88.88} color="progress" height="40px">
                                8
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>LISTENING BANDSCORE</h5>
                            <MDBProgress value={100} color="progress" height="40px">
                                9
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>READING BANDSCORE</h5>
                            <MDBProgress value={88.88} color="progress" height="40px">
                                8
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>WRITING BANDSCORE</h5>
                            <MDBProgress value={72.22} color="progress" height="40px">
                                6.5
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>SPEAKING BANDSCORE</h5>
                            <MDBProgress value={88.88} color="progress" height="40px">
                                8
                            </MDBProgress>
                        </MDBAnimation>
                    </MDBCol>

                    <MDBCol lg="6" md="6" sm="12">
                        <h3 className="skill_header">Other Skills</h3>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>DATABASES( MySQL , MONGO DB)</h5>
                            <MDBProgress value={75} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>SERVER-SIDE LANGUAGES( PHP , NODE JS)</h5>
                            <MDBProgress value={75} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>DATA SCIENCE( PYTHON , NUMPY , SCIPY )</h5>
                            <MDBProgress value={65} color="progress" height="40px">
                                COMPETENT
                            </MDBProgress>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>HARDWARE PROGRAMMING (ATMEGA &amp; ARDUINO)</h5>
                            <MDBProgress value={68} color="progress" height="40px">
                                COMPETENT
                            </MDBProgress>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>C++ &amp; JAVA</h5>
                            <MDBProgress value={60} color="progress" height="40px">
                                COMPETENT
                            </MDBProgress>
                        </MDBAnimation>

                    </MDBCol>
                </MDBRow>
                </section>
            </MDBContainer>
        )
    }
}

export default Skills;