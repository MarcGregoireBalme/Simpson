import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";
import NameForm from "./Formulaire"

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          working: props.working
        };
    };
    handleClick = () => {
        this.setState({ working: !this.state.working });
    };
  render() {
    const pause = this.state.working ? 'working' : 'onBreak';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${pause}`} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button
          className={pause}
          onClick={
           this.handleClick
          }>
          {pause.toUpperCase()}
        </button>
        <Lamp on />
        <Lamp />
        <NameForm/>
        <Quotes/>

      </div>

    );
  }
}

export default App;
