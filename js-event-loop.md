### Javascript Event Loop

#### Concept:

Event loop is how JavaScript handle events, according to my current understanding, we can understand like this:

we have 4 compoennts to describe how JavaScript code running sequence, `heap`, `stack`, `web APIs` and `event queue`.

Step 1: heap -> stack (pass code to run on stack)

Step 2: stack -> web APIs (eg: `setTimeout()` could be like web APIs, and it will run behind the scense, making sure nothing blocked)

Step 3: webAPIs -> event queue (pass function event into event queue and event queue will listen if stack run out of tasks, then pass the function event back to stack and run)

stack run the function event and when it finished, Javascript function are finished running.

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

One word: runing all normal heap stack task first, then run web API function event tasks


#### References
1. <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank">Reference 1</a>
2. <a href="https://www.youtube.com/watch?v=XzXIMZMN9k4" target="_blank">Reference 2</a>
