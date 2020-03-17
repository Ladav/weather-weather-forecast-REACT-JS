import React from 'react';

import classes from './DataItem.css';

const dataItem = (props) => {
    return (
        <div className={classes.DataItem}>
            <div className={classes.Icon}>
                <img src={props.srcIcon}></img>
            </div>
            <div className={classes.Details}>
                <p className={classes.Temperature}>{props.temp}°</p>
                <p>{props.item}</p>
            </div>
        </div>
    );
};

export default dataItem;