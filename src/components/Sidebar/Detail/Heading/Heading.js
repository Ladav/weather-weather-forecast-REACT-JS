import React from 'react';

import classes from './Heading.css';

const heading = (props) => {
    return (
        <div className={classes.Heading}>
            <span><p>{props.title}</p></span>
            <span><p>{props.description}</p></span>
        </div>
    );
};

export default heading;