### Redux recalls

#### understand redux store (learnt from Dan)

```js
// mock a redux store
const mockReduxStore = (reducer) => {
  let state = { counters: 0 }, listeners = [];

  const getState = () => state; // return current latest states
  const dispatch = (action) => {
    state.counters = reducer(state.counters, action); // dispatch send new data to reducer function
    listeners.forEach(listener => listener()); // when states updated, we need to notify every listener we have new state updated !!!!, so we call each of listener and tell them a new state updated result !!
    // console.log('counters value? ', state.counters);
  }

  const subscribe = (listener) => {
    listeners.push(listener); // add new listener into listeners array
    return () => {
      listeners = listeners.filter(l => l !== listener); // remove listener to current listeners array (also called: unsubscribe listener)
    }
  }
  // listeners are used to tracking changes, when changes are requested by dispatch function, list

  dispatch({}); // we want to make initial state populated !!!!

  return { getState, dispatch, subscribe };
};

var store = mockReduxStore(counterReducer);

export default store;
// reference: https://egghead.io/lessons/react-redux-store-methods-getstate-dispatch-and-subscribe
```
