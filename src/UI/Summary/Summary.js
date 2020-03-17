import React from 'react';

import classes from './Summary.css';
const summary = (props) => {
    return (
        <div className={classes.Summary} style={props.styles}>
            {props.summary}
        </div>
    );
};

export default summary;