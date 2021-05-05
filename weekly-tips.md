### Tips for quick recall

<b>1.</b> `href` vs `src`: 
`href` resources are loaded based on a trigger
`src` resources are loaded automatically.


<b>2.</b> Ajax (Asynchronous JavaScript And XML): update a web page `without reloading` the page 

Using XMLHttpRequest to create a http request and send to sever, and then server send data back to browser, and finally update page content


<b>3.</b> `splice` usage for remove one element from array:

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


<b>4.</b> `session storage` vs `local storage` vs `cookie`

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


<b>5.</b> Please watch this video for recall token && session based authentications
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


<b>6.</b> Command `npx`:

The ability of `npx` is to run the scripts from npm packages without having to install them


<b>7.</b> VSCode Copy && Moving Code Block Hotkeys (Mac users):

```js
shift + option + down key // copying current line of code to next line (handy one)
alt + up / down // moving code up or down
```


<b>8.</b> Webhook concept:

Explanation: after date, you asked your girlfriend to send you a message once she reached to home. Then, after your girlfriend reached home, then she sends you a message. Then, you feel happy.

Example: Messaging/Notification app: once you sends out some dat via API, then maybe API can tell someone else you have successfully sent the data out, the notification message will be sent after your action is doen.

Simple word: you did something, then some other things will be triggered after your action, and also let you know what happened.


<b>9.</b> Redis:

It refers to a cache tool which helps developers to save some data as cache so when user refetch the data, user can get it from cache instead of making another API call, eg:

```js
cacheMiddleware() {
  // is a function to save data into redis server for cache purpose
  ...
}
app.get('/path/route', cacheMiddleware, () => { cb ... });
```

Reference <a href="https://www.youtube.com/watch?v=oaJq1mQ3dFI" target="_blank">Link</a>


<b>10.</b> How Vue event bus working? An simple example:

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


<b>11.</b> deploy docker container with CI/CD tool (Travis):

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


<b>12.</b> Common regex:

```js
// email validator:
function isValidEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// replace all occurrence in this string
stringTextVariable.replace(/filter/g, '&filter');

// 
var str = "Remove  extra   spaces    inside  string       text          content";
var newStr = str.replace(/\s\s+/g, " ");
console.log(newStr); // "Remove extra spaces inside string text content"
```

Reference: <a herf="freecodecamp.org/news/javascript-regex-match-use-replace-on-string/" target="_blank">Link</a>


<b>13.</b> JWT (JSON Web Token)

3 parts: Header, Signature, Payload

Header: 
```js
{
  "alg": "HS256", // JWT algorithm
  "typ": "JWT" // JWT type
}
```

Signature: to verify the message wasn't changed along the way

```js
// If we use SHA256 algorithm, this is how signature looks like:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

Payload: contains tge data to be sent

```js
{
  name: 'damon',
  handsome: true
}
```

Good way to integrate is Auth0.


<b>14.</b> tilde (~) vs Caret (^) in npm:

~version means: approximately equivalent to version. (update <b>patch</b> version)
Eg: ~1.2.3: means will use release from 1.2.3 to <1.3.0

^version means: compatible with version (update <b>minor</b> version)
Eg: ^2.3.4: means will use release from 2.3.4 to <3.0.0

Good reference <a href="https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json" target="_blank">here</a>


<b>15.</b> Create VanillaJS Router <b>(Sorry, this is a bad failed example, just another experience of coding Vanilla JS)</b>

```html
<!-- HTML part -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #category ul {
      list-style-type: none;
      display: flex;
    }

    #category ul li {
      flex-grow: 1;
      cursor: pointer;
    }

    .show {
      display: block;
    }

    .hide {
      display: none;
    }
  </style>
</head>
<body>
  <div id="category">
    <ul>
      <li id="pageOne">pageOne</li>
      <li id="pageTwo">pageTwo</li>
      <li id="pageThree">pageThree</li>
    </ul>
  </div>
  <div>
    <div id="pageOneRenderer" class="viewComponent"></div>
    <div id="pageTwoRenderer" class="viewComponent"></div>
    <div id="pageThreeRenderer" class="viewComponent"></div>
    <!-- <div id="errorRenderer" class="viewComponent"></div> -->
  </div>
  <script type="text/javascript" async defer src="main.js"></script>
</body>
</html>
```

```js
// Javascript part: main.js
const constants = {
  pageOne: [
    {
      id: 1,
      name: 'one 1'
    },
    {
      id: 2,
      name: 'one 2'
    },
    {
      id: 3,
      name: 'one 3'
    }
  ],
  pageTwo: [
    {
      id: 1,
      name: 'two 1'
    },
    {
      id: 2,
      name: 'two 2'
    },
    {
      id: 3,
      name: 'two 3'
    }
  ],
  pageThree: [
    {
      id: 1,
      name: 'three 1'
    },
    {
      id: 2,
      name: 'three 2'
    },
    {
      id: 3,
      name: 'three 3'
    }
  ],
};

const routes = ['pageOne', 'pageTwo', 'pageThree'];

document.getElementById('category').addEventListener('click', (e) => {
  // change url from url bar
  location.href = `${location.origin}${location.pathname}#${e.target.id}`;

  const nodes = document.getElementsByClassName('viewComponent');
  const pathHash = location.hash.substr(1);

  for (let index = 0; index < nodes.length; index++) {
    if (nodes[index].id.includes(pathHash) || location.href.includes(nodes[index].id)) {
      nodes[index].classList.remove('hide');
      nodes[index].classList.add('show');
    } else {
      nodes[index].classList.remove('show');
      nodes[index].classList.add('hide');
    }
  }
});

window.addEventListener('popstate', () => {
  module.renderOnPageLoadOrURLChange();
});

// popstate: is fired when active history entry get changed

window.onload = () => {
  module.renderOnPageLoadOrURLChange(); // get current route page content when page loaded
}

var module = {
  renderSpecificItems: (data, selector) => {
    var div = document.createElement('div');
    div.setAttribute('id', `component-${selector}`);
    
    if (!document.getElementById(`component-${selector}`)) {
      if (typeof data === 'object') {
        data.map(item => {
          var span = document.createElement('span');
          span.innerText = item.name;
          div.appendChild(span);
          div.appendChild(document.createElement('br'));
        });
      } else {
        div.innerHTML = "<p>Default Home Component</p>";
      }
  
      return document.querySelector(`#${selector}`).appendChild(div);
    }
  },
  renderOnPageLoadOrURLChange: () => {
    var currentPath = location.hash.substr(1);

    routes.map(route => currentPath === route ? module.renderSpecificItems(constants[route], `${route}Renderer`) : false);

    // using `map` just one line, using `switch` too many lines, thats the powerful place of using map method, better performance !!

    // switch(currentPath) {
    //   case 'pageOne':
    //     module.renderSpecificItems(constants.pageOne, 'pageOneRenderer');
    //     break;
    //   case 'pageTwo':
    //     module.renderSpecificItems(constants.pageTwo, 'pageTwoRenderer');
    //     break;
    //   case 'pageThree':
    //     module.renderSpecificItems(constants.pageThree, 'pageThreeRenderer');
    //     break;
    //   default:
    //     module.renderSpecificItems(constants.error, 'errorRenderer');
    //     break;
    // }
  }
}

// After few hours coding, just found that I just coded a big tab ...
// I was feeling like SPA is a big tab, each component is the tab content, each link is the tab title !!! 
```


<b>16.</b> How to delete object from array by using forEach:

```js
// data to use
var data = [{x: 1, y: 2}, {a: 1, b: 2}, {special: 'hahaha'}];
// functionality
data.forEach(val => {
  if(val.special === 'hahaha') {
    const valIndex = data.indexOf(val);
    if(valIndex > -1) {
      data.splice(valIndex, 1);
    }
  }
});
// output:
data; // [{x: 1, y: 2}, {a: 1, b: 2}]
```


<b>17.</b> `axios.create()`

The `axios.create()` function creates a new Axios instance. When you `require('axios')`, you get back an the default Axios instance. The reason why you would create an instance is to set custom defaults for your application.


<b>18.</b> MicroServices

What is MicroServices: Divide one monolithic codebase into multiple services codebase:

One to many -> which means one service can have one UI + one API + one DB (database per services - DPS) !!
