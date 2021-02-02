### Just one word for knowledge recall

1. foreach vs map:

`forEach()` — executes a provided function once for each array element.
`map()` — creates a new array with the results of calling a provided function on every element in the calling array.

Example:
```js

arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
// arr = [2, 4, 6, 8, 10]

let doubled = arr.map(num => {
    return num * 2;
});
// doubled = [2, 4, 6, 8, 10]

```


2. `viewport`: The viewport is the user's visible area of a web page.


3. `autoprefixer`: is a tool to automatically write the vendor properties,
it has been used fo support more properties for different browsers, such as IE, (polyfill consideration)

Example:

```css
a {
    transition: transform 1s;
}
/* After use autoprefixer, above code will be represented as this: */
a {
    -webkit-transition: -webkit-transform 1s;
    transition: -ms-transform 1s;
    transition: transform 1s;
}
```


4. `composition function`:

```js
const x = a => a + 1;
const y = a => a * 2;

console.log(x(y(5)))
```


5. `ORM` [Object Relational Mapper]
- concept: its a technique which helps developer talk to database more easier


6. `Service Worker`: A service worker is a `script` that stands between your website and the network, giving you, among other things, the ability to intercept network requests and respond to them in different ways.
 

7. Copy file by terminal commands

```shell
cp -a /source_folder/. /destination_folder/
```

<a href="https://askubuntu.com/questions/86822/how-can-i-copy-the-contents-of-a-folder-to-another-folder-in-a-different-directo" target="_blank">
    Reference
</a>


8. `pure` function vs `impure` function
- Pure function is predictable, because the output is based on the input and return a new value, which won't overwrite the previous value, it generates a new value, eg:

```js
// input: x and output: x * x
function square(x) {
    return x * x;
}
// items: previous value and new value: items.map(square)
function squareIt(items) {
    return items.map(square);
}
```
  * (note: reducer is pure function, because we need to make state predictable)

- Impure function has change effect, which means it may call database, do some logic to overwrite values and so on, eg:

```js
let outputs = [];

function square(x) {
  const newX = updateDatabase(x); // call database change value
  return newX * newX;
};

function squareIt(items) {
  for(let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
    // console.log(items[i]);
    outputs.push(items[i]);
  }
  return outputs;
};
// outputs overwrite items, output as a new array
```


9. `docker-compose`: A tool for running multiple docker containers at same time !!

- allow developers to input multiple commands based on different services (such as database services, api services and web app services and etc)
- Inside docker-compose file, dash (-) refers to array !!!


10. Instead of using `array[0]`, we can use `array.find(e => e == !!e)` (handy one) !!


11. `httpOnly: true` : don't want any javascript in browser to read or view the credentials like cookie


12. CI/CD:

CI -> Continuous Integration -> means merge code into current codebase
CD -> Continuous Deployment -> means deploy the latest changes to certain environment, like production

Tools: (Travis, BuildKite, Github actions and etc)

13. For handlebars: if you don't want Handlebars to escape a value, use the "triple-stash", `{{{`

<a href="https://www.topjavatutorial.com/handlebars-js/handlebars-js-escape-display-special-html-characters/" target="_blank">Reference here</a>

14. `useMemo` vs `useCallback`:

<p>useMemo: returns the value of that callback function</p>
<p>useCallback: returns the callback function</p>

15. Router: Like React router: just `switch one component views`, change DOM Node elements
  - hash: `window.addEventListener('hashChange', () => { ... });`
  - history: `history.pushState();`

Example: <a href="https://dev.to/kodnificent/how-to-build-a-router-with-vanilla-javascript-2a18" target="_blank">here</a>


16. Vue computed VS watcher:

Computed: for complex computations 
Watch: for API data fetching handling (eg: debounce)

Details in <a href="https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property" target="_blank">here</a> And <a href="https://vuejs.org/v2/guide/computed.html#Watchers" target="_blank">here</a>

17. 
