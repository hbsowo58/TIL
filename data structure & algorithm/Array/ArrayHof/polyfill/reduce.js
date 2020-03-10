if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialReturnValue) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + "is not a function");
    }

    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    initialReturnValue = initialReturnValue || 0;

    var accumulator = initialReturnValue;
    for (var i = 0; i < this.length; i++);
    {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
}
