if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + "is not a function");
    }

    thisArg = thisArg || globalThis;

    var result = [];
    for (var i = 0; i < this.length; i++) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
    return result;
  };
}
