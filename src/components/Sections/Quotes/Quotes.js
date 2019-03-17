import React, {Component} from 'react';
import './Quotes.css';

class QuoteSection extends Component {
    render() {
        return(
            <section className="quote__section">
                <ul>
                    <li>I'm currently a university student doing System Analysis and Development at FATEC São Paulo.</li>
                    <li>I had some experiences working as a Java Software Developer as Freelancer during the years of 2016 - 2017</li>
                    <li>In 2017, I made a discord server for Brazilian/Portuguese programmers called "A Liga dos Programadores" to discuss programming.</li>
                </ul>
            </section>
        );
    }
}

export default QuoteSection;