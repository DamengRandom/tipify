### Javascript General Tips 

* (Only record the knowledge I always forget)

1. When you pass a function by name without parentheses, you are passing the function object itself. When you pass it with parentheses, you are passing the result of executing that function.

2. Why we use filter instead of find?

The find() method doesn’t work in IE <= 11. The filter() method works in all browsers, including IE9+.
<a href="https://www.c-sharpcorner.com/blogs/find-vs-filter-in-javascrtipt#:~:text=Find%20and%20Filter&text=The%20find()%20method%20returns,values%20in%20the%20array%20collection.&text=The%20filter()%20method%20returns,an%20array%20from%20the%20collection" target="_blank">Reference</a>

3. `Maps`:
In ES6: `Map` method which uses `get` and `set` methods to get and set values, code example:

```js
const map = new Map();
const KEY = {};
map.set(KEY, 'with a value'); // Set a value for key
map.get(KEY); // OUTPUT: with a value
map.has(KEY); // true
map.delete(KEY); // true
map.has(KEY); // false

// Another example:
const mapArray = new Map([
    [0, 'value 1'],
    [1, 'value 2'],
    [2, 'value 3'],
]);
mapArray.get(0); // OUTPUT: value 1
```

4. `Sets`: a unique value collections of data set, code example:

```js
const setUnique = new Set([1,2,3,4,4,7,8,94,1,2]); // OUTPUT: {1,2,3,4,7,8,94}
// convert setUnique set data to array format
const convertToArray = Array.from(setUnique); // OUTPUT: [1,2,3,4,7,8,94]
// Quick knowledge recall:
const obj = {a: 1, b: 2};
Object.keys(obj); // ['a', 'b']
Object.values(obj); // [1, 2]
Object.assign(obj, {c: 3});
```

5. `class` is a `function` type in ES6, example:

```js
class A { ... }
typeof A // OUTPUT: function
```

6. ES6: Another way to declare function (`['functionName'](){}`)

```js
var obj = {
  ['hi'](){ // ['functionName'](){} a new way to define function 
    console.log('hello')
  }
};

obj.hi(); // OUTPUT: hello
```

7. `Iterators` VS `Iterable`:

- Iterators: is a pointer for traversing the elements of a data structure

- Iterable: a data structure which wants its elements to be accessible to the public, 
    - values are iterable: 'Array', 'Maps', 'Strings', 'Sets'
    - plain objects are not iterable ..


8. Try to use `for-of` instead of using normal for loop, code example:

```js
var items = Array.of(...[1,2,3]);
for(var item of items) {
    console.log(item)
}
```

9. `Object.assign()` && `Object.defineProperty()`:

```js
Object.assign(obj, {newKey: newValue});
// example:
var assigneObject= Object.assign({}, {'newKey': 'newValue'});
assigneObject; // {newKey: 'newValue'}


Object.defineProperty(obj, prop, descriptor); // descriptor is an object which contains value and decide whether this object value is able to be reassigned or not=
// example:
var obj = Object.defineProperty({}, 'newProp', {
    value: 'prop value',
    writable: false
});
obj.newProp = 'new value assigned';
obj.newProp; // OUTPUT is 'prop value' because the writable is false !!!

```

10. `bind()`, `apply()`, `call()`:

- bind(): TBD

- apply(): TBD

- call(): TBD
