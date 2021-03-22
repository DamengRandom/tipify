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


4. 
