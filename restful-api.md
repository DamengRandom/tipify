### RestFul API

#### Concept:

Wording: Representational State Transfer (REST)

`REST !== HTTP`

Currently understanding (might be wrong), RESTFul API is an architectural style which uses HTTP requests to access/use data (resource), more like an architectural design pattern

REST determines how the API looks like, developers can set bunch of rules to create their own customized APIs

1. Common Http request consists of

```
- The endpoint: URL for the request
- The method: GET/PUT/POST/DELETE/PATCH
- The headers: cookie/token/content-type/parameters ...
- The data (or body): object to save to db ...
```

2. Data format supported:

```
- application/json
- application/xml
- application/x-wbe+xml
- application/x-www-form-urlencoded
- multipart/form-data
```

#### Rules to follow:

*. Accept and respond with JSON

Example: Express `bodyParser` Middleware

```js
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
```

*. Use nouns instead of verbs in endpoint paths and naming collections with plural nouns, eg: `/products`

*. Handle errors gracefully and return standard HTTP error codes

*. Allow filtering, sorting, and pagination (For larger data loading consideration)

*. Cache data to improve performance, consider like `Redis`

*. Versioning our APIs, How? see below:

Commonly, put the route under each of `folder`, like v1, v2 etc .. 

Example:

```js
import * as express from 'express';

// v1/get-product.js
const router = express.Router();
router.post('/products/:id', middlewareFn(), (req, res) => {
    // Your code logic
});
app.use('/v1', router);


// v2/get-product.js
const router = express.Router();
router.post('/products/:id', middlewareFn(), (req, res) => {
    // Your code logic
});
app.use('/v2', router);
```

*. Nesting resources for hierarchical objects

Example: If we have comments nested with each post, we need to define our API route like this:

`posts/:postId/comments`

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/posts/:postId/comments', (req, res) => {
  const { postId } = req.params;
  const comments = [];
  // code to get comments by postId
  res.json(comments);
});


app.listen(3000, () => console.log('server started'));
```

References:

1. <a href="https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/" target="_blank">Restful API design</a> 