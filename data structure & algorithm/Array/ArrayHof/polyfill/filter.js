if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + "is not a function");
    }

    thisArg = thisArg || globalThis;

    var result = [];
    for (var i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) result.push(this[i]);
    }
    return result;
  };
}
