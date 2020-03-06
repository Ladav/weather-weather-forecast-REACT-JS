import React from 'react';
import tempLogo from './tempLogo.jpg';

import classes from './Title.css';

const logo = (props) => {
    return (
        <div className={classes.Title}>
            <div className={classes.Logo}>
                <img src={tempLogo} alt="Logo" />
                {/*PENDING can this as app icon &#x488; */}
            </div>
            <h3>Sortify-Sorting Algo Visualizer-</h3>
        </div>
    );
};

export default logo;