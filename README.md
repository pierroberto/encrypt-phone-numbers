# encrypt-phone-numbers

In order to encrypt any phone number, you just need to call the function **encryptNumber** and pass three arguments: the phone number (as string), the number of digits you want to hide and the symbol you want to use to hide the numbers

```javscript
encryptNumber('+1-541-754-3010', 5, 'X')
// Result :  +1-541-75X-XXXX
```

## Installation

* ``npm install 'encrypt-phone-number'``
* In your JS file: ``const encryptedNumber = require ('encrypt-phone-number') ``

