import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import '../css/iframe.css'
import * as actions from '../actions/videos';

const { ipcRenderer } = window.require('electron');

class IFrame extends Component {
    componentDidMount() {
        ipcRenderer.send("video-playing")
        document.querySelector("body").style= "overflow-y: hidden"
    }

    componentWillUnmount () {
        ipcRenderer.send("video-closed")
    }

    render() {
        const { videoId } = this.props;
        const url = `https://www.youtube.com/embed/${videoId}`

        // ? if user pressed ESC key, close the video
        

        return (
            <Fragment>
                {/* <div className="alert alert-success" role="alert" style={{marginBottom:"0px", textAlign: "center"}}>Press ESC to close the video!</div> */}
                <iframe src={url} onLoad={()=> document.querySelector('iframe').addEventListener('keydown', (e) => (e.keyCode == 27 ? this.props.closeVideo() : ''))} id="video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    closeVideo: () => dispatch({ type: actions.CLOSE_VIDEO })
})

const mapStateToProps = state => ({})
export default connect(mapStateToProps, mapDispatchToProps)(IFrame);