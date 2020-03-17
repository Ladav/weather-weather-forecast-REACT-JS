import React from 'react';

import classes from './SearchBtn.css';
import search from './search (1).svg';
const searchBtn = (props) => {
    return (
        <div className={classes.SearchBtn__container}>
            <div className={classes.SearchBtn}
                onClick={props.clicked}>
                <img src={search} alt="search" />
            </div>
        </div>
    );
};

export default searchBtn;