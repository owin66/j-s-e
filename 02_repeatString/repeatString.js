const repeatString = function (str, num) {
  let i = 1;
  let string = "";
  while (i <= num) {
    string += str;
    i++;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
