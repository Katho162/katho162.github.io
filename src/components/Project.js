import React, {Component} from 'react';
import './Project.css'

class Project extends Component {
    render() {
        return(
            <div className="project">
                <img src={this.props.projectImage} alt="project" />
                <div className="line"></div>
                <h3>{this.props.projectName}</h3>
                <p>{this.props.projectDesc}</p>
            </div>
        )
    }
}

export default Project;