### JavaScript Closure

Before everything, we need to know JavaScript has 2 types of variables, `global` & `local` variable !!

#### Concept:

function having access to parent scope, especially function can use variable which defined outside of the function !!!

Example:

``` js
var value = 0; // variable declared outside of function outputValue
function outputValue() {
  function plus () { value = value + 1 }; // value can be used inside the function
  plus();
  return value; // will return 1 as result
};
outputValue();
```