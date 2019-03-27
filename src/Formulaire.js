import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Homer Simpson" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.name});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        name :
        <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
