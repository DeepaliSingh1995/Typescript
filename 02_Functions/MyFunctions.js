"use strict";
// In case of functions we need to explicitely define the datatype pf the parameter
Object.defineProperty(exports, "__esModule", { value: true });
// Returning a number from a function
function addTwo(num) {
    return num + 2;
}
addTwo(6);
// Returning a string from a function
function getupperCase(val) {
    return val.toUpperCase();
}
getupperCase("deepali");
// Returning multiple parameters from a function 
function signingUpAUser(email, name, isPaid) {
}
signingUpAUser("d@d.com", "Deeps", true);
// Returning multiple parameters from an arrow function and declaring the value of one parameter
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("test@test.com", "D");
