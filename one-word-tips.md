### Just one word for knowledge recall

<b>1.</b> foreach vs map:

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


<b>2.</b> `viewport`: The viewport is the user's visible area of a web page.


<b>3.</b> `autoprefixer`: is a tool to automatically write the vendor properties,
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


<b>4.</b> `composition function`:

```js
const x = a => a + 1;
const y = a => a * 2;

console.log(x(y(5)))
```


<b>5.</b> `ORM` [Object Relational Mapper]
- concept: its a technique which helps developer talk to database more easier

* ORM complementary note:

- translate between data in a relational database and the javascript objects in your application

Typical example: `Objection.js`

- No matter of using either ORM or query builder, under the hood, it always uses SQL to talk to database

Reference <a href="https://dzone.com/articles/the-complete-tutorial-on-the-top-5-ways-to-query-y-1" target="_blank">here</a>


<b>6.</b> `Service Worker`: A service worker is a `script` that stands between your website and the network, giving you, among other things, the ability to intercept network requests and respond to them in different ways.
 

<b>7.</b> Copy file by terminal commands

```shell
cp -a /source_folder/. /destination_folder/
```

<a href="https://askubuntu.com/questions/86822/how-can-i-copy-the-contents-of-a-folder-to-another-folder-in-a-different-directo" target="_blank">
    Reference
</a>


<b>8.</b> `pure` function vs `impure` function
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


<b>9.</b> `docker-compose`: A tool for running multiple docker containers at same time !!

- allow developers to input multiple commands based on different services (such as database services, api services and web app services and etc)
- Inside docker-compose file, dash (-) refers to array !!!


<b>10.</b> Instead of using `array[0]`, we can use `array.find(e => e == !!e)` (handy one) !!


<b>11.</b> `httpOnly: true` : don't want any javascript in browser to read or view the credentials like cookie


<b>12.</b> CI/CD:

CI -> Continuous Integration -> means merge code into current codebase
CD -> Continuous Deployment -> means deploy the latest changes to certain environment, like production

Tools: (Travis, BuildKite, Github actions and etc)

<b>13.</b> For handlebars: if you don't want Handlebars to escape a value, use the "triple-stash", `{{{`

<a href="https://www.topjavatutorial.com/handlebars-js/handlebars-js-escape-display-special-html-characters/" target="_blank">Reference here</a>

<b>14.</b> `useMemo` vs `useCallback`:

<p>useMemo: returns the value of that callback function</p>
<p>useCallback: returns the callback function</p>

<b>15.</b> Router: Like React router: just `switch one component views`, change DOM Node elements
  - hash: `window.addEventListener('hashChange', () => { ... });`
  - history: `history.pushState();`

Example: <a href="https://dev.to/kodnificent/how-to-build-a-router-with-vanilla-javascript-2a18" target="_blank">here</a>


<b>16.</b> Vue computed VS watcher:

Computed: for complex computations 
Watch: for API data fetching handling (eg: debounce)

Details in <a href="https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property" target="_blank">here</a> And <a href="https://vuejs.org/v2/guide/computed.html#Watchers" target="_blank">here</a>


<b>17.</b> `history.pushState` && `addEventListener('popState', () => {})`

history.pushState: adds an entry to browser history session stack !!
addEventListener('popState', () => {}): `popState` is fired when active history entry get changed

Just remember: history.pushState will never trigger popState event !!!!

<b>18.</b> JavaScript `delete` keyword:

The delete operator is used to delete all the variables and objects used in the program ,but it does not delete variables declared with var keyword.

<b>19.</b> Using `screen.debug()` to check HTML DOM: <a href="https://testing-library.com/docs/queries/about/#debugging" target="_blank">reference</a> [Its handy one !]

<b>20.</b> Using keyword `defer` for writing script tag inside `<header>` section, Example:

```html
<html>
  <head>
    <script src="main.js" defer></script>
  </head>
  <body> ... </body>
</html>
```

<i>Top version is <b>better</b> than bottom version, because JavaScript downloads file at last because of the script tag put at last ...</i>

```html
<html>
  <head>
    ...
  </head>
  <body>
    <p>html doms ...</p>
    <script src="main.js"></script>
  </body>
</html>
```

<b>21.</b> Add some styles for console log (🎏🎏🎏🎏)

```js
var x = 'Damon',
    y = 120;
console.log(`%c${x} with Tax: %c$${y}`, 'font-weight: bold; color: red;', 'color: green;');
// first %c is for setting up first comma css stylings, second %c for second comma styling setup !!!
```

<b>22.</b> DevDependency vs Dependency:

-- `DevDependency` packages are only used for `development` !!

-- `Dependency` packages are used for `development` and `runtime` both !!

<a href="https://medium.com/@dylanavery720/npmmmm-1-dev-dependencies-dependencies-8931c2583b0c#:~:text=The%20difference%20between%20these%20two,an%20npm%20install%20%2D%2Dsave." target="_blank">reference</a>


<b>23.</b> Using `synk` to fix your npm packages vulnerabilities [Security Considerations]


<b>24.</b>
