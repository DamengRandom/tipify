### JavaScript Callback, Promise & Async Await

Before figure out callback, we need to understand we can pass function like a variable in JavaScript,

Example:

``` js
function PassingAsAVariable() {
  console.log('We can pass a function like a variable into another function and then get called');
}

function Caller(variableFunction){
  PassingAsAVariable();
}

Caller(PassingAsAVariable);
```

This is due to the fact that JavaScript functions are `first-class objects` wich can be passed as variable format.


#### Important tips for Callback:

1. A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into

2. JavaScript Callback Functions can be used synchronously or asynchronously

Basic Example:

``` js
function Main(message, callback){
  callback(message);
};

Main('Hi there ..', function(message) {console.log(message)});
```

Classic Example:

``` js
const getCalled = () => console.log('get called by caller as callback function');
const middler = cb => cb();
const caller = () => setTimeout(_ => middler(getCalled), 1000);
caller();

// Or
const url = 'http://test.com/test.jpg';
function download(url, callback){
  console.log(`Downloading ${url} ...`);

  setTimeout(() => {
    callback(url);
  }, 2000);
};

function process(url) {
  console.log(`Downloaded ${url} ...`);
  console.log('All done !!');
};

download(url, process);
```


#### Important Tips for Promise:


