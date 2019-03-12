import React, {Component} from 'react';
import './SocialSection.css';
import SocialMedia from './SocialMedia';

class SocialSection extends Component {
    render() {
        return(
            <section className="social__section">
                <h2>Social Media & Contact</h2>
                <ul>
                    <SocialMedia socialIcon="fab fa-github" socialLink="https://github.com/Katho162" socialName="Katho162"/>
                    <SocialMedia socialIcon="fab fa-twitter" socialLink="https://twitter.com/Katho162" socialName="@Katho162"/>
                    <SocialMedia socialIcon="fab fa-linkedin-in" socialLink="https://linkedin.com/in/katho162/" socialName="Katho162"/>
                    <SocialMedia socialIcon="fab fa-discord" socialLink="#" socialName="Katho#0523"/>
                </ul>
            </section>
        );
    }
}

export default SocialSection;