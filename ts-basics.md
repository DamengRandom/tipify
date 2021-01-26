### TypeScript basics

<i>This post is recording the basics knowledge of TypeScript (TS).</i>

What is TypeScript (TS)?
Is a superset of JavaScript (JS), which is strongly typed language, which also eventually will complies the code down to the JavaScript level, because browser only understands JavaScript.

Essential concepts:

<ol style="padding-left: 3rem;">
  <li>Variable Declarations (let [block scope] & const [no-redeclare])</li>
  <li>Variable Types: [Basics: Boolean, Number, String]</li>
  <li>Functions</li>
  <li>Interfaces</li>
  <li>Class</li>
  <li>Access Modifiers</li>
</ol>

Before start, setup basics environment to run TypeScript code:

Please install TypeScript in your browser first by running this command:
```js
// Install first
npm install -g typescript
// Then run version check
tsc -v
```

How to compile a `.ts` file to `.js` file (ts -> js)?
```js
// eg: create a xxx.ts file first
// Then run command 
tsc xxx.ts
// you will see js file has been generated as
// xxx.js
// The run this command to run js code:
node xxx.js
// we also can watch the changes by using:
ts xxx --watch
```

The reason of using types:
<ol style="padding-left: 3rem;">
  <li>Static type checking</li>
  <li>Give hint about what's going wrong?</li>
  <li>Intelligence suggestions, eg: if you define a number `num`, then you type `num.`, you will find the suggestions only related with numeric type of APIs</li>
</ol>

Here are the basics implementations for recording purpose only:

```js
// When the time we see this warning: Cannot redeclare block-scoped variable 'message'.ts(2451)
// we add export {}; to resolve it
export {};
let message = "Ahoy, Damon !!";
console.log(message);


// Basic types
let name: string = 'damon'; // string
let isTrue: boolean = false; // boolean
let number: number = 1; // number


// Sub type can be used for initialize a variable or reassign the value to a declared variable 
let n = null; // sub-type null
let u = undefined; // sub-type undefined
isTrue = n; 
name = u;


// 2 ways to define array:
let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3,4];


// Tuple type example:
// number of items inside array is fixed & order must be same as declarations
let mixArr: [string, number, boolean] = ['damon', 123, true];


// Enum:
enum Color {Red, Green, Blue};
let redColor: Color = Color.Red; // output is 0, because we haven't assigned value into each enum value
console.log('Enum red color define: ', redColor);
// assign value to each enum value:
enum ColorWithValue {Red="Red", Green="Green", Blue="Blue"};
console.log('Enum color with value: ', ColorWithValue.Green);


// When to use type 'any'?
// When the time we need to reassign value to different type, Eg: 
let valueReadFromLibrary: any = 10;
valueReadFromLibrary = false;


// If we only use type 'any' WITHOUT any reassignment, typescript won't give us any error, which cause huge effort for code debugging, eg:
let noReassignTypeAny: any = 10;
// console.log(noReassignTypeAny()); // function, wrong (X)
console.log(noReassignTypeAny.name); // object, wrong (X)


// Type 'unknown':
let unknownVariableType: unknown = 10;
unknownVariableType = 'become a string';
// console.log(unknownVariableType.toUpperCase()); // If not define a type in advance, ts will give us error hint, so we need to predefine like this: 'variable as type'
console.log((unknownVariableType as string).toUpperCase());


// Multiple type variable:
let multipleTypeVariable: number | boolean;
multipleTypeVariable = 10;
multipleTypeVariable = false;



// Big topic: functions for TS
function sum(n1: number, n2?: number): number {
// ? means value is optional, can be fill in or leave it as empty
// the last: number means we defined the function sum output MUST be a number type value
  return n1 + n2;
};

console.log('n2 can be optional: ', sum(1)); // value is NaN !!!

// throw error:
// sum(1, true);
// good example

function preDefinedValueThenSum(n1: number, n2: number = 0): number {
  return n1 + n2;
};

console.log('n2 can be optional: ', preDefinedValueThenSum(1)); // value is 1 !!!



// Another big topic of Interface:
// We can specify the object as type in TypeScript -> Interface !!!!!!
// Use case:
function fullName(person: {firstName: string, lastName: string}) {
  return `${person.firstName}, ${person.lastName}`;
}

let p = {
  firstName: 'Damon',
  lastName: 'Wu'
};

console.log(fullName(p));

// So in above case, we see person: {firstName: string, lastName: string}, which might be repeated for later usage, so if we have function B, C D ..., we all need to defined person like this format, person: {firstName: string, lastName: string}, which is a bad practice, here comes with Interface !!!!

interface Person {
  firstName: string,
  lastName?: string
};

function fullNameWithInterface(person: Person) {
  return `${person.firstName}, ${person.lastName}`;
};

let p2: Person = {
  firstName: 'Ella',
};

console.log(fullNameWithInterface(p2));



// Last topic: Class & Access Modifier
// OOP concept: inheritance:

class Employee { // ts class structure:
  employeeName: string; // class variable
  
  constructor(en: string) { // constructor
    this.employeeName = en;
  }

  greet() { // function
    console.log(`Hi ${this.employeeName}`)
  }
};

let emp1 = new Employee('Damon');
console.log("What is the instance variable value: ", emp1.employeeName); // Important concept
console.log(emp1.greet());

// Now we introduce 'super' usage for another class: (How inheritance works)
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateNameForManager() {
    console.log('Manager class can call employee class method and assign its value emplyee class like below result: ');
  }
}

let m1 = new Manager('Ella');
m1.delegateNameForManager();
console.log('Employee class variable got value from Manager class: ', m1.employeeName);
m1.greet();


// Access Modifier
// public: (default one) enable to be access by any class or functions
// private: only can be accessed by its own class, not outside the class
// protected: can be access only when within the class and subclasses)

// Example below:

class A {
  protected name: string;
  constructor(_name: string) {
    this.name = _name;
  }
}

class B extends A {
  private department: string;
  constructor(whatever: string, department: string) {
    super(whatever);
    this.department = department;
  }

  public message() {
    return `Hi, my name is ${this.name} and I worked in ${this.department}.`;
  }
}

let p1 = new A('Damon');
console.log('whats p1? ', p1);
// console.log('whats p1? ', p1.name); // got error for accessing p1.name
let instanceOfB = new B('Damon', "IT");
console.log(instanceOfB.message());
// console.log(instanceOfB.name); // got error for accessing instanceOfB.name
```
