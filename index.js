'use strict';
function makeFlat (arr) {
  return arr.reduce(function (flat, nonFlat) {
    return flat.concat(Array.isArray(nonFlat) ? makeFlat(nonFlat) : nonFlat);
  }, []);
}

module.exports = function (list) {
  if (!Array.isArray(list)) {
    return list;
  } else {
    return makeFlat(list);
  }
};
