import React from 'react';

import classes from './Title.css';
const title = (props) => {
    return (
        <div className={classes.Title} style={props.styles}>
            {props.title}
        </div>
    );
};

export default title;