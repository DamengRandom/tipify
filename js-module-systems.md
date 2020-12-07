### JavaScript Module Systems Understanding

*** Never forget I failed on interview with this question !!! ***

#### Main types:

1. `CommonJS`: 
  - implemented by NodeJS
  - used for `server side` when you have modules installed
  - `no` tree shaking (because when you import, you get an object)
  - import (`require`), export (`module.exports`)
  - you always got a copy of an object, `no live changes` in module itself

2. `AMD` (Async Module Definition)
  - implemented by require.js
  - used for `client side` when you dynamically loading of modules
  - import via `require`

3. `UMD` (Universal Module Definition)
  - combination of `CommonJS + AMD`
  - can be used for both CommonJS or AMD `environment`
  - capable of working on both `client` and `server` side

4. `Harmony` (ES6)
  - utilized for both `client` & `server` side
  - using `import` & `export` syntax
  - able to `tree shake`
  - static analyzing: can determine `imports` and `exports` at `compile` time 
  - support for `live changes` in module itself


#### General module bundler:

1. webpack: 
    - bundle/package up js files for usage in a browser
    - uses CommonJS module system
    - features: code splitting, async loading & tree shaking
2. rollup: 
    - complies small pieces of JavaScript code into something larger, eg: library or application
    - uses ES6 module system
    - features: support tree shaking, but not async loading

Tips: Babel: is a transpiler  (just transpile, never bundle code)

Suggestion: using rollup for building `library`, using webpack for building `application`



#### Tree shaking in Webpack

!! Please read this <a href="https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038" target="_blank">article</a> !!!!

Basic configuration for webpack tree shaking:
```js
  // Base Webpack Config for Tree Shaking
  const config = {
  mode: 'production',
  optimization: {
    usedExports: true,
    minimizer: [
    new TerserPlugin({...})
    ]
  }
  };
```


At the end, how to create your own library, here is a better <a href="" target="_blank">reference</a>
