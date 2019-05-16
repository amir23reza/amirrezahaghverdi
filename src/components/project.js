import React, { Component } from 'react';
import {
    MDBView, MDBIcon
} from 'mdbreact';
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false
        }
    }
    focuseIn = () => {
        this.setState({ isFocused: true })
    }
    focuseOut = () => {
        this.setState({ isFocused: false })
    }
    render() {
        const {
            staticSrc,
            dynamicSrc,
        } = this.props;
        return (
            <MDBView 
                onMouseOver={this.focuseIn} 
                onMouseLeave={this.focuseOut} 
                className="projectCol" 
                onTouchStart={this.focuseIn} 
                onTouchCancle={this.focuseOut}
            >
                {this.state.isFocused ? <p className="blankP"></p> : <MDBIcon icon="play-circle" className="projectPlayIcon" />}
                {this.state.isFocused ? <video src={dynamicSrc} autoPlay className="projectVideo" loop muted></video>:
                    <img src={staticSrc} alt="project" className="projectImg" />}
            </MDBView>
        )
    }
}

export default Project;