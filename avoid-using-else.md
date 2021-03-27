### How to avoid else statement in your codebase? 👉 Guard Clauses

* Concept of Guard Clauses is trying to avoid nested if structure in your code


Code Example:

```js
// Basic version

function canDrink(person) {
  if (person?.age !== null) {
    if(person.age < 18) {
      console.log("Nope 👶");
    } else if (person.age < 21) {
      console.log("Still growing 🎏");
    } else {
      console.log("Yes 🍻");
    }
  } else {
    console.log("Not a person ...");
  }
}

// Concept of Guard Clauses in JavaScript

// reference: https://learningactors.com/javascript-guard-clauses-how-you-can-refactor-conditional-logic/

// Better version

function canDrinkBetter(person) {
  if (person?.age === null) return console.log("Not a person ...");
  if (person?.age < 18) return console.log("Nope 👶");
  if (person?.age < 21) return console.log("Still growing 🎏");
  if (person?.age >= 21) return console.log("Yes 🍻");
} // called guard clause !!!


// Pro version

function canDrinkPro(person) {
  if (person?.age === null) return console.log("Not a person ...");
  return checkPersonAge(person.age);
}

function checkPersonAge(age) {
  if (age < 18) return console.log("Nope 👶");
  if (age < 21) return console.log("Still growing 🎏");
  return console.log("Yes 🍻");
}

const p = {
  age: 19,
}

// canDrink(p);
// canDrinkBetter(p);
canDrinkPro(p);
```


Reference: <a href="https://learningactors.com/javascript-guard-clauses-how-you-can-refactor-conditional-logic/" target="_blank">here</a>

