

import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { video } = this.props;

        return (
            <li className="horizontal col-lg-3 col-md-6 col-sm-12 col-xs-12" style={{ marginTop: "5%" }} key={video.id.videoId}>
                <article className="card" style={{ width: "323px", height: "332px" }}>
                    <header className="card__thumb">
                        <img src={video.snippet.thumbnails.medium.url} width={video.snippet.thumbnails.medium.width}     height={video.snippet.thumbnails.medium.height} />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{video.snippet.title}</h2>
                        <p className="card__description">
                            {video.snippet.description}
                        </p>
                    </div>
                </article>
            </li>
        )
    }
}

export default Card;
