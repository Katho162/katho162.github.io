import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ptBR from './pt_BR.json';
import enUS from './en_US.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translation: undefined
    };
  }
  componentWillMount() {
      this.setState({translation: enUS});
  }
  updateTranslation(translation) {
    this.setState({translation: translation});
  }
  render() {
    return (
      <div className="App">
        <Header translation={this.state.translation.header}/>
        <Main />
        <Footer updateTranslation={this.updateTranslation} />
      </div>
    );
  }
}

export default App;
