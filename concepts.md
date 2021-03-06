### Recall some concepts knowledge

<strong>1.</strong> Redux Thunk (RT)

-- its a middleware like redux-saga which is used for handling action creator asynchronously !!!

-- one word: waiting for API request is done, then trigger dispatch action to put latest state data into reducer !!!

Classic Example:

```js
export function fetchProducts() {
  const request = axios.get('https://some.domain.app.com/products'); // API call

  return (dispatch) => {
    request.then(({ data }) => { // wait for API is done (request got some data) !!!
      dispatch({ type: 'ACTION_TYPE', payload: data }); // then trigger the dispatch action !!!
    })
  };
}
```


<strong>2.</strong> Redux Saga (RS)

-- It is a middleware library for handling redux side effects, when we trigger some actions and then trigger state change, and later you need to reflect these changes for some purposes.

eg: fetch new data and then after new data fetched, we need to get the data displayed for the users, which means fetch process must be done and redux store needs to be updated before re-rendering latest data, so saga is handling this steps (`fetch data -> update redux store -> show latest data`) synchronously, but the coding looks like asynchronous style ~~

Core tech: Redux Saga is using generators functions which is like a bookmark, eg: `yield ...`

Good resource <a href="https://flaviocopes.com/redux-saga/#:~:text=Redux%20Saga%20is%20a%20library,derives%20from%20this%20state%20change" target="_blank">here</a>

Code example:

Pleas check Redux recalls note <a href="https://dm-tipify.netlify.app/redux-tips.html" target="_blank">here</a>



<strong>3.</strong> React Hooks

-- its a function hooks react state and lifecycle functions for functional components

-- hook function is for making developer life easier, using shorter logic to represent same logic as class component does, such as life cycle method

-- can create own/customized hook functions to be reusable

-- available after React v16.8


<strong>4.</strong> Framework vs Library
 
Library > framework (library contains framework), your code will get called by the framework functions and your code will call the library functions


<strong>5.</strong> Patterns we need to know as Senior developer

* Singleton pattern: like a given class can only has one instance at a time, doing functionalities eg: list of client configurations, database driver, current state in the app (redux store maybe) and etc ..

* Adapter(Bridge) pattern: like a database driver, can have a common driver interface, and multiple concrete implementations like, mongo database, or dynamodb database. (We can have an abstract class for multi-purposes, think about camera connector can have multiple different lens !!)

* Observer pattern: 2 roles (publisher: give stuff [eg: event(s)] && subscriber: listen stuff [eg: event(s)]), it allow losing coupling between publisher and subscriber !!


🎏 Mindset: Use these patterns when we found codebase(s) <b>NEED</b> them !!!!!!!!!!!!!!

Reference: <a href="https://www.youtube.com/watch?v=FLmBqI3IKMA" target="_blank">Click</a>


<strong>6.</strong> Big `O` notation

Purpose: Analyzing the algorithm you created !!

The time complexity is based on the operations inside loop, for instance:

```js
for (let i = 0; i < list.length; i++) {
  newList[i] = [];
  for (let j = 0; j < list.length; j++) {
    newList[i][j] = list[i];
    console.log(newList[i]); // n ^ 2
  }
}

// vs

for (let i = 0; i < list.length; i++) {
  console.log(list[i]); // n
}
```


Examples below:

1). `O(1)`: because we already know the output is the fixed value

```js
const list = ['a', 'b', 'c'];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// output:
// a
// b
// c
```

2). `O(n)`: we need to generate the new output based on the input

```js
const list = ['a', 'b', 'c'];
const newList = [];
for (let i = 0; i < list.length; i++) {
  newList[i] = list[i];
  console.log(newList[i]);
}

// output:
// a
// b
// c
```

3). `O(n^2)`: double time complexity, because 2 list loops need to be calculated/operated

```js
const list = ['a', 'b', 'c'];
const newList = [];
for (let i = 0; i < list.length; i++) {
  newList[i] = [];
  for (let j = 0; j < list.length; j++) {
    newList[i][j] = list[i];
    console.log(newList[i][j]);
  }
}

// output:
// 3 a // 3 means 3 times
// 3 b
// 3 c
```

4). `O(n^2 + n) = O(n^2)`: `+ n` will be treated as 0, because `n^2`

```js
const list = ['a', 'b', 'c'];
const newList = [];
for (let i = 0; i < list.length; i++) {
  newList[i] = [];
  for (let j = 0; j < list.length; j++) {
    newList[i][j] = list[i];
    console.log(newList[i][j]);
  }
}

for(let k = 0; k < list.length; k++) {
  console.log(list[k]);
}

// output:
// 3 a // 3 means 3 times
// 3 b
// 3 c
// a
// b
// c
```

5). `O(n + m)`: 2 different loops

```js
const list = ['a', 'b', 'c'];
const anotherList = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < anotherList.length; j++) {
    console.log(`Lists data: ${anotherList[j]}, ${list[i]}`);
  }
}
// output:
// Lists data: 1, a
// Lists data: 2, a
// Lists data: 3, a
// Lists data: 4, a
// Lists data: 5, a
// Lists data: 6, a
// Lists data: 1, b
// Lists data: 2, b
// Lists data: 3, b
// Lists data: 4, b
// Lists data: 5, b
// Lists data: 6, b
// Lists data: 1, c
// Lists data: 2, c
// Lists data: 3, c
// Lists data: 4, c
// Lists data: 5, c
// Lists data: 6, c
```

References

1. Document: <a href="https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1176/handouts/midterm/5-BigO.pdf" target="_blank">here</a>

2. Video Study: <a href="https://www.youtube.com/watch?v=itn09C2ZB9Y" target="_blank">here</a>


<strong>7.</strong>
