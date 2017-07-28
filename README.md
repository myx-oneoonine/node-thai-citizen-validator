# thai-citizen-validator

simple way to validate thai citizenID.


| Input        | Output           
| ------------- |:-------------:| 
| String        | boolean | 


```js
let thaiCitizenIdIsValid = require('thai-citizen-validator')

if(thaiCitizenIdIsValid('1234567890121')) {
  ...
}
```

## or String.prototype.isThaiCitizenId()
we add custom string prototype for easy validate your citizenId.

```js

if('1234567890121'.isThaiCitizenId()) {
  ...
}

```

