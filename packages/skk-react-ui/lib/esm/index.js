import React from 'react';

var style = {"base":"Button-module_base__3aZlL"};

const Button = (props) => {
    return (React.createElement("button", { className: style.base }, props.children));
};

var style$1 = {"a":"Tab-module_a__2qdX9"};

const Tab = () => {
    return (React.createElement("span", { className: style$1.a }, "sdf"));
};

export { Button, Tab };
