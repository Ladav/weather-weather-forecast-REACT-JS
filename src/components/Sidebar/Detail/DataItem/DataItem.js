import React from 'react';

import classes from './DataItem.css';
const dataItem = (props) => {
    return (
        <div className={classes.DataItem}>
            <span>{props.item}</span>
            <span>{props.data}</span>
        </div>
    );
};

export default dataItem;