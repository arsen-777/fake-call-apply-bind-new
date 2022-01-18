"use strict";

Function.prototype.faceApply = function faceApply(self, rest) {
  self._fn = this;
  return self._fn(...rest);
};

function fn(arg1, args) {
  console.log(this.name);
}
const user = {
  name: "Vrezh",
};
fn.apply(user, [1, 2, 3]);
fn.faceApply(user, [1, 2, 3]);

// let numbers = [5, 6, 2, 3, 7];

// let max = Math.max.apply(null, numbers);
// console.log(max);
