### Recall some concepts knowledge

<strong>1. Redux Thunk (RT)</strong>

-- its a middleware like redux-saga which is used for handling action creator asynchronously !!!

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


3). <b>L</b>iskov substitution (LSP) Principle:

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


4). <b>I</b>nterface Segregation Principle

Try to make interface smaller ..

Code example:

```js
// ### Interface Segregation

// Step 1, normal interface definition: Normally we define interface with attribute and functions like below,

// interface Entity {
//   attackDamage
//   health
//   name
//   move()
//   attack()
//   takeDamage(amount)
// }

// class Character implements Entity {
//   move() {
//     // do something ..
//   }

//   attack() {
//     // do something ..
//   }

//   takeDamage() {
//     // do something ..
//   }
// }

// class Turret implements Entity {
//   move() {
//     // Error cannot move
//   }
// }





// Step 2: In Javascript, even we don't have interface, but we have class, similar concept of doing interface segregation, below version is without implementing interface segregation concept:

// Original Version: Entity class has many methods: move, attack, takeDamage, and some other classes might not use ALL OF THESE METHODS IN ENTITY CLASS !!!!

// class Entity {
//   constructor(name, attackDamage, health) {
//     this.name = name;
//     this.attackDamage = attackDamage;
//     this.health = health;
//   }

//   move() {
//     console.log(`${this.name} has moved ..`);
//   }

//   attack(targetEntity) {
//     console.log(`${this.name} has attacked ${targetEntity.name} for ${this.attackDamage} damage ..`);
//     targetEntity.takeDamage(this.attackDamage);
//   }

//   takeDamage(amount) {
//     this.health -= amount;
//     console.log(`${this.name} has ${this.health} remaining ..`);
//   };
// }

// class Character extends Entity {

// }

// class Wall extends Entity {
//   constructor(name, health) {
//     super(name, 0 , health);
//   }

//   move() {
//     return null;
//   }

//   attack() {
//     return null;
//   }
// }

// class Turret extends Entity {
//   constructor(name, attackDamage) {
//     super(name, attackDamage, -1);
//   }

//   move() {
//    return null; 
//   }

//   takeDamage() {
//     return null;
//   };
// }

// const turret = new Turret('Turret', 5);
// const character = new Character('Character', 3, 100);
// const wall = new Wall('Wall', 200);

// turret.attack(character);
// character.move();
// character.attack(wall);





// Step 3: After implemented interface segregation concept: we separate the class into multiple methods, and each class call ing those methods by object assign, eg: Object.assign(CLASS.prototype, FUNCTION);

class Entity {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    console.log(`${this.name} has moved ..`);
  }
}

const attacker = {
  attack(targetEntity) {
    console.log(`${this.name} has attacked ${targetEntity.name} for ${this.attackDamage} damage ..`);
    targetEntity.takeDamage(this.attackDamage);
  }
}

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} remaining ..`);
  }
};

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

// adding object into class, don't forget class is also an object in JS

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);


class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Turret.prototype, attacker);


const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);
```


5). Dependency Inversion Principle

Its a design guideline which recommends classes should only have direct relationship with high level abstractions


Code Example: 

```js
// ### dependency inversion

// Step 1: before using dependency inversion concept:

// class Store {
//   constructor(user) {
//     this.stripe = new Stripe(user);
//     this.paypal = new PayPal();
//     this.user = user;
//   }

//   purchaseBike(quantity) {
//     this.paypal.makePayment(this.user, 10 * quantity);
//     this.stripe.makePayment(200 * quantity * 100);
//   }

//   purchaseHelmet(quantity) {
//     this.paypal.makePayment(this.user, 10 * quantity);
//     this.stripe.makePayment(15 * quantity * 100);
//   }
// }

// class Stripe {
//   constructor(user) {
//     this.user = user;
//   }

//   makePayment(amountInCents) {
//     console.log(`${this.user} has made a payment of ${amountInCents / 100} by using Stripe ..`);
//   }
// }

// class PayPal {
//   makePayment(user, amountInDollars) {
//     console.log(`${user} has made a payment of ${amountInDollars} by using PayPal ..`);
//   }
// }

// const store = new Store('Damon');
// store.purchaseBike(10);
// store.purchaseHelmet(10);




// Step 2: After implemented dependency inversion concept: we created a StripePaymentProcessor & PayPalPaymentProcessor middleware class to handle the the payment methods from Stripe & PayPal class

// Stripe & PayPal class can be treated as the external APIs

// basically we make dependency class to call the external class more easily

class Store {
  constructor(user, PaymentProcessor) {
    this.paymentProcessor = new PaymentProcessor(user);
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
}

// payment middleware for Stripe class
class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInCents) {
    this.stripe.makePayment(amountInCents);
  }
}

// payment middleware for PayPal class
class PayPalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new PayPal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} has made a payment of ${amountInCents / 100} by using Stripe ..`);
  }
}

class PayPal {
  makePayment(user, amountInDollars) {
    console.log(`${user} has made a payment of ${amountInDollars} by using PayPal ..`);
  }
}

const store = new Store('Damon', StripePaymentProcessor);

store.purchaseBike(10);
store.purchaseHelmet(10);


const store2 = new Store('Ella', PayPalPaymentProcessor);

store2.purchaseBike(10);
store2.purchaseHelmet(10);
```



Reference: <a href="https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa" target="_blank">here</a>

<!-- Another reference is YouTube videos -->
