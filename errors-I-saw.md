### Some errors I saw before

1. Common `Cannot read property 'property' of undefined` error:

```js
// Case 1:

function x() {
  const val = {a: { b: [] } };
  if(val.a.b[0] === 1) {
    return 'I love JavaScript';
  }
  return 'nope ...';
}

x();
// nope ...

// Case 2:

function x() {
  const val = {a: { b: undefined } };
  if(val.a.b[0] === 1) {
    return 'I love JavaScript';
  }
  return 'wrong ...';
}

x();
// VM31650:3 Uncaught TypeError: Cannot read property '0' of undefined
//     at x (<anonymous>:3:13)
//     at <anonymous>:9:1

// Case 3:

function x() {
  const val = null;
  if(val && val.a && val.a.b && val.a.b[0].value === 1) {
    return 'I love JavaScript';
  }
  return 'nope ...';
}

x();
// nope ...

// Case 4:

var val = {a: {b: [] }};
var thresh = {q: [1]}
function x() {
  if((val && val.a && val.a.b && val.a.b[0] && val.a.b[0].value) === (thresh && thresh.q && thresh.q[0])) {
    return 'I love JavaScript';
  }

  return 'nope ...';
}

x();
// nope ...
val.a.b[0];
// undefined
(val && val.a && val.a.b && val.a.b[0] && val.a.b[0].value);
// undefined
thresh && thresh.q && thresh.q[0];
// 1
val.a.b[0].value;
// VM104:1 Uncaught TypeError: Cannot read property 'value' of undefined
// at <anonymous>:1:12
```


2. Uncaught ReferenceError: `variable` is not defined

```js
  function error() {
    let y = 2;
  }

  error();
  console.log('y: ', y); // Uncaught ReferenceError: y is not defined
```


3. Uncaught TypeError: `functionName` is not a function

```js
aloha();
// TypeError

var aloha = function aloha() {
    console.log("Hello!");
};

// TypeError means we're trying to do something with a value that is not allowed
```


4. 
