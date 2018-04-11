import React, { Component } from 'react';
import './App.css';
import MyLayout from './components/MyLayout'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyLayout/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default withRouter(connect(mapStateToProps)(App));
