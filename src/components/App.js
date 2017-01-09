import React, { Component } from 'react';
import Remarkable from 'remarkable';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  setText(e) {
    e.preventDefault();
    this.setState({
      text: this.refs.text.value
    });
  }

  render() {
    let md = new Remarkable();
    let html = md.render(this.state.text);
    return (
      <div>
        <textarea onChange={e => this.setText(e)} ref="text">

        </textarea>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    );
  }
}
