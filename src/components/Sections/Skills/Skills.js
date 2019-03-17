import React, {Component} from 'react';
import './Skills.css';
import clojureIcon from '../../../assets/icons/clojure.png';
import pythonIcon from '../../../assets/icons/python.png';
import javaIcon from '../../../assets/icons/java.png';
import redisIcon from '../../../assets/icons/redis.png';
import reactIcon from '../../../assets/icons/react.png';
import elixirIcon from '../../../assets/icons/elixir.png';
import javascriptIcon from '../../../assets/icons/javascript.png';
import phpIcon from '../../../assets/icons/php.jpg';
import rustIcon from '../../../assets/icons/rust.png';
import mongoIcon from '../../../assets/icons/mongodb.png';
import illustratorIcon from '../../../assets/icons/illustrator.png';
import photoshopIcon from '../../../assets/icons/photoshop.png';
import mysqlIcon from '../../../assets/icons/mysql.png';

class SkillsSection extends Component {
    render() {
        return(
            <section className="skills__section">
                <h2>Skills</h2>
                <ul>
                    <li><img src={clojureIcon} alt="icon"/></li>
                    <li><img src={elixirIcon} alt="icon"/></li>
                    <li><img src={redisIcon} alt="icon"/></li>
                    <li><img src={mysqlIcon} alt="icon"/></li>
                    <li><img src={javascriptIcon} alt="icon"/></li>
                    <li><img src={javaIcon} alt="icon"/></li>
                    <li><img src={reactIcon} alt="icon"/></li>
                    <li><img src={mongoIcon} alt="icon"/></li>
                    <li><img src={pythonIcon} alt="icon"/></li>
                    <li><img src={phpIcon} alt="icon"/></li>
                    <li><img src={photoshopIcon} alt="icon"/></li>
                    <li><img src={illustratorIcon} alt="icon"/></li>
                    <li><img src={rustIcon} alt="icon"/></li>
                </ul>
            </section>
        );
    }
}

export default SkillsSection;