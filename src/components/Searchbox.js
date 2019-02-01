import React from 'react';
import FontAwesome from 'react-fontawesome';
import DebounceInput from 'react-debounce-input';

import '../css/searchbox.css';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="search_box_container">
                <FontAwesome name='search' />
                <div className='form'>
                    <DebounceInput
                        placeholder='Search...'
                        minLength={2}
                        debounceTimeout={500}
                        onChange={this.props.handleSearch}
                        autoFocus
                    />
                </div>
            </div>
        );
    }
}

export default SearchBox;
