### NodeJS Recall Tips

<b>1. Dependency Injection</b>

In NodeJS, Dependency Injection (DI) is a common design pattern for your codebase, normally we consider to use DI when we want to make our life easier as developer, especially deal with unit tests, so we only mock it locally, eg: we don't need to make a real / remote API call from other servers, we can do it internally with DI concept.

<string>DI concept is a `wrapper` concept which includes the dependent classes into the major class, functions can be straight away used</string>

<i>-- Similar like HOF (High Order Function): `() => () => {...}`</i>

<b>-- Purposes --</b>

-- We are going to inject something (eg: class, function) instead of import something !!!
-- Made code reusable easily with this pattern
-- Able to supply dummy data for unit testing

eg:

```js
// function 1: walawala function file
module.exports = function() {
  return {
    walawala: function() {
      console.log('ma mi ma mi hong ..');
    }
  }
}

// function 2: aloha function file
module.exports = function(walawalaClass) {
  return {
    aloha: function() {
      walawalaClass.walawala();
    }
  }
}

// index.js
var walawalaClass = require('./walawala')();
var alohaClass = require('./aloha')(walawalaClass); // DI
alohaClass.aloha(); // ma mi ma mi hong ..
```

* Practical example codebase: <a href="https://github.com/DamengRandom/node-dependency-injection-concept" target="_blank">click here</a>


<b>2. General error handling</b>
 
When we write NodeJS API, we can write a class and middleware function to handle generic errors,
 
Code example:
 
```js
// Step 1: error handling class
class ApiError {
 constructor(code, message) {
   this.code = code;
   this.message = message;
 }
 
 static badRequest(msg) {
   return new ApiError(400, msg);
 }
 
 static generalServerError(msg) {
   return new ApiError(500, msg);
 }
}
 
module.exports = ApiError;
 
 
 
// Step 2: middleware function
const ApiError = require("./ApiError");
 
// Error handler middleware function !!!!!
function apiErrorHandler(err, req, res, next) {
 // For developer (maybe cloudwatch ..)
 console.error(err);
 
 if (err instanceof ApiError) {
   res.status(err.code).json({ message: err.message });
   return;
 }
 
 res.status(500).json({ message: 'Server is down at moment ..' });
};
 
module.exports = apiErrorHandler;
 
 
 
// Step 3: calling the error handler functionality:
router.get('/api/employees/:id', (req, res, next) => {
 Employee.findById(req.params.id, (err, data) => {
   if (!err) {
     res.send(data);
   } else {
     next(ApiError.badRequest(`Error for fetching /api/employees/:id, details are: ${err}`));
     return; // stop the program when error detected ..
   }
 });
});
```
 
Complete version of codebase: <a href="" target="_blank">here</a>
Reference: <a href="youtube.com/watch?v=DyqVqaf1KnA" target="_blank">here</a>


<b>3. ExpressJS `next()`</b>

In ExpressJS, next function is in express router which allows to pass the current route and `find next middleware function` to run, can be treated as skip it and go for next (function)

Without `next()`, it will cause the application api request process hang there which is not responding ...
 
Reference: <a href="https://expressjs.com/en/guide/writing-middleware.html">here</a>


<b>4. Why better structure is important when building node API</b>

  - Write clean and readable code
  - Write reusable pieces of code across our application
  - Avoid repetition
  - Add new features without disrupting existing code
