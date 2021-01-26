### React Server Side Rendering (SSR)

For React, it means we render the React components from server side before sending to browser.

Advantage: 
  - To avoid loading blank screen (<a href="https://en.wikipedia.org/wiki/Flash_of_unstyled_content" target="blank">FOUC</a> issue) initially for the user (better user experience) 
  - Page is sent pre-populated from server, fast load [performance optimization]
  - Better for SEO

React itself is isomorphic (universal) which means it doesn't contain any browser specific code, just the JavaScript can run both on the browser and the server.

`Isomorphism` for web development means rendering web pages on both the server and client side.

`Isomorphic React`: means server renders the initial HTML for the client using React components and `React.renderToString()`. (Purpose: to avoid FOUC issue occurs)

Using `renderToString` function to generate the static markup HTML code later rendering at browser side
(Don't forget we introduce building (code compiling) systems like `babel` for converting JSX, ES6 code to be like readable JavaScript code)

<!-- Good reference: https://www.youtube.com/watch?v=NwyQONeqRXA -->

Another tiny concept: `hydrate()`: its similar with render method, but it uses to hydrate a container to render HTML DOM by using `ReactDOMServer`.


Purpose of JSX: allow developers to write HTML in JavaScript and place them in the DOM without any createElement or appendChild methods. (Easier to read for React app)
