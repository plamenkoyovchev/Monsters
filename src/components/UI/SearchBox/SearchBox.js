import React from 'react';
import './SearchBox.css';

const SearchBox = props => {
    return (
        <input
            className='SearchBox'
            type='search'
            placeholder={props.placeholder}
            onChange={props.changed}
        />
    );
};

export default SearchBox;