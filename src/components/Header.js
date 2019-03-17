import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: undefined
        };
    }
    componentWillMount() {
        fetch('https://api.github.com/users/Katho162')
                .then(res => res.json())
                .then(data => this.setState({avatar: data.avatar_url}));
    }
    render() {
        return(
            <header className="header container">
                <img src={this.state.avatar} alt="avatar" />
                <h1>Katho</h1>
                <h2>Software Developer</h2>
                <div className="location"><i className="fas fa-map-marker-alt"></i> São Paulo, Brazil</div>
                <p>{this.props.translation.desc}</p>
            </header>
        );
    }    
}

export default Header;