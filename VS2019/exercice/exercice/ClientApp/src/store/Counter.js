"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var incrementCountType = 'INCREMENT_COUNT';
var decrementCountType = 'DECREMENT_COUNT';
var initialState = { count: 0 };
exports.actionCreators = {
    increment: function () { return ({ type: incrementCountType }); },
    decrement: function () { return ({ type: decrementCountType }); }
};
exports.reducer = function (state, action) {
    state = state || initialState;
    if (action.type === incrementCountType) {
        return __assign({}, state, { count: state.count + 1 });
    }
    if (action.type === decrementCountType) {
        return __assign({}, state, { count: state.count - 1 });
    }
    return state;
};
//# sourceMappingURL=Counter.js.map