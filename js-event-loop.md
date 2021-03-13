### Javascript Event Loop

#### Concept:

Event loop is how JavaScript handle events, also related with JavScript coding running sequence, according to my current understanding:

we have 4 components to describe the JavaScript code running sequence, `heap`, `stack`, `web APIs` and `event queue`.

Step 1: heap -> stack (pass code to run on stack)

Step 2: stack -> web APIs (eg: `setTimeout()` could be like web APIs, and it will run behind the scene, making sure nothing blocked)

Step 3: web APIs -> event queue (pass function event into event queue and event queue will `listen` if stack running out of tasks, then pass the function event back to stack and run)

stack run the web APIs function event and when it finished, all code are finished running.

Classic Example:

``` js
function core(){
  console.log('normal heap stack task 1');
  setTimeout(
    function show(){
      console.log('web API task 1');
    }, 0);
	console.log('normal heap stack task 2');
}
core();

// output:
// normal heap stack task 1
// normal heap stack task 2
// web API task 1
```

One word: running all normal heap stack task first, then run web API function event tasks


#### References

1. <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank">Reference 1</a>
2. <a href="https://www.youtube.com/watch?v=XzXIMZMN9k4" target="_blank">Reference 2</a>

Extra tip: example of JavaScript running order:

```js
function x() {
  console.log('run function x');
  function y () {
    console.log('run function y');
  }
  y();
}
x();
console.log('run it');
// run function x (order 1)
// run function y (order 2)
// run it (order 3)
```
