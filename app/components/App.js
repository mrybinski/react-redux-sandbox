import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                App content
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node
};

App.defaultProps = {
    children: null
};
