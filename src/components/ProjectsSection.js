import React, {Component} from 'react';
import './ProjectsSection.css';
import Project from './Project';
import gattho from '../assets/gattho-thumb.png';
import mytechlab from '../assets/mylab-thumb.png';
import liga from '../assets/liga-thumb.png';

class ProjectsSection extends Component {
    render() {
        return(
            <section className="projects__section">
                <h2>Projects</h2>
                <Project projectName="Gattho" projectImage={gattho} projectDesc="Culpa proident excepteur ex do. Laboris irure irure qui irure fugiat elit velit anim mollit ipsum officia. Amet et reprehenderit et incididunt elit est. Sit consectetur culpa aliqua minim ut in ullamco deserunt eiusmod amet commodo nostrud nulla." />
                <Project projectName="MyTechLab" projectImage={mytechlab} projectDesc="Culpa proident excepteur ex do. Laboris irure irure qui irure fugiat elit velit anim mollit ipsum officia. Amet et reprehenderit et incididunt elit est. Sit consectetur culpa aliqua minim ut in ullamco deserunt eiusmod amet commodo nostrud nulla." />
                <Project projectName="Liga" projectImage={liga} projectDesc="Culpa proident excepteur ex do. Laboris irure irure qui irure fugiat elit velit anim mollit ipsum officia. Amet et reprehenderit et incididunt elit est. Sit consectetur culpa aliqua minim ut in ullamco deserunt eiusmod amet commodo nostrud nulla." />
                <Project projectName="..." projectImage={gattho} projectDesc="Culpa proident excepteur ex do. Laboris irure irure qui irure fugiat elit velit anim mollit ipsum officia. Amet et reprehenderit et incididunt elit est. Sit consectetur culpa aliqua minim ut in ullamco deserunt eiusmod amet commodo nostrud nulla." />
            </section>
        );
    }
}

export default ProjectsSection;