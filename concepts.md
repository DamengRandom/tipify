### Recall some concepts knowledge

<strong>1. Redux Thunk (RT)</strong>

-- its a middleware like redux-sage which is used for handling action creator asynchronously !!!

-- one word: waiting for API request is done, then trigger dispatch action to put latest state data into reducer !!!

Classic Example:

```js
export function fetchProducts() {
  const request = axios.get('https://some.domain.app.com/products'); // API call

  return (dispatch) => {
    request.then(({ data }) => { // wait for API is done (request got some data) !!!
      dispatch({ type: 'ACTION_TYPE', payload: data }); // the trigger the dispatch action !!!
    })
  };
}
```


<strong>2. Framework vs library</strong>
 
Library > framework (library contains framework), your code will get called by the framework functions and your code will call the library functions


<strong>3. React Hooks</strong>

-- its a function hooks react state and lifecycle functions for functional components

-- hook function is for making developer life easier, using shorter logic to represent same logic as class component does, such as life cycle method

-- can create own/customized hook functions to be reusable

-- available after React v16.8


<strong>4. 5 patterns we need to know as Senior developer</strong>
<a href="https://www.youtube.com/watch?v=FLmBqI3IKMA" target="_blank">Click</a>


* Singleton pattern: like a given class can only has one instance at a time, doing functionalities eg: list of client configurations, database driver, current state in the app (redux store maybe) and etc ..

* Adapter(Bridge) pattern: like a database driver, can have a common driver interface, and multiple concrete implementations like, mongo database, or dynamodb database. (We can have an abstract class for multi-purposes, think about camera connector can have multiple different lens !!)

* Observer pattern: 2 roles (publisher: give stuff [eg: event(s)] && subscriber: listen stuff [eg: event(s)]), it allow losing coupling between publisher and subscriber !!


🎏 Mindset: Use these patterns when we found codebase(s) need them !!!!!!!!!!!!!!


<strong>5. S.O.L.I.D principle in web development</strong>

1). <b>S</b>ingle Responsibility Principle:

In JS, a class/function should ONLY has one job/task to do, nothing more, typical examples: React web component, only one functionality per component, and factory pattern in code design

2). <b>O</b>pen/Close Principle:

Open for extension, but closed for modification ->

Think about a function support 3 types of functionalities (eg: create, read, update), and now we add a new functionality called delete, so we don’t need to write new logic, just add this new type and the current existing function should be able to handle this new type of functionality [the original function should not be modified and new type of functionality should be extended/supported !!!]

Code example:

```js
// BEFORE without open close rule (basic version)
function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);

    switch(question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('2. False');
        break;
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case 'text':
        console.log('Answer: ________________');
        break;
      default:
        console.log('no type detected ...');
    }
  });
}

const questions = [
  {
    type: 'boolean',
    description: 'boolean question detected ..'
  },
  {
    type: 'multipleChoice',
    options: [
      'option 1',
      'option 2',
      'option 3',
      'option 4'
    ],
    description: 'multiple choice question detected ..'
  },
  {
    type: 'text',
    description: 'text question detected ..'
  },
];

printQuiz(questions);


// AFTER implemented open close rule (better version)

// based on the question types (boolean, text, multipleChoice ..), we can bring into different classes:

// use class to represent each type of data: this is a typical class usage, basically we categorized question types into few different classes !!!!!

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionContent() {
    console.log('1. True');
    console.log('2. False');
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionContent() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionContent() {
    console.log('Answer: ________________');
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionContent() {
    console.log('Minimum: ________________');
    console.log('Maximum: ________________');
  }
}

function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);
    question.printQuestionContent();
  });
}

const questions = [
  new BooleanQuestion('This is class open/close rule example'),
  new MultipleChoiceQuestion(
    'Whats solid design principle',
    [
      'Single responsibility',
      'Open/close',
      'Liskov substitution',
      'Interface segregation',
      'Dependency inversion'
    ],
  ),
  new TextQuestion('What the current rule is'),
  new RangeQuestion('Ranking the solid rules')
];

printQuiz(questions);
```


3). <b>L</b>iskov substitution (LSP):

Mathematical interpolation:

f(x), x is type of T, and f(y), y is type of S, S is subtype of T

Code example:

```js
class FlyingBird { // base class
  fly() {
    console.log('I can fly ..');
  }
}

class SwimmingBird extends FlyingBird { // base class
  swim() {
    console.log('I can swim ..');
  };
}

class Duck extends FlyingBird { // extended class
  quack() {
    console.log('I can quack ..');
  }
}

class Penguin extends SwimmingBird { // extended class
}

function makeFlyingBird(bird) {
  bird.fly();
}

function makeSwimmingBird(bird) {
  bird.swim();
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBird(duck);
makeSwimmingBird(penguin);

// SwimmingBird class can inherit from FlyingBird class, so all instances function (like penguin) can either fly or swim !!!

// Liskov Substitution: if you have a function accepts a class, every single subclass of that class must also be able to enter that function and work !!!!!!!!!!!!!!!!!!!!!!
```


4). <b>I</b>nterface Segregation



Reference: <a href="https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa" target="_blank">here</a>
