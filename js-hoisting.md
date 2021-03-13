### JavaScript Hoisting


#### Before start:

```js
// Normal variable lifecycle
let variable;                 // Declaration
variable = "hoisting";        // Assignment
console.log(variable);        // Usage
```


#### Concept:

`Hoisting` is a JavaScript default behavior of moving all declarations to the top of current scope (eg: top of function or script file)

Normally we said: "You can use the variable before the variable get declared"

<i>* Note: In strict mode, you must declare the variable first before use the variable !!</i>


#### Examples:

Example 1: general case (global level)

``` js
// Workable example:

num = 10; // Assign 10 to num
el = document.getElementById("node"); // Find an element
el.innerHTML = num;           // Display num in the element
var num; // Declare num

// ERROR example:
word = 'hi';
console.log(word);
let word; // cause: Uncaught ReferenceError: Cannot access 'word' before initialization
// or
// const word; // cause: Uncaught SyntaxError: Missing initializer in const declaration
// or
// var word; // 'hi'
```

Example 2: assign undeclared variable to GLOBAL variable

```js
  function hoisting() {
    x = 1; // by default, if we didn't put let or var or const, x will be treated as global variable
    // principle: assign undeclared variable to GLOBAL variable
    let y = 2;
    
  }

  hoisting();
  console.log('x: ', x); // x: 1
  console.log('y: ', y); // Uncaught ReferenceError: y is not defined
```

Example 3: scoped function hoisting error

```js
function scoped() {
  console.log(name); // undefined
  var name = 'damon';
}

scoped();
```

Example 4: function hoisting

```js
// No error case
hi();

function hi () {
  console.log("Hello!");
};

// Error case

aloha();
// TypeError

var aloha = function aloha() {
    console.log("Hello!");
};

// TypeError means we're trying to do something with a value that is not allowed
```


#### Conclusion:

<strong>Please always declare all variables at the beginning of every scope, this is how JavaScript interprets the code, it is always a good rule to follow</strong>
