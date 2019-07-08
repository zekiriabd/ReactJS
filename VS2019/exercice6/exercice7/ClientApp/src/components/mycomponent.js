"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Mycomponent = /** @class */ (function (_super) {
    __extends(Mycomponent, _super);
    function Mycomponent(props) {
        var _this = _super.call(this, props) || this;
        _this.SetFirstName = function (e) { _this.setState({ FirstName: e.currentTarget.value }); };
        _this.SetLastName = function (e) { _this.setState({ LaststName: e.currentTarget.value }); };
        _this.btnAddUser = function () {
            var newUser = { FirstName: _this.state.FirstName, LastName: _this.state.LaststName };
            _this.setState(function (prevState) { return ({ Users: prevState.Users.concat([newUser]) }); });
        };
        _this.btnDelUser = function (e) {
            if (e.currentTarget.value) {
                var index = parseInt(e.currentTarget.value, 10);
                var _users = _this.state.Users;
                _users.splice(index, 1);
                _this.setState({ Users: _users });
            }
        };
        _this.state = {
            FirstName: "",
            LaststName: "",
            Users: [],
        };
        return _this;
    }
    Mycomponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.Form, null,
                React.createElement("div", null,
                    React.createElement(react_bootstrap_1.Label, null, "First Name"),
                    React.createElement("input", { type: "text", value: this.state.FirstName, onChange: this.SetFirstName })),
                React.createElement("div", null,
                    React.createElement(react_bootstrap_1.Label, null, "Last Name"),
                    React.createElement("input", { type: "text", value: this.state.LaststName, onChange: this.SetLastName })),
                React.createElement(react_bootstrap_1.Button, { onClick: this.btnAddUser }, "Add"),
                React.createElement("ul", null, this.state.Users.map(function (user, i) {
                    return (React.createElement("li", null,
                        user.FirstName,
                        " | ",
                        user.LastName,
                        React.createElement(react_bootstrap_1.Button, { onClick: _this.btnDelUser, value: i }, "X")));
                })))));
    };
    return Mycomponent;
}(React.Component));
exports.default = Mycomponent;
//# sourceMappingURL=mycomponent.js.map