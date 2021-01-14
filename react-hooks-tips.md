### React Hooks Tips

### Example codebase
Please find my personal react hooks practices <a href="https://github.com/DamengRandom/hooks-recall" target="_blank">here</a>.

#### useMemo vs useCallback
- <p>useMemo: returns the value of that callback function</p>
- <p>useCallback: returns the callback function</p>

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

