import React, { Component } from 'react';

import classes from './Sidebar.css';
import Detail from '../../components/Sidebar/Detail/Detail';
import About from '../../components/Sidebar/About/About';

class Sidebar extends Component {
    state = {
        
    };

    render() {
        return (
            <div className={classes.Sidebar}>
                <Detail />
                <About />
            </div>
        );
    };
};

export default Sidebar;