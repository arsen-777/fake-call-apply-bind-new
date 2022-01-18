"use strcit";

Function.prototype.fakeBind = function (givenContext) {
  givenContext._fn = this;
  return function (...args) {
    return givenContext._fn(...args);
  };
};

function showMessage(txt) {
  console.log(this.name + " " + this.lastName);
}

const obj = {
  name: "Arsen",
  lastName: "Grigoryan",
};
let bind = showMessage.fakeBind(obj);
bind();
