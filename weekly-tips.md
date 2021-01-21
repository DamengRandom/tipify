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

6. Command `npx`:

The ability of `npx` is to run the scripts from npm packages without having to install them

7. VSCode Copy && Moving Code Block Hotkeys (Mac users):

```js
shift + option + down key // copying current line of code to next line (handy one)
alt + up / down // moving code up or down
```

8. Webhook concept:

Explanation: after date, you asked your girlfriend to send you a message once she reached to home. Then, after your girlfriend reached home, then she sends you a message. Then, you feel happy.

Example: Messaging/Notification app: once you sends out some dat via API, then maybe API can tell someone else you have successfully sent the data out, the notification message will be sent after your action is doen.

Simple word: you did something, then some other things will be triggered after your action, and also let you know what happened.

9. Redis:

It refers to a cache tool which helps devs to save some data as cache so when user refetch the data, user can get it from cache instead of making another API call, eg:

```js
cacheMiddleware() {
  // is a function to save data into redis server for cache purpose
  ...
}
app.get('/path/route', cacheMiddleware, () => { cb ... });
```

Reference <a href="https://www.youtube.com/watch?v=oaJq1mQ3dFI" target="_blank">Link</a>

10. How Vue event bus working? An simple example:

```js
// Why we need event bus? We want to share the data/props .. between siblings components

// Example Case: we want to share the title between Header and Footer components (siblings)

// Step 1: create event bus instance inside main function
export const bus = new Vue();

// Step 2: using bus and emit event for another component to listen to [For fire the event]
bus.$emit('titleChanged', 'New header title');

// completed version of Header Component:

// <template>
//   <div>
//     <h4 @click="changeTitle">{{ title }}</h4>
//   </div>
// </template>

// <script>
//   import { bus } from '../../main';
//   export default {
//     data() {
//       return {
//         title: 'Header before change'
//       }
//     },
//     methods: {
//       changeTitle: function() {
//         this.title = 'New header title'; // we trigger Header component title update
//         bus.$emit('titleChanged', 'New header title'); // we trigger Footer component title update
//       }
//     }
//   }
// </script>

// Step 3: the component which wants to get the updated data will listen and trigger the changes when another component fired the event bus [For listening the event]
bus.$on('titleChanged', data => {
  this.titleProp = data;
});

// completed version of Footer Component:

// <template>
//   <div>
//     <h4>{{ titleProp || 'default footer content' }}</h4>
//   </div>
// </template>

// <script>
//   import { bus } from '../../main';
//   export default {
//     props: {
//       titleProp: {
//         type: String,
//         required: true
//       }
//     },
//     created() {
//       bus.$on('titleChanged', data => {
//         this.titleProp = data;
//       });
//     }
//   }
// </script>

```

11. deploy docker container with CI/CD tool (Travis):

create a `.travis.yml` file and do the following setups:

```
sudo: required
services:
  - docker

before_install:
  - docker build -t damengrandom/docker-flow -f Dockerfile.dev .

script:
  - docker run damengrandom/docker-flow yarn run test --watchAll=false --coverage
```

Then connect travis with your github account: read doc and find the related github repository and connect it with Travis (every time commits a new PR, as long as merge into master, the Travis will get triggered to deploy the changes to certain environment)

12. Common regex:

```js
// email validator:
function isValidEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// replace all occurance in this string
stringTextVariable.replace(/filter/g, '&filter');

// 
var str = "Remove  extra   spaces    inside  string       text          content";
var newStr = str.replace(/\s\s+/g, " ");
console.log(newStr); // "Remove extra spaces inside string text content"
```

Reference: <a herf="freecodecamp.org/news/javascript-regex-match-use-replace-on-string/" target="_blank">Link</a>
