"use strict";

Function.prototype.myFaceCall = function (otherThis, ...a) {
  otherThis.fnName = this;
  otherThis.fnName(...a);
};

function showMessage(args) {
  console.log(args, this.name + " " + this.lastName);
}

const obj = {
  name: "Arsen",
  lastName: "Grigoryan",
};

showMessage.myFaceCall(obj, "Hello");
