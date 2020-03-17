import React from 'react';

import classes from './Footer.css';

const footer = (props) => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Left}>{props.left}</div>
            <div className={classes.Right}>{props.right}</div>
        </div>
    );
};

export default footer;