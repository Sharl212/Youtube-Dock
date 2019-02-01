import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import VideosList from './components/VideosList';
import WindowControls from './components/WindowControls';

class App extends Component {
  render() {
    return (
      <Fragment>
        <WindowControls title={this.props.title}/>
        <VideosList />
      </Fragment>
    )
  }
}

export default connect()(App);
