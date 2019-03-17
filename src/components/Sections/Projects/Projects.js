import React, {Component} from 'react';
import './Projects.css';
import Project from './Project';
import gattho from '../../../assets/gattho-thumb.png';
import mytechlab from '../../../assets/mylab-thumb.png';
import liga from '../../../assets/liga-thumb.png';

class ProjectsSection extends Component {
    render() {
        return(
            <section className="projects__section">
                <h2>Projects</h2>
                <Project projectName="Gattho" projectImage={gattho} projectDesc="Gattho is one website project, that i did in 2018 to organize information about me and my friend Gabriel Motta. And try to start a little portfolio" />
                <Project projectName="MyTechLab" projectImage={mytechlab} projectDesc="MyTechLab was a project about a WebSite for an IT Solution company." />
                <Project projectName="Liga" projectImage={liga} projectDesc="A Liga dos Programadores was a Discord server for brazilians/portuguese programmers." />
            </section>
        );
    }
}

export default ProjectsSection;