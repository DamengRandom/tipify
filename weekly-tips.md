### Tips for quick recall

1. `href` vs `src`: 
`href` resources are loaded based on a trigger
`src` resources are loaded automatically.

2. Ajax (Asynchronous JavaScript And XML): update a web page `without reloading` the page 

Using XMLHttpRequest to create a http request and send to sever, and then server send data back to browser, and finally update page content

3. `splice` usage for remove one element from array:

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

4. `session storage` vs `local storage` vs `cookie`

Common: all of these 3 are stored inside browser ..

- `cookie`:
  - `Capacity`: 4kb (much more smaller)
  - `Support`: Since from HTML 4
  - `Browser Tab`: Any
  - `Expires`: Manually set
  - `Storage Location`: Browser & Server
  - `Send with requests`: Yes

- `local storage`:
  - `Capacity`: 10mb (Maximum support)
  - `Support`: Since from HTML 5 
  - `Browser Tab`: Any
  - `Expires`: Never
  - `Storage Location`: Browser only
  - `Send with requests`: No

- `session storage`:
  - `Capacity`: 10mb (also Maximum support)
  - `Support`: Since from HTML 5 
  - `Browser Tab`: Same tab only
  - `Expires`: On tab close
  - `Storage Location`: Browser only
  - `Send with requests`: No

```js
// Short tips:

// local storage: expires until you delete it
// session storage: expires when you close current tab
// cookie: manually set expire time (eg: set a year, very very future ..)
// eg: document.cookie = 'name=damon; expires=' + new Date(2021, 12, 12).toUTCString();

// cookie will be sent every time when user sends API request to the server, thats why cookie needs to be smaller size

// when deal with server, use cookie, deal with browser use session.local storage
```

5. Please watch this video for recall token && session based authentications
<a href="https://www.youtube.com/watch?v=2PPSXonhIck" target="_blank">Link</a>

  - Session based authentication: stateful, using cookie
    
    - Flow:

    1. user submit login credentials (email + password)
    2. server verifies user input against `DB`
    3. server create a temporary user `session`
    4. server -issues a cookie with `session ID` (eg: `Set-Cookie` in header)
    5. user sends cookie with `each` request
    6. server validate user request via session store to check whether user cookie is whether `valid or not`
    7. when user logout, server `removes` session information, including with cookie

  - Token based authentication: stateless, using JWT, OAuth and other [used for SPA web apps, web APIs] (expose data to XSS)

    - Flow:

    1. user submit login credentials (email + password)
    2. server verifies user input against `DB`
    3. server generates a `temporary token` and `embeds` user data into it
    4. server `responses` back with token (in body or header)
    5. user stores the token in `client storage`
    6. user sends cookie with `each` request
    7. server `validate` user request & grant access 
    8. when user `logout`, token will be `cleared` by client storage

6. 
