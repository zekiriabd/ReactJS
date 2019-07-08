"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var Counter_1 = require("../store/Counter");
var Counter = function (props) { return (React.createElement("div", null,
    React.createElement("p", null,
        "Current count: ",
        React.createElement("strong", null, props.count)),
    React.createElement("button", { onClick: props.increment }, "Increment"))); };
exports.default = react_redux_1.connect(function (state) { return state.counter; }, function (dispatch) { return redux_1.bindActionCreators(Counter_1.actionCreators, dispatch); })(Counter);
//# sourceMappingURL=Counter.js.map