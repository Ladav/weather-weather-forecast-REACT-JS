import React from 'react';

import classes from './SearchBar.css';
const searchBar = (props) => {
    return (
        <div className={classes.SearchBar__container}>
            <input type="text"
                className={classes.SearchBar}
                placeholder="location..." 
                value={props.Value}
                onChange={props.changed}
                onKeyDown={props.keyDown}
                spellCheck="false"/>
        </div>
    );
};

export default searchBar;