import React from 'react';

import classes from './DirectionArrow.css';

const directionArrow = (props) => {
    return (
        <div className={classes.DirectionArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 171 171"><path d="M0,171.99579v-171.99579h171.99579v171.99579z" fill="none"></path><g fill="#ffffff"><path d="M153.85992,47.82656c-0.89508,0.02672 -1.75008,0.40078 -2.37797,1.05539l-65.98195,65.98195l-65.98195,-65.98195c-0.64125,-0.66797 -1.52297,-1.02867 -2.44476,-1.04203c-1.40274,0.01336 -2.64516,0.855 -3.17953,2.1375c-0.52102,1.29586 -0.21375,2.76539 0.7882,3.74063l68.4,68.4c1.33594,1.33594 3.50015,1.33594 4.83609,0l68.4,-68.4c1.01531,-0.97523 1.32258,-2.48484 0.7882,-3.7807c-0.54773,-1.29586 -1.83023,-2.1375 -3.24633,-2.11078z"></path></g></svg>
        </div>
    );
};

export default directionArrow;