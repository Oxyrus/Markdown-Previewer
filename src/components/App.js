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
      <div className="container">
        <h1>Markdown Previewer</h1>
        <textarea onChange={e => this.setText(e)} ref="text"># You can write here :)</textarea>
        <div className="preview">
          <div dangerouslySetInnerHTML={{__html: html}} className="inner-preview" />
        </div>
      </div>
    );
  }
}
