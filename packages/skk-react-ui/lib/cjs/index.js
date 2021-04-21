'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var style = {"base":"Button-module_base__3aZlL"};

const Button = (props) => {
    return (React.createElement("button", { className: style.base }, props.children));
};

var style$1 = {"a":"Tab-module_a__2qdX9"};

const Tab = () => {
    return (React.createElement("span", { className: style$1.a }, "sdf"));
};

exports.Button = Button;
exports.Tab = Tab;
