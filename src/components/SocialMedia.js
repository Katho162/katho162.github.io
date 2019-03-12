import React, {Component} from 'react';
import './SocialMedia.css';

class SocialMedia extends Component {
    render() {
        return(
            <li className="social">
                <a target="_blank" href={this.props.socialLink}>
                    <i className={this.props.socialIcon}></i>
                    <h3>{this.props.socialName}</h3>
                </a>
            </li>
        );
    }
}

export default SocialMedia;