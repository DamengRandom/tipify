### Tips for quick recall

1. `href` vs `src`: 
`href` resources are loaded based on a trigger while
`src` resources are loaded automatically.

2. Ajax (Asynchronous JavaScript And XML): update a web page `without reloading` the page 

Using XMLHttpRequest to create a http request and send to sever, and then server send data back to browser, and finally update page content

3. `splice` usage for remove one element from array :

```js
var list = [1,2,3,4,77,5,6];
var removeTheOne = (value) => {
  for(var i = 0; i < list.length; i++){
    if(list[i] === value) {
      list.splice(i, 1);
    }
  }
  return list;
};

var afterRemove5 = removeTheOne(5);
console.log(afterRemove5); // [1,2,3,4,77,6]
```

4. TBD
