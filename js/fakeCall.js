"use strict";

// Function.prototype.myFaceCall = function (otherThis, ...a) {
//   otherThis.fnName = this;
//   otherThis.fnName(...a);
// };

// function showMessage(args) {
//   console.log(args, this.name + " " + this.lastName);
// }

// const obj = {
//   name: "Arsen",
//   lastName: "Grigoryan",
// };

// showMessage.myFaceCall(obj, "Hello");

Function.prototype.customCall = function (self, ...rest) {
  self._fn = this;
  // prop descriptors
  return self._fn(...rest);
};

function ffffff(arg1, arg2, arg3) {
  console.log(this.name);
}
const user = {
  name: "Vrezh",
};
ffffff.call(user, 1, 2, 3);
ffffff.customCall(user, 1, 2, 3);
