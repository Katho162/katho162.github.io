import React, {Component} from 'react';
import Skills from './Sections/Skills/Skills';
import Quotes from './Sections/Quotes/Quotes';
import Languages from './Sections/Languages/Languages';
import Projects from './Sections/Projects/Projects';
import SocialMedias from './Sections/SocialMedias/SocialMedias';

class Main extends Component {
    render() {
        return(
            <main className="main container">
                <Skills />
                <Quotes />
                <Languages />
                <Projects />
                <SocialMedias />
            </main>
        );
    }
}

export default Main;