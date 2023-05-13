import React, { Component } from 'react';
import { MDBContainer, MDBProgress, MDBAnimation, MDBRow, MDBCol } from 'mdbreact';

class Skills extends Component {
    render() {
        return (
            <MDBContainer>
                <section className="text-center">
                    <h2 className="h1-responsive my-5">Skills</h2>
                <MDBRow className="skill_row">
                    <MDBCol lg="6" md="6" sm="12">
                        <h3 className="skill_header">UI/UX</h3>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>REACT NATIVE</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                EXPERT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>REACT JS</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                EXPERT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>D3.JS</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                EXPERT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>HTML 5 / CSS 3 / BOOTSTRAP</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                EXPERT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>ADOBE XD</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol lg="6" md="6" sm="12">
                        <h3 className="skill_header">Server-side/Databases</h3>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>NodeJS</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                EXPERT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>Flask (Python)</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                        {/* <MDBAnimation reveal type="fadeInDown">
                            <h5>CodeIgniter (PHP)</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation> */}
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>MySQL</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>MongoDB</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                    </MDBCol>

                </MDBRow>

                <MDBRow className="skill_row">
                    <MDBCol lg="6" md="6" sm="12">
                        <h3 className="skill_header">Data Science</h3>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>Python</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                EXPERT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>Machine Learning Algorithms</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInDown">
                            <h5>Python Modules (PyTorch, Pandas, ...)</h5>
                            <MDBProgress value={80} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>
                    </MDBCol>

                    <MDBCol lg="6" md="6" sm="12">
                        <h3 className="skill_header">Other Skills</h3>
                        

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>Tools (Git, BitBucket, Jira, JEST, Bitrise, Docker, ...)</h5>
                            <MDBProgress value={90} color="progress" height="40px">
                                Expert
                            </MDBProgress>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>C++, JAVA</h5>
                            <MDBProgress value={70} color="progress" height="40px">
                                PROFICIENT
                            </MDBProgress>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>HARDWARE PROGRAMMING (ATMEGA &amp; ARDUINO)</h5>
                            <MDBProgress value={68} color="progress" height="40px">
                                COMPETENT
                            </MDBProgress>
                        </MDBAnimation>

                    </MDBCol>
                </MDBRow>
                {/* <MDBRow>
                <MDBCol lg="12" md="12" sm="12">
                        <h3 className="skill_header">Languages</h3>
                        

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>English</h5>
                            <MDBProgress value={90} color="progress" height="40px">
                                Full professional proficiency (C1)
                            </MDBProgress>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInDown">
                            <h5>Persian</h5>
                            <MDBProgress value={95} color="progress" height="40px">
                                Native Language
                            </MDBProgress>
                        </MDBAnimation>


                    </MDBCol>
                </MDBRow> */}
                </section>
            </MDBContainer>
        )
    }
}

export default Skills;