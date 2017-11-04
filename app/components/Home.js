import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
    changeLabel1 = () => {
        this.props.changeLabel('test1');
    }

    changeLabel2 = () => {
        this.props.changeLabel('test2');
    }

    render() {
        return (
            <div className='Home'>
              Home content
                <div role='button' tabIndex='0' onClick={ this.changeLabel1 }>click 1</div>
                <div role='button' tabIndex='-1' onClick={ this.changeLabel2 }>click 2</div>
                label
                {this.props.label}
            </div>
        );
    }
}

Home.propTypes = {
    label: PropTypes.string,
    changeLabel: PropTypes.func.isRequired,
};

Home.defaultProps = {
    label: ''
};
