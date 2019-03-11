import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: undefined
        };
    }
    componentDidMount() {
        fetch('https://api.github.com/users/Katho162')
                .then(res => res.json())
                .then(data => this.setState({avatar: data.avatar_url}));
        console.log(this.state.avatar);
    }
    render() {
        return(
            <header className="header container">
                <img src={this.state.avatar} alt="avatar" />
                <h1>Katho</h1>
                <h2>Software Developer</h2>
                <div className="location">São Paulo, Brazil</div>
                <p>Just an 18 years old guy who does computer stuff.</p>
            </header>
        );
    }    
}

export default Header;