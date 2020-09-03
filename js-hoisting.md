### JavaScript Hoisting

#### Concept:

You can use the variable before the variable get declared

<i>* Note: In strict mode, you must declare the variable first before use the variable.</i>

Example:

``` js
// Workable example:

num = 10; // Assign 10 to num
el = document.getElementById("node"); // Find an element
el.innerHTML = num;           // Display num in the element
var num; // Declare num

// ERROR example:
word = 'hi';
console.log(word);
let word; // cause ERROR
// or
// const word; // cause ERROR
```

#### Quick word for JavaScript strict mode:

`"user strict"` is a mode ensure develoepr write better and secure code:

Under these mode, developer cannot do these:

``` js
// 1. None of these keywords can be used as variable name:
// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield
// eval

// eg:
var public = 1; // cause error in strict mode
var eval = 3.14; // The word "eval" cannot be used as a variable

// 2. Octal numeric literals are not allowed
var x = 010;

// 3. Octal escape characters are not allowed
var x = "\010";

// 4. Writing to a read-only property is not allowed
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;

// 5. Writing to a get-only property is not allowed
var obj = {get x() {return 0} };
obj.x = 3.14;

// 6. Deleting an undeletable property is not allowed
delete Object.prototype;
```