### Recall some concepts knowledge

1. <strong>Redux Thunk (RT)</strong>

-- its a middleware like redux-sage which is used for handling action creator asynchronously !!!

-- One word: waiting for API request is done, then trigger dispatch action to put latest state data into reducer !!!

Classic Example:

```js
export function fetchProducts() {
  const request = axios.get('https://some.domain.app.com/products'); // API call

  return (dispatch) => {
    request.then(({ data }) => { // wait for API is done (request got some data) !!!
      dispatch({ type: 'ACTION_TYPE', payload: data }); // the trigger the dispatch action !!!
    })
  };
}
```


2. <strong>Framework vs library</strong>
 
Library > framework (library contains framework), your code will get called by the framework functions and your code will call the library functions


3. <strong>React Hooks</strong>

-- its a function hooks react state and lifecycle functions for functional components

-- hook function is for making developer life easier, using shorter logic to represent same logic as class component does, such as life cycle method

-- can create own/customized hook functions to be reusable

-- Available after React v16.8


4. 5 patterns we need to know as Senior developer:
<a href="https://www.youtube.com/watch?v=FLmBqI3IKMA" target="_blank">Click</a>


* Singleton pattern: like a given class can only has one instance at a time, doing functionalities eg: list of client configurations, database driver, current state in the app (redux store maybe) and etc ..

* Adapter(Bridge) pattern: like a database driver, can have a common driver interface, and multiple concrete implementations like, mongo database, or dynamodb database. (We can have an abstract class for multi-purposes, think about camera connector can have multiple different lens !!)

* Observer pattern: 2 roles (publisher: give stuff [eg: event(s)] && subscriber: listen stuff [eg: event(s)]), it allow losing coupling between publisher and subscriber !!


🎏 Mindset: Use these patterns when we found codebase(s) need them !!!!!!!!!!!!!!

5. 
