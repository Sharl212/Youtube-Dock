import React from 'react';
import {connect} from 'react-redux'
import '../css/index.css';

import {
    sendClose,
    sendMinimize,
    sendMaximize
} from '../mainCommands';
import SearchBox from './Searchbox';

class WindowControls extends React.Component {
    render() {
        console.log(this.props)
        if(this.props.isVideoOpen) return ''
        return (
            <header id="titlebar">
                {/* <SearchBox /> */}
                <div id="drag-region">
                    <div id="window-title">
                        <span>{this.props.title}</span>
                    </div>
                    <div id="window-controls">
                        <div className="button" id="min-button" onClick={sendMinimize}>
                            <span>&#xE921;</span>
                        </div>
                        <div className="button" id="max-button" onClick={sendMaximize}>
                            <span>&#xE922;</span>
                        </div>
                        <div className="button" id="restore-button">
                            <span>&#xE923;</span>
                        </div>
                        <div className="button" id="close-button" onClick={sendClose}>
                            <span>&#xE8BB;</span>
                        </div>
                    </div>
                </div>
            </header>
            //     <header id="titlebar">
            //       <div id="drag-region"></div>

            //         <button
            //             onClick={sendMinimize}>
            //             -
            //   </ button>
            //         <button
            //             onClick={sendMaximize}>
            //             -
            //   </ button>
            //         <button
            //             onClick={sendClose}>
            //             x
            // </ button>
            //     </header>
        );
    }
}

const mapStateToProps = state => ({
    isVideoOpen : state.videos.videoOpen
})
export default connect(mapStateToProps)(WindowControls);
