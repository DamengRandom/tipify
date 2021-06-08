### RXJS quick recalls with some trials

#### Tip 1: What is RXJS?

- A Reactive Extension for JavaScript
- A library which uses observables to deal with async data calls, callbacks and event-driven programs.
- Everything in RXJS is a stream

<b>Create amount of examples to show each API how it works</b>

```html
<!-- Step 1: create rxjs-index.html file and import rxjs CDN script -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.6.7/rxjs.umd.min.js" integrity="sha512-0/2ebe9lI6BcinFBXFjbBkquDfccT2wP+E48pecciFuGMXPRNdInXZawHiM2NUUVJ4/aKAzyebbvh+CkvRhwTA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
  <script src="./trials.js"></script>
</body>
</html>
```

```js
// Step 2: create trials.js file and create a common print function for print all the result later, following below: 
function print(val) {
  let el = document.createElement('p');
  el.innerText = val;

  document.body.appendChild(el);
}
```

#### Tip 2: Observable: An array get build over time, it can be looped over time by subscribing to it ..

(1). Basic Example:

```js
const observable = rxjs.Observable.create(observer => {
  observer.next('Hello ..');
  // next() is the method to allow developer to send data to this observable stream.
  observer.next(JSON.stringify({
    name: 'damon',
  }, null, 2));
  // value can be normal js data like string, number, boolean, object or array
  observer.next([1, 2, 3]);
});

observable.subscribe(val => print(val));
```

(2). Event based Example: triggered by click

```js
const clickEventObservable = rxjs.fromEvent(document, 'click');

clickEventObservable.subscribe(click => console.log(click));
// now we can get click event object
```
