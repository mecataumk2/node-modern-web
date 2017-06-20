exports.abs = function (number) {
  let absNumber = number;
  if (number < 0) {
    absNumber = -number;
  }
  return absNumber;
};

exports.circleArea = function (radius) {
  return radius * radius * Math.PI;
};
