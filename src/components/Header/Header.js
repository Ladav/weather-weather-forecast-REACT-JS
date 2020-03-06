import React, { Component } from 'react';

import classes from './Header.css';
import Title from './Title/Title';
import Navigation from './Navigation/Navigation';

class Header extends Component {
    state = {   // this is a temporary state
        arrayType: {
            items: ['bubble', 'radix', 'merge', 'quick'],
            value: 'bubble'
        }
    };

    render() {
        return (
            <div className={classes.Header}>
                <Title />
                <Navigation arrayType={this.state.arrayType}/>
            </div>
        );
    };
};


export default Header;