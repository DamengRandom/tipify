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

eg:
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

Support more properties for different browsers, such as IE, (polypill consideration)


4. `composition funcion`:

```js
const x = a => a + 1;
const y = a => a * 2;

console.log(x(y(5)))
```


5. TBD
