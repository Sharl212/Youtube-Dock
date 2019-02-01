import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import VideosList from './components/VideosList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <VideosList />
      </Fragment>
    )
  }
}

export default connect()(App);
