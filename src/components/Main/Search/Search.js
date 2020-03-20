import React from 'react';
import { connect } from 'react-redux';

import classes from './Search.css';
import SearchBar from './SearchBar/SearchBar';
import SearchBtn from './SearchBtn/SearchBtn';
import * as actionCreator from '../../../store/action/search';

const header = (props) => {
    const barEnterHandler = (e) => {
        if (+e.keyCode === 13) {
            props.btnClickHandler();
            e.target.blur();
        }
    };

    let searchBar = null;
    if (props.search) searchBar = <SearchBtn clicked={props.btnClickHandler} />;
    return (
        <div className={classes.Header}>
            <SearchBar Value={props.search}
                changed={(e) => props.valueChangeHandler(e.target.value)}
                keyDown={barEnterHandler} />
            {searchBar}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        search: state.search,
        location: state.location
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        valueChangeHandler: (val) => dispatch(actionCreator.searchValueChanged(val)),
        btnClickHandler: () => dispatch(actionCreator.searchButtonClicked())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(header);