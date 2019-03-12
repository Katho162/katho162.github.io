import React, {Component} from 'react';
import SkillsSection from './SkillsSection';
import QuoteSection from './QuoteSection';
import LanguagesSection from './LanguagesSection';
import ProjectsSection from './ProjectsSection';
import SocialSection from './SocialSection';

class Main extends Component {
    render() {
        return(
            <main className="main container">
                <SkillsSection />
                <QuoteSection />
                <LanguagesSection />
                <ProjectsSection />
                <SocialSection />
            </main>
        );
    }
}

export default Main;