import React, { Component } from 'react';

import classes from './Message.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class message extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        console.log(this.props)
        return (
            <Aux>
                <Backdrop show={this.props.show} closed={this.props.backdropClosed} />
                <div className={classes.Message}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateX(-100vh)',
                        opacity: this.props.show ? 1 : 0
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    };
};

export default message;