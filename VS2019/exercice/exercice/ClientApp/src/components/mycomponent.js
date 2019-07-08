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
var axios_1 = require("axios");
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Mycomponent = /** @class */ (function (_super) {
    __extends(Mycomponent, _super);
    function Mycomponent(props) {
        var _this = _super.call(this, props) || this;
        _this.btnGetData = function () {
            axios_1.default.get("api/User/GetUsers")
                .then(function (res) {
                _this.setState({ Users: res.data });
            }).catch(function (error) {
                console.log(error);
            });
        };
        _this.SetFirstName = function (e) { _this.setState({ FirstName: e.currentTarget.value }); };
        _this.SetLastName = function (e) { _this.setState({ LaststName: e.currentTarget.value }); };
        _this.btnAddUser = function (e) {
            var newUser = { FirstName: _this.state.FirstName, LastName: _this.state.LaststName };
            axios_1.default.post("api/User/SetUser", newUser)
                .then(function (res) {
                console.log(res.data);
            }).catch(function (error) {
                console.log(error);
            });
        };
        _this.state = {
            FirstName: "",
            LaststName: "",
            Users: [],
        };
        _this.btnGetData();
        return _this;
    }
    Mycomponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.Form, null,
                React.createElement("div", null,
                    React.createElement(react_bootstrap_1.Label, null, "First Name"),
                    React.createElement("input", { type: "text", value: this.state.FirstName, onChange: this.SetFirstName })),
                React.createElement("div", null,
                    React.createElement(react_bootstrap_1.Label, null, "Last Name"),
                    React.createElement("input", { type: "text", value: this.state.LaststName, onChange: this.SetLastName })),
                React.createElement(react_bootstrap_1.Button, { onClick: this.btnAddUser }, "Add")),
            React.createElement("ul", null, this.state.Users.map(function (user, i) {
                return (React.createElement("li", { key: i },
                    user.lastName,
                    " | ",
                    user.firstName,
                    " "));
            }))));
    };
    return Mycomponent;
}(React.Component));
exports.default = Mycomponent;
//# sourceMappingURL=mycomponent.js.map