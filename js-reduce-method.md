### JavaScript Reduce Method

There are few cases of using JavaScript reduce method:

Before start case, there is an sample data:
``` js
let family = [
  { id: '1', name: 'Damon', age: 30 },
  { id: '2', name: 'Ella', age: 2 },
  { id: '3', name: 'Mrs Unknown', age: 29 }
];
```


<b>Case 1:</b> Use for count number of element inside array:

```js
let countResult = undefined;
countResult = family.reduce((acc, person) => {
  console.log('accumulate countResult: ', acc);
  return acc + 1;
}, 0);

console.log('use for count: ', countResult);
```


<b>Case 2:</b> Use for sum elements, such as sum ages:

```js
let sumAgesResult = undefined;
sumAgesResult = family.reduce((acc, person) => {
  // console.log('accumulate sumAgesResult: ', acc);
  return acc + person.age
}, null);

console.log('use for sum ages: ', sumAgesResult); 
// result: use for sum ages:  61
```


<b>Case 3:</b> Use for build a new array of names, like map function:

```js
let arrayOfNames = undefined;
arrayOfNames = family.reduce((acc, person) => {
  return [...acc, person.name]
}, []);

console.log('use for array of names: ', arrayOfNames);
```


<b>Case 4:</b> Use for find an element, such as find a name:

```js
let findByName = undefined;

findByName = (name) => family.reduce((acc, person) => {
  if (person.name === name) {
    acc = true;
  }

  return acc;
}, false);

console.log('find by name: ', findByName('Ella'));
```


<b>Case 5:</b> Use for return a conditional result:

```js
let recordOver18 = undefined;

const ageCondition = (acc, person, age) => {
  if(person.age > age) {
    return [...acc, person];
  }
  return acc;
};

// recordOver18 = family.reduce((acc, person) => {
//   return ageCondition(acc, person, 18);
// }, []);

recordOver18 = family.reduce((acc, person) => ageCondition(acc, person, 18), []);

console.log('record age over 18: ', recordOver18);
```


<b>Case 6:</b> Use for count occurrences:

```js
let statusData = [
  {id: '1', status: 'Pending'},
  {id: '2', status: 'Pending'},
  {id: '3', status: 'InProgress'},
  {id: '4', status: 'Abort'},
  {id: '5', status: 'Done'},
  {id: '6', status: 'Abort'},
  {id: '7', status: 'Abort'},
];

let occurrences = undefined;

occurrences = statusData.reduce((acc, data) => {
  return { ...acc, [data.status]: (acc[data.status] || 0) + 1 }
}, {});

console.log('count occurrences: ', occurrences);
```


<b>Case 7:</b> flatten: (destructure nested arrays into one array):

```js
let nestedArray = [
  'element 1',
  ['element 2', 'element 3'],
  ['element 4', ['element 5', 'element 6', ['element 7']]]
];
let cleanupVersion = [];

const flatten = (acc, element) => {
  if (Array.isArray(element)) {
    return [...acc, ...element.reduce(flatten, [])];
    // recursive operation: calling flatten function
  }

  return [...acc, element];
};

cleanupVersion = nestedArray.reduce((acc, element) => flatten(acc, element), []);

console.log('After flatten interaction, the destructured array: ', cleanupVersion);
```


Additional tips: how to create my own reduce function?
This is how reduce method works, basically ```a recursive callback function inside a for loop```
```js
let reducerResult = undefined;
const reducer = (array, cb, initValue) => {
  let acc = initValue;
  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i]);
  };

  return acc;
};

reducerResult = reducer([1, 2, 3, 4, 5, 6], (acc, num) => acc + num, 0);

console.log('my own reduce function output result: ', reducerResult);
```
