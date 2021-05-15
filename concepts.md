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


<strong>6.</strong>
