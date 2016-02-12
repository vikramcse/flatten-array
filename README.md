# slim-array
Flatten the nested array

# Install
```sh
$ npm install --save slim-array
```

## Examples
```js
var slim = require('slim-array');

console.log(slim([1, 2, 3, [4, 5, 6, [7, 8, 9]]]));
// -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(slim("wrong args type"));
// -> wrong args type
```

## Usage

#### `require('slim-array')(array)`

**Arguments**:
- `array`: A nested array
- If wrong argument is passed insted of array then it throws an error

**Returns**: Returns a single slim array from a nested array.

## License

&copy; 2016 vikram. MIT License