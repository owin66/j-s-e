const sumAll = function (a, b) {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
