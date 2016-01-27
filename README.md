# flatten-array
Flatten the nested array

# Usage
```js
var flat = require('flatten-array');

console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]]));
// -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(flat("wrong args type"));
// -> wrong args type
```