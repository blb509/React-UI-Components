import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.info.buttonStyle}>{props.info.text}</button>
    )
}

export default ActionButton;