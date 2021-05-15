### Tricky and dirty JS recalls (before interview)

<b>1.</b> this value can be read by arrow function: Example

```js
// First example: value can be read by arrow function
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


// Second example: `let` or `const`: will make output as nothing/empty !!
const name = 'Ella';
// Or let name = 'Ella';

const arrowFunction = () => console.log(this.name);

function normalFunction() {
  console.log(this.name);
}

arrowFunction(); // 
normalFunction(); //


// Third Example: if we need to display value by using let or const, we can remove this keyword
let nameWithoutThis = 'Ella';

const arrowFunction = () => console.log(nameWithoutThis);

function normalFunction() {
  console.log(nameWithoutThis);
}

arrowFunction(); // Ella
normalFunction(); // Ella


// Fourth example: `var` will make this.name able to read the value !!!
var name = 'Ella';

const arrowFunction = () => console.log(this.name);

function normalFunction() {
  console.log(this.name);
}

arrowFunction(); // Ella
normalFunction(); // Ella
```

<b>2.</b>
