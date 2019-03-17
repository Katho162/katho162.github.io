import React, { Component } from 'react';
import './Language.css';

class Language extends Component {
    render() {
        return (
            <div className="language">
                {this.props.disabled ?
                    (<img className="disabled" src={this.props.languageImage} alt="flag"/>)
                    :
                    (<img src={this.props.languageImage} alt="flag"/>)}
                <h3>{this.props.languageName}</h3>
                <p>{this.props.languageText}</p>
            </div>
        );
    }
}

export default Language; 