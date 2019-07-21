import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <ul className="container">
                    <li>
                        <h2>Contact</h2>
                        katho162@protonmail.com<br/>
                        katho162@yandex.ru<br/>
                    </li>
                    <li>
                        <h2>Thanks</h2>
                        <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome</a><br/>
                        Stetch (Text corrections)<br/>
                        Angélique (Text corrections)<br/>
                    </li>
                    <li className="misc">
                        <h2>Misc</h2>
                        <a href="https://github.com/Katho162/katho162.github.io" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://discord.gg/YVRtK85" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
                        <a href="https://www.youtube.com/channel/UCeVbDPBgbzLARXQ6ZluZW8g" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                        <a href="https://vk.com/katho162" target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a>
                        <a href="https://steamcommunity.com/id/katho162/" target="_blank" rel="noopener noreferrer"><i className="fab fa-steam"></i></a>
                        <a href="https://www.reddit.com/user/Katho162" target="_blank" rel="noopener noreferrer"><i className="fab fa-reddit"></i></a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;