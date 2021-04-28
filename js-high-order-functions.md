### JavasScript High Order Functions

#### Concept:

Higher-order functions are functions that take other functions as arguments or return functions as their results.

<i>Redux thunk middleware is one of best examples of get a function as parameter and return a new function as output !!!</i> [Please check this repository: <a href="https://github.com/DamengRandom/recall-redux-thunks--hooks--2021" target="_blank">here</a>]


#### Code Example:

``` js
// The typical example could be map function calling a function as an argument and do some actions
const doubleup = value => value * 2;
const afterDoubleUp = [1, 2, 3].map(doubleup);
```

Another example: function return another function:

``` js
const sumUp = x => y => x + y;
sumUp(1)(2); // results is: 3
```

The typical examples of using high order functions are array methods: `map`, `filter` and `reduce`.
