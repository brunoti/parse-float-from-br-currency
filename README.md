# Parse Float From Brazilian Currency

This is a simple function to transform a string like this:
```
R$ 2.839.039,38
```

To a float number like this:
```
2839039.38
```

Or maybe (in the future) like this:
```
2,839,039.38
```

## Setup

###### Node or Browserify
``` js
var parseFloatFromBrCurrecy = require('parse-float-from-br-currecy');
```

###### Browser (Global)
``` html
<script src="parse-float-from-br-currecy.js"></script>
```

## Usage
``` js
var price = 'R$ 2.839.039,38';

console.log(parseFloatFromBrCurrecy(price)); // Will return: 2839039.38 
console.log(typeof parseFloatFromBrCurrecy(price)); // Will return: "number" 
```

## License

MIT
