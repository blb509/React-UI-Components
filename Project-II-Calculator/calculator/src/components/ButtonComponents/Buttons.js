import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'
import ActionButton from './ActionButton'

const one = {
    buttonStyle: "num",
    text       : "1"
};

const two = {
    buttonStyle: "num",
    text       : "2"
};

const three = {
    buttonStyle: "num",
    text       : "3"
};

const four = {
    buttonStyle: "num",
    text       : "4"
};

const five = {
    buttonStyle: "num",
    text       : "5"
};

const six = {
    buttonStyle: "num",
    text       : "6"
};

const seven = {
    buttonStyle: "num",
    text       : "7"
};

const eight = {
    buttonStyle: "num",
    text       : "8"
};

const nine = {
    buttonStyle: "num",
    text       : "9"
};

const clear = {
    buttonStyle: "act",
    text       : "clear"
};

const zero = {
    buttonStyle: "act",
    text       : "0"
};

const divide = {
    buttonStyle: "sign",
    text       : <p>&divide;</p>
};

const multiply = {
    buttonStyle: "sign",
    text       : <p>&times;</p>
};

const subtract = {
    buttonStyle: "sign",
    text       : <p>&minus;</p>
};

const add = {
    buttonStyle: "sign",
    text       : <p>&plus;</p>
};

const equals = {
    buttonStyle: "sign",
    text       : <p>&equals;</p>
};


const Buttons = () => {
    return (
        <div className="Buttons">
            <div className="white">
                <ActionButton info={clear} />
                <NumberButton info={seven} />
                <NumberButton info={eight} />
                <NumberButton info={nine} />
                <NumberButton info={four} />
                <NumberButton info={five} />
                <NumberButton info={six} />
                <NumberButton info={one} />
                <NumberButton info={two} />
                <NumberButton info={three} />
                <ActionButton info={zero} />
            </div>
            <div className="red">
                <NumberButton info={divide} />
                <NumberButton info={multiply} />
                <NumberButton info={subtract} />
                <NumberButton info={add} />
                <NumberButton info={equals} />
            </div>
        </div>
    );
  };

  
  export default Buttons;
  