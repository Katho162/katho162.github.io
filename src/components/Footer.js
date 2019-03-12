import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <ul className="container">
                    <li>
                        <h2>Contact</h2>
                        <a href="#">katho162@protonmail.com</a><br/>
                        <a href="#">katho162@yandex.ru</a><br/>
                    </li>
                    <li>
                        <h2>Thanks</h2>
                        <a href="https://fontawesome.com" targer="_blank">Font Awesome</a><br/>
                        <a href="#">Stetch (English improvement)</a><br/>
                    </li>
                    <li className="misc">
                        <h2>Misc</h2>
                        <a href="https://github.com/Katho162/katho162.github.io" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://discord.gg/YVRtK85" target="_blank"><i class="fab fa-discord"></i></a>
                        <a href="https://www.youtube.com/channel/UCeVbDPBgbzLARXQ6ZluZW8g" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://vk.com/katho162" target="_blank"><i class="fab fa-vk"></i></a>
                        <a href="https://steamcommunity.com/id/katho162/" target="_blank"><i class="fab fa-steam"></i></a>
                        <a href="https://www.reddit.com/user/Katho162" target="_blank"><i class="fab fa-reddit"></i></a>
                    </li>
                    <li>
                        <h2>Language</h2>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;