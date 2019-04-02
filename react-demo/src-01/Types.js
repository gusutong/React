import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
export default class Types extends Component {
    render() {
        return (
            <div>
                hello
            </div>
        );
    }
}
Types.propTypes = {
    type:PropTypes.bool.isRequired,
    name:PropTypes.oneOf([PropTypes.bool,PropTypes.String])
}
Types.defaultProps = {
    type:'num',
    name:'react'
}