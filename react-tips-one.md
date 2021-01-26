### React general tips


#### Make API call inside componentDidMount method instead of componentWillMount method:

Explanation:

Using a fetch call within `componentWillMount()` causes the component to render with empty data at first, because `componentWillMount()` will `NOT` return before the first render of the component.

Due to the fact that JavaScript events are async, when you make an API call, the browser continues to do other work while the call is still in motion. With React, while a component is rendering it `doesn’t wait` for `componentWillMount()` to finish, so the component continues to render.

<a href="https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n" target="_blank">Reference</a>



#### React Synthentic Events

Concept: whenever we are triggering an event in React Component, we are not actually dealing with the real DOM event, instead we are cope with React's custom event type, a synthentic event

Examples: `onClick()`, `onChange()`, `onBlur()` and etc ...

* Note: if you want to access the event properties in an asynchronous way, you need to use `event.persist()`. Normally, for synthentic events, we can't access event properties in an asynchronous way.

Reference: <a href="https://dev.to/nagwan/react-synthetic-events-34e5" target="_blank">here</a> And <a href="https://reactjs.org/docs/events.html" target="_blank">here</a>



#### React Side Effect

- Concept: it means anything that affects something outside of the scope of the current function thats being executed 
<!-- 影响与当前函数运行范围以外的（代码/功能） -->

In React, generally, side effects responsible for:
- API call from the server
- call authentication service
- Setting and clearing timers
- Interacting with the DOM

Reference <a href="https://frontarm.com/james-k-nelson/introduction-to-react-effects/" target="_blank">here</a>



#### Pure Component

- `React.PureComponent` make the component `NOT` getting re-rendered !!
- `React.PureComponent` implements `shouldComponentUpdate()` method
- Knowledge recall: `pure function`: given an input, and getting an output, thats it !!
- Why we use `PureComponent`: avoid unnecessary re-renders for the component and enhance the performance ..
- When we use `PureComponent`? When the time we do `NOT` want to re-render the component !! 

Example:

Please find it over <a href="https://stackblitz.com/edit/react-h8oehs?file=src%2FParentComponent.js" target="_blank">here</a>



#### React Reconciliation

Simple word: its talks about the `diffing algorithm`, React uses `key` attribute, make sure its unique !!
According to the `diffing algorithm`, we update the Virtual DOM tree and re-render the specific DOM element !!



#### React Portals

Render the `tooltips`, `Modal` code out of the `<body>{...}</body>` element, something looks like this:

```js
<body>
  {... body code logics ...}
</body>
// below part is React Portals code !!!
<div class="model"> 
  {... model code logics ...}
</div>
```


#### How to remove warning message inside useEffect like `[]`?

Concept is to set the function as a `ref`:

```js
// define a ref
const currentFetchRef = useRef(() => {});

// assign to current
currentFetchRef.current = async function fetchRandomData(pageNumber) {
  const response = await fetch(`https://randomuser.me/api?page=${pageNumber}`)
    .then((data) => data.json())
    .catch((error) => console.error(error));

  setStates({
    ...states,
    dataString: JSON.stringify(response.results, null, 2),
    totalDataLoaded: [
      ...states.totalDataLoaded,
      { [`page-${pageNumber}`]: response.results }
    ]
  });
};

// use the current ref function !!!
useEffect(() => {
  currentFetchRef.current(1);
}, []);
```

Example: <a href="https://codesandbox.io/s/hungry-brook-qb0g9?file=/src/App.js">Coded by me</a>

#### Error Boundaries

The idea of error boundary is a generic component that takes care of the errors for its children

