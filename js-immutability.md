### Javascript Immutability

#### Concept:

In JavaScript, if the variable is mutable, when we modifies the copy also the original variable get modified.
If ariable is immutable, when we modifies the copy, the copy does not affect the original variable.

2 major variable types: 
- primitive type: `string`, `null`, `undefined`, `boolean`, `number` and `symbol` (Immutable) [(Unchangable)]
- reference type: `object` and `array` (Mutable) [(Changable)]

We often use `map`, `filter`, `reduce` array methods to deal with variable vlaues in an immutable way 

#### Code Examples:

1. Primitive (Immutable) Type vs Reference (Mutable) Type
```js
// Primitive Example
var a = 10;
var b = a;
b = 20;
console.log(a, b); // 10 20 -> value of a stay unchanges
// original no change
// new value changed

// Reference Example
var x = {name: 'damon'};
var y = x;
y.name = 'unknown';
x.name; // unknown -> value of x get updated
// original changed
// new value changed

// Last note: JavaScript stores primitive value on the stack and stores reference value on the heap
```

2. Immutable way of handling data
```js
// filter array method:
var values = [{name: 'dameng', happy: true}, {name: 'unknown', happy: false}];
console.log('Output happy value(s)', values.filter(value => value.happy === true));
console.log('Output original values array: ', values); // values array stay unchanged

// spread operator: immutabel way handle data (basically assign to a new variable)
const newValues = [...values, {name: 'haha', happy: 'true'}];
console.log('Output newValues array: ', newValues);
console.log('Output original values array: ', values); // values array stay unchanged

// slice is get certain data without changing the original variable value(s)
const numbers = [1,2,3,4];
numbers.slice(0,3); // output as [1,2,3]
// and now we out numbers, we get
// [1,2,3,4] // which is unchanged (original unchanged) 
```

3. Difference between `push` and `concat`:
```js
// push method: (is mutable)
const values = [];
const pushValues = values.push({name: 'hehe', happy: true});
console.log('Output pushValues array: ', pushValues);
console.log('Output original values array: ', values); // values array stay unchanged

// concat method: (is immutable)
const concatValues = values.concat([{name: 'huhu', happy: true}]);
console.log('Output concatValues array: ', concatValues);
console.log('Output original values array: ', values); // values array stay unchanged

// Conclision: in redux, we use concat instead of push to handle our data !!!!
```


In React, `immutability` makes state more predictable, thats why we need `immutable` way to handle our variable values, especially `state`.

