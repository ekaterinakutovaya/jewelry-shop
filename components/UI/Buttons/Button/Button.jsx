import React from 'react';
import classNames from "classnames";

const Button = ({ type, children, onClick}) => {
    const btnClass = classNames({
      button: true,
      "button--light": type == "light",
      "button--dark": type == "dark"
    });
    return (
        <button
            className={btnClass}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;