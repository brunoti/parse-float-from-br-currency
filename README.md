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

## Instalation
With npm:
```
npm install --save parse-float-from-br-currecy
```

With Bower:
```
bower install --save parse-float-from-br-currecy
```

Or you can just [download a ZIP](https://github.com/brunoti/parse-float-from-br-currecy/archive/master.zip).

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
