### JavaScript Class & Prototype Concept Recall

<b>1.</b> Example of creating `class` by using `prototype`

```js
const { arguments } = require("file-loader");

// ES6 Class way of greeting functionality: ClassGreeting
class ClassGreeting {
  constructor(word = 'Aloha', name = 'Damon') {
    this.word = word;
    this.name = name;
  }

  greeting() {
    return `${this.word}, ${this.name}`;
  }
}

const greetingInstanceForClass = new ClassGreeting();
console.log(greetingInstanceForClass.greeting());

// How to achieve class functionality by using prototype in JavaScript: PrototypeGreeting
function PrototypeGreeting(word = 'Hi', name = 'Ella') {
  this.word = word;
  this.name = name;
}

PrototypeGreeting.prototype.greeting = function() {
  return `${this.word}, ${this.name}`;
}

const greetingInstanceForProtoType = new PrototypeGreeting('Hello', 'Stranger');
console.log(greetingInstanceForProtoType.greeting());


// You can understand the way of JavaScript for creating class constructor method is like this:

function PrototypeGreeting(word = 'Hi', name = 'Ella') {
  this.word = word;
  this.name = name;
}

// If later you need to inherit an class and creating method for this class, you can do this:

PrototypeGreeting.prototype.greeting = function() {
  return `${this.word}, ${this.name}`;
}

// From this example, one word: it proves the class can be treated as an object in JavaScript
```

Reference: <a href="https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up#:~:text=Prototypes%20vs.-,Classes,is%20itself%20an%20object%20instance.&text=Functions%20are%20first%2Dclass%20in,be%20properties%20of%20other%20objects." target="_blank">here</a>