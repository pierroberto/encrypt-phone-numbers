# encrypt-phone-numbers

In order to use this function in your script add the following line at the top of your js file:

``
const encryptedNumber = require ('encrypt-phone-number')
``

In order to encrypt any phone number, you just need to call the function **encryptNumber** and pass two arguments: the phone number (as string) and the number of digits you want to hide.
After you added the function to your js file you can call the function as following:

```javscript
encryptedNumber('+1-541-754-3010', 5)
// Result :  +1-541-75X-XXXX
```
The function ignores any symbol than numbers during the encryption, indeed any number format can be used.
