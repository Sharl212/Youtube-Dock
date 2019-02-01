import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/videos';
import '../css/List.css'
// components
import IFrame from './iFrame';
import Loading from "./Loading"
import Card from "./Card"

import API_KEY from '../credentials';


class VideosList extends Component {
    constructor() {
        super();

        this.state = {
            // ? search query
            query: null,
            maxResults: null,
            items: null
        }

        this.search = this.search.bind(this)
    }

    async componentDidMount() {
        await fetch(`https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => this.setState({ items: data.items.filter(i => i.id.kind == "youtube#video").map(i => i) }))
    }

    async search(query) {
        await fetch(`https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query.split(' ').join('%20')}&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => this.setState({ items: data.items.filter(i => i.id.kind == "youtube#video").map(i => i) }))
    }

    render() {
        const { items } = this.state
        const { videoOpen, videoId } = this.props.videos
        if (videoId && videoOpen) return <IFrame videoId={videoId} />
        if (items == null) return <Loading />

        return (
            <div className="fluid-container">
                <div className="input-group" style={{ width: "35%", margin: "auto" }}>
                    <input type="text" className="form-control" name="search" aria-label="Text input with dropdown button" placeholder="Search..." style={{ height: "40px" }} />
                    <button className="btn btn-success" style={{ marginLeft: "5px", height: "80%" }} onClick={() => this.search(document.querySelector("input[name='search']").value)}>Search</button>
                </div>

                <ul>
                    {this.state.items.map(video => (<span onClick={() => this.props.openVideo(video.id.videoId)} style={{ cursor: "pointer" }} key={video.id.videoId}><Card video={video} /></span>))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({ openVideo: videoId => dispatch({ type: actions.OPEN_VIDEO, payload: { videoOpen: true, videoId } }) })

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);