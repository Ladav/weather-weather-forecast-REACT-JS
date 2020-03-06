import React from 'react';

import NavItem from './NavItem/NavItem';

const navigation = (props) => {
    const style = {
        padding: '0 50px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };
    
    const navItems = props.arrayType.items.map(opt => {
        return <NavItem
            key={opt}
            textContent={opt}
            Value={opt}
            active={props.arrayType.value === opt ? true : false }/>
    });
    return <div style={style}> {navItems} </div>
};

export default navigation;