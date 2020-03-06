import React from 'react';

import classes from './NavItem.css';

const navItem = (props) => {
    const attachedClasses = [classes.Option];
    if(props.active) attachedClasses.push(classes.Active);

    return (
        <p className={attachedClasses.join(' ')}>
            {props.textContent}
            <input
                type="radio"
                className={classes.RadioBtn}
                name="arrayType"
                value={props.Value}
                onClick={() => props.selected(props.Value)} />
        </p>
    );
};
export default navItem;