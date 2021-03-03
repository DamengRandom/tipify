### Tricky and dirty JS recalls (before interview)

1. this value can be read by arrow function: Example

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrowFunction() {
    setTimeout(() => {
      console.log('Arrow Function: ' + this.name); // Arrow function: its like reading the scoped value which is from constructor level
    }, 1000);
  }

  printNameNormalFunction() {
    setTimeout(function() {
      console.log('Normal Function: ' + this.name); // Normal function: its like reading a global scope value which is not defined !!!
    }, 1000);
  }
}

let person = new Person('Damon');

person.printNameArrowFunction(); // Damon
person.printNameNormalFunction(); // 
```

2. TBD
