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



#### For simple Redux flow recall

Please check codebase <a href="https://github.com/DamengRandom/react-redux-typescipt">react-redux-typescipt</a> ~~ (For year 2021)



#### How to implement Redux Saga (Basic workflow for recall only !!)

```js
// Step 1: create store and connect to the app
// middleware initial
const sagaMiddleware = createSagaMiddleware();
// store
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);
// run sagas
sagaMiddleware.run(rootSaga);

// Step 2: Write Saga functions (API caller + Saga caller)
function getUsersAPICall() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .catch(err => { throw err });
}

function* fetchUsers() {
  try {
    const users = yield call(getUsersAPICall);
    yield put({ type: GET_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: GET_USERS_FAILED, message: error.message });
  }
}

export default function* usersSaga() {
  yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
}

// Step 3: write reducer function
const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    default:
      return state;
  }
};

// Step 4: write action function

export function getUsersAction(users) {
  return {
    type: GET_USERS_REQUESTED,
    payload: users,
  }
};

// Step 5: Implement for UI component

export default function User() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && !loading && <p>{error}</p>}
      {users && users.length > 0 && !loading && users.map(
        (user, index) => <Card key={`user-${index}`} user={user} />)}
      {users && !loading && users.length === 0 && <p>No users yet ..</p>}
    </div>
  )
}

// For the complete code details, please check codebase: "redux-redux-saga-recall-2021"
```
