### React Hooks Tips

### Example codebase
Please find my personal react hooks practices <a href="https://github.com/DamengRandom/hooks-recall" target="_blank">here</a>.


#### useMemo vs useCallback
- <p>`useMemo`: returns the value of that callback function</p>
- <p>`useCallback`: returns the callback function</p>


#### useContext

Usage: share state values between components

- Example:

```js
// Step 1: Define a context:
import { createContext } from 'react';
export default createContext(null);

// Step 2: set context provider value:
import UserContext from '../src/context/UserContext';

<UserContext.Provider value={{ userData, setUserData }}>
  ...
</UserContext.Provider>

// complete example:

import UserContext from '../src/context/UserContext';

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }

      try {
        const tokenResponse = await axios.post('http://localhost:6285/user/tokenIsValid', null, {
          headers: {
            "x-auth-token": token
          }
        });

        if (tokenResponse.data) {
          const getCurrentUser = await axios.get('http://localhost:6285/user', {
            headers: {
              "x-auth-token": token
            }
          });

          if (getCurrentUser) {
            setUserData({
              token,
              user: getCurrentUser.data
            });
          }
        } 
      } catch (error) {
        console.log("error: ", error.message);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        </UserContext.Provider>
    </BrowserRouter>
  )
}

// Step 3: use context value in components:
import UseContext from '../context/UserContext';

const { userData: { user } } = useContext(UseContext);

// complete example:

export default function Home() {
  const [preLoader, setPreLoader] = useState(false);
  const { userData: { user } } = useContext(UseContext);
  const history = useHistory();

  useEffect(() => {
    setPreLoader(true);
    if (!user) {
      setPreLoader(false);
      history.push('/login');
    }
    setPreLoader(false);
  }, [history, user]);

  return preLoader ? (<p>Loading ..</p>) : (
    <div className="page">
      Home
    </div>
  )
}

// Find details on codebase: mern-jwt-trial-front-end
```


#### useReducer

- TBD


#### Another useMemo/memo, useCallback example

Normally we try to avoid unnecessary re-render, we use memo or useMemo, and we parent passes `array or object (reference type of data)` to child, we need to use useMemo to avoid the re-render issue !!

When we pass function to child, we use useCallback for it

Code example of using useMemo:

```jsx
// Find code from: https://github.com/DamengRandom/hooks-recall/blob/master/src/components/useMemoUseCallbackThirdExample/TheParent.jsx#L12
// parent component:
const arrayReference = React.useMemo(() => [1, 2, 3], []);

// child component:
<SecondChild arrayReference={arrayReference} />
```

Code example of using useCallback:

```jsx
// parent component
const fetcher = React.useCallback((type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
    .then(response => response.json())
    .then(json => console.log(json));
}, []);

React.useEffect(() => {
  fetcher('todos');
}, [fetcher]);

// child component:
<ThirdChild fetcher={fetcher} />
```

<b>Last point: when every time we saw the dependencies comes from parent level, we may need to consider whether shall we use related useMemo/memo or useCallback hooks to enhance the performance</b>
