### JavaScript Immutability

#### Concept:

In JavaScript, if the variable is mutable, when we modifies the copy also the original variable get modified.
If variable is immutable, when we modifies the copy, the copy `does not affect the original variable`.

2 major variable types: 
- primitive type: `string`, `null`, `undefined`, `boolean`, `number` and `symbol` (Immutable) [(Unchangeable)]
- reference type: `object` and `array` (Mutable) [(Changeable)]

We often use `map`, `filter`, `reduce` array methods to deal with variable values in an immutable way 

#### Code Examples:

1. Primitive (Immutable) Type vs Reference (Mutable) Type
```js
// Primitive Example
var a = 10;
var b = a;
b = 20;
console.log(a, b); // 10 20 -> value of 'a' stay unchanged
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


2. Immutable way of handling data !!!!!
```js
// filter array method:
var values = [{name: 'dameng', happy: true}, {name: 'unknown', happy: false}];
console.log('Output happy value(s)', values.filter(value => value.happy === true));
console.log('Output original values array: ', values); // values array stay unchanged

// spread operator: immutable way handle data (basically assign to a new variable)
const newValues = [...values, {name: 'haha', happy: 'true'}];
console.log('Output newValues array: ', newValues);
console.log('Output original values array: ', values); // values array stay unchanged

// slice is get certain data without changing the original variable value(s)
const numbers = [1,2,3,4];
numbers.slice(0,3); // output as [1,2,3]
// and now we output numbers, we get
// [1,2,3,4] // which is unchanged (original unchanged) 
```


3. Difference between `push` and `concat`:
```js
// push method: (is mutable)
const values = [];
const pushValues = values.push({name: 'hehe', happy: true});
console.log('Output pushValues array: ', pushValues); // 1
console.log('Output original values array: ', values);
// values array get changed form [] to [{name: 'hehe', happy: true}]

// concat method: (is immutable)
const concatValues = values.concat([{name: 'huhu', happy: true}]);
console.log('Output concatValues array: ', concatValues);
// [{name: 'hehe', happy: true}, {name: 'huhu', happy: true}]
console.log('Output original values array: ', values); // values array stay unchanged !!!

// Conclusion: in redux, we use concat instead of push to handle our data (Immutable way) !!!!
```


In React, `immutability` makes state more predictable, that's why we need `immutable` way to handle our variable values, especially `state`.

Good tool: <a href="https://immutable-js.github.io/immutable-js/" target="_blank">immutable.js</a>


4. Common library `Immutable.JS` usages:

`Map()`:

```js
Immutable.Map() // {} returns an empty object
// If we do this, Immutable.Map({ a: 1, b: 2})
// it will return {'a' => 1, 'b' => 2} as the result
const map1 = Immutable.Map({a: 1, b: 2});
const map2 = map1.set('b', 10);
console.log(map2); // {"a" => 1, "b" => 10} // get updated!!!
console.log(map1); // {"a" => 1, "b" => 2} // stay unchanged!
const menuArray = [['first', 'fries'],
['second', 'chips']];
// then, covert to Map:
Immutable.Map(menuArray) // {'first' => 'fries', 'second' => 'chips'}
```

`List()` vs `List.of()`

`List()`: takes a single parameter of some kind of iterable-like structure
`List.of()`: use each parameter as a separate element in the created list

```js
// Eg 1:
const str = 'text';
Immutable.List(str) // ['t', 'e' ,'x' ,'t']
Immutable.List.of(str) // ['text']

// Eg 2:
List.of("a", "b", "c"); // ["a", "b", "c"]
List(["a", "b", "c"]); // ["a", "b", "c"]
```
