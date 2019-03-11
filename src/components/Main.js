import React, {Component} from 'react';
import SkillsSection from './SkillsSection';
import QuoteSection from './QuoteSection';
import LanguagesSection from './LanguagesSection';

class Main extends Component {
    render() {
        return(
            <main className="main container">
                <SkillsSection />
                <QuoteSection />
                <LanguagesSection />
            </main>
        );
    }
}

export default Main;