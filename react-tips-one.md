### React general tips


#### Make API call inside componentDidMount method instead of componentWillMount method:

Explanation:

Using a fetch call within `componentWillMount()` causes the component to render with empty data at first, because `componentWillMount()` will `NOT` return before the first render of the component.

Due to the fact that JavaScript events are async, when you make an API call, the browser continues to do other work while the call is still in motion. With React, while a component is rendering it `doesn’t wait` for `componentWillMount()` to finish, so the component continues to render.

<a href="https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n" target="_blank">Reference</a>



#### React Synthetic Events

Concept: whenever we are triggering an event in React Component, we are not actually dealing with the real DOM event, instead we are cope with React's custom event type, a synthetic event

Examples: `onClick()`, `onChange()`, `onBlur()` and etc ...

* Note: if you want to access the event properties in an asynchronous way, you need to use `event.persist()`. Normally, for synthetic events, we can't access event properties in an asynchronous way.


When we use `event.persist()`?

Code example:

```js
export class PageChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist(); // we need to use persist because of event has been used inside setState() callback function
    this.setState(prevState => ({
      page: prevState + event.target.value // event is used inside setState() callback function (here)
    }));
  }

  render() {
    return <button onClick={this.handleClick}>Check Page</button>;
  }
}
// Reference: https://deepscan.io/docs/rules/react-missing-event-persist#:~:text=persist()%20should%20be%20called,inside%20an%20asynchronous%20callback%20function&text=This%20rule%20applies%20when%20a,callback%20function%20without%20calling%20event.&text=If%20you%20need%20to%20access,an%20asynchronous%20callback%20function%2C%20event.
```

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
<div class="portal-modal"> 
  {... modal code logics ...}
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



#### forwardRef

Code example:

```js
import React from "react";

const ForwardInput = React.forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      name="forwardInput"
      placeholder="trigger input focus effect by clicking button"
    />
  );
});

export class InputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  inputRef = React.createRef();

  handleClick() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <ForwardInput ref={this.inputRef} />
        <button onClick={this.handleClick}>Click me to focus on input</button>
      </div>
    );
  }
}

export default InputWrapper;
```



#### React JSX

JSX stands for JavaScript XML

JSX allows us to write HTML in React

JSX made our life easier because we don't need to use `createElement()` or `appendChild()` to add HTML into DOM.

Example:

Without JSX

```js
const es6El = React.createElement('p', {}, 'Hi there ..'); // without JSX, headache
ReactDOM.render(es6El, document.getElementById('root'));
```

With JSX

```js
const jsxEl = <p>Hi there ..</p>;
ReactDOM.render(jsxEl, document.getElementById('root')); // life is easier ..
```

JSX expression: `{}`, eg: `{variableName}`
