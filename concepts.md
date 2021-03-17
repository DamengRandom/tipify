### Recall some concepts knowledge

1. Redux Thunk (RT): its a middleware like redux-sage which is used for handling action creator asynchronously !!!

One word: waiting for API request is done, then trigger dispatch action to put latest state data into reducer !!!

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

2. 
