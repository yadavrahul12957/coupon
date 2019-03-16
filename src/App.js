import React, { Component } from 'react';
import './App.css';
import Form from './components/form.js';
import Submit from './components/submit';
class App extends Component {
  render() {
    return (
      <div className="page-layout">
        <Form></Form>
        <Submit></Submit>
      </div>
    );
  }
}

export default App;
