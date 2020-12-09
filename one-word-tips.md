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


8. 