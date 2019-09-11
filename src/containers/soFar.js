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
                                        <li class="event" data-date="August 2011">
                                            <h3>When the journey started</h3>
                                            <p>
                                                Got accepted in Mandegar Alborz highschool entrance exam, ranked 218 among more than 6,000 applicants.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="June 2015">
                                            <h3>Diploma</h3>
                                            <p>
                                                Graduated from Mandegar Alborz highschool, one of the first modern highschools in Asia and Middle East, with GPA of 19.18 / 20.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInLeft">
                                        <li class="event" data-date="July 2015">
                                            <h3>University entrance</h3>
                                            <p>
                                                Ranked among the first 2 percent of 181,846 applicants for country-wide university exam entrance, Konkur, getting accepted for the computer engineering program of Kharazmi university.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="June 2016">
                                            <h3>UI / UX basics</h3>
                                            <p>
                                                Started self-educating HTML, CSS, Jquery and experiencing various internships in different companies, getting fimiliar with notable web design concepts.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInLeft">
                                        <li class="event" data-date="January 2017">
                                            <h3>The first workshop</h3>
                                            <p>
                                                Held up my first workshop in context of building a website using Wordpress and Woocommerce in kharazmi University and about 60 students attended. It was under supervision of Dr.Leili Mirtaheri.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="April 2017">
                                            <h3>The first mobile application</h3>
                                            <p>
                                                Implemented my first mobile application, Digital Marketing, using Angular 1 and Ionic 1 framework. In spite of its simplicity it is actively installed on more than 50 devices and rated 5/5.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInLeft">
                                        <li class="event" data-date="April 2017">
                                            <h3>Becoming a professional</h3>
                                            <p>
                                                Got fimiliar with different development and research methodologies, Held a seminar about "Why and when to use Scrum?" in Kharazmi university under supervision of Dr.Leili Mirtaheri.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="October 2017">
                                            <h3>TopHPC Congress</h3>
                                            <p>
                                                Started developing the website and android application of TopHPC 2019 congress which was about High Performance Computing and Big data with gathering of experts and professionals from all around the world. The final result was not entirely developed by me, but I was honored to be named an executive member of the congress, which was my first international experience.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInLeft">
                                        <li class="event" data-date="January 2018">
                                            <h3>The first Teaching experience</h3>
                                            <p>
                                                Held 14 sessions, creating a bookshop web application from scratch as a teacher assistant of Dr.Leili Mirtaheri for "System Analysis and Design" course. Used <span className="bold-span">Bootstrap 3</span> & <span className="bold-span">jQuery</span> for the client side, <span className="bold-span">PHP</span> & <span className="bold-span">Codeigniter</span> framework for the serverside and <span className="bold-span">MySQL</span> for database of the application. More than 50 students were attending the class.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="June 2018">
                                            <h3>Governmental experience</h3>
                                            <p>
                                                Experienced a period of 3 months as a <span className="bold-span">react js</span> developer in UI design team of <span className="bold-span">Ministry of Industry, Mine and Trade</span> for internship under supervision of Dr.Amir Asghari and Dr.Leili Mirtaheri.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInLeft">
                                        <li class="event" data-date="September 2018">
                                            <h3>Teaching continues</h3>
                                            <p>
                                                Getting more interested in mobile development, I learnt react native technology in summer of 2018. For the fall semester of 2018, I taught Mobile development to a group of 30 students as teacher assistant of Dr.Leili Mirtaheri for "Software engineering" course. <span className="bold-span">Adobe XD</span> was used for user experience design, <span className="bold-span">React Native</span> for user interface design, <span className="bold-span">PHP & MySQL</span> for server side and database of a application which was about movie rating.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="December 2018">
                                            <h3>Hardware experience</h3>
                                            <p>
                                                Learnt alot in one of my best educational experiences, Micro processor lab. I was given an atmega 32 micro processor and a bread board and I had to implement several projects, started from a simple LED blinker to a complex morse coded door opener. But the Final project was to implement a line tracker robot using arduino robot and I managed to build it adequately well.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInLeft">
                                        <li class="event" data-date="December 2018">
                                            <h3>Hardware experience</h3>
                                            <p>
                                                Learnt alot in one of my best educational experiences, Micro processor lab. I was given an atmega 32 micro processor and a bread board and I had to implement several projects, started from a simple LED blinker to a complex morse coded door opener. But the Final project was to implement a line tracker robot using arduino robot and I managed to build it adequately well.
                                            </p>
                                        </li>
                                    </MDBAnimation>
                                    <MDBAnimation reveal type="fadeInRight">
                                        <li class="event" data-date="January 2019">
                                            <h3>Professional career</h3>
                                            <p>
                                                Before the last semester of my bachelor graduation, I got hired in Rayan Pajouh Co. as a senior mobile developer. I implement medical-related mobile applications there and manage a group of 3 developers. System design, startup planning, setting up marketing strategies are my side activitis.
                                            </p>
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