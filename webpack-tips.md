### Webpack 5 basics recalls

`Webpack`: its module bundler which bundle styles, assets, scripts and generate as bundle files for hosting somewhere

#### Main commands:
1. `entry`: `input` path
2. `output`: `output/generate` a bundle file
3. `mode`: develop/production
4. `module`: it has `rules` and each rule was run by installing certain packages for webpack to make bundle specific file
5. `plugins`: do things `loaders` CANNOT do, eg: `terser-webpack-plugin` Making your `bundle.js` smaller !!


#### Remembers:
1). `publicPath`: tells webpack where the generic files are located

2). `file-loader` example:

``` js
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        name: `[name].[ext]`,
        publicPath: 'https://res.cloudinary.com/cdn/test/image/upload/path/'
      }
    }
  ]
```

3). Example of support scss:

```js
  {
    test: /\.scss$/,
    use: [
      'style-loader', 'css-loader', 'sass-loader'
    ]
  }
  // the running sequence is: sass-loader (with node-sass library) then css-loader and then style-loader !!!
```

4). `babel` rule example:

```js
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }
  }
  // installed: npm i @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties -D
```

5). Browser cache:

```js
// avoid unnecessary loading, just cache if something unchanged
filename: 'bundle.[contenthash].js'
filename: 'styles.[contenthash].js'

// DON'T forget to use CleanWebpackPlugin plugin tool to remove old cached files inside dist folder
```

6). `optimization` option:
Use case: inside a file, we import an extra library like lodash, and we can use `splitChunks` to optimize each bundle (or just one bundle) file size so we can reduce file size for imported dependencies

```js
optimization: {
  splitChunks: {
    chunks: 'all', // all types of chunks
    minSize: 10000, // minimized size for a chunk to be generated
    automaticNameDelimiter: '_' // specify the delimiter to use for the generated names
  }
}

// for each path
new HtmlWebpackPlugin({
    filename: 'hello-world.html',
    chunks: ['hello-world'], // import it !!!!
    title: 'Hello world',
    ... ...
}),
```

7). How `NodeJS` read `static` files, like css, images, other types of assets files:

```js
// In node file:
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

// In webpack file:
publicPath: '/static/'

// we define the static path in express `/static` and then we webpack read it as `/static/`
```

8). How NodeJS output html file like SSR:
```js
['route1', 'route2'].forEach(function(route) { // multiple routes/pages
  app.get('/' + route + '/', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/' + route + '.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
  });
});
```

9). `module federation` (webpack 5 feature):
- is a concept which allows one application loads modules which comes from another application at run time!!

Example:

```js
// 1. sub-module setup:

// create sub-module interface page:
class HelloWorldPage {
  render() {
    const heading = new Heading();
    heading.render('hello world');
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
  }
}
// webpack settings:
const { ModuleFederationPlugin } = require('webpack').container;

// entry as sub-module page name:
entry: './src/hello-world.js',

// set a public path:
output: {
  ... ...
  publicPath: 'http://localhost:9001/'
},

// module need to be exposed: 
new ModuleFederationPlugin({
  name: 'HelloWorldApp',
  filename: 'remoteEntry.js',
  exposes: {
    './HelloWorldButton': './src/components/hello-world-button/hello-world-button.js', // one of components
    './HelloWorldPage': './src/components/hello-world-page/hello-world-page.js' // sub-module page !!!
  }
})


// 2. major module setup:

// calling in parent module JS file:
import('HelloWorldApp/HelloWorldButton')
  .then(HelloWorldButtonModule => {
    const HelloWorldButton = HelloWorldButtonModule.default;
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
  });

// In NodeJS file: make sure the path is: '/'
app.use('/', express.static(path.resolve(__dirname, '../dist')));

// webpack settings:
const { ModuleFederationPlugin } = require('webpack').container;

// entry as sub-module page name:
entry: './src/parentModule.js',

// set a public path:
output: {
  ... ...
  publicPath: 'http://localhost:9002/'
},

// calling sub-module:
new ModuleFederationPlugin({
  name: 'ParentModuleApp',
  remotes: {
    HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js'
  }
})
```

10). webpack font(s) import:

```js
// copy a font file, like google fonts
// inside webpack file, we need set a rule, eg:
{
  test: /\.(ttf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
}
```

```css
/* also need to import css files */
@font-face {
  font-family: 'Langar', cursive;
  font-weight: 300;
  src: url('./fonts/Langar-Regular.ttf');
}

html {
  body {
    font-family: 'Langar', cursive;
    font-weight: 300;
  }
}
```

11). Adding `eslint` (nothing to do with webpack, just add it):

```js
// step 1: create a `.eslintrc` file
{
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "no-console": 0 // allow console log
  }
}

// step 2: create a `.eslintignore` file to avoid the file to do lint checking:
node_modules/
/dist
/build
...

// step 3: In package.json add new command:
"lint": "eslint ."
```

12). npm webpack `production` vs `development` command example:

```js
"build": "webpack --config webpack.production.config.js",
"dev": "webpack serve --config webpack.dev.config.js --hot",
```

References:

- Recall knowledge from webpack 5 Udemy course <a href="https://www.udemy.com/course/webpack-from-beginner-to-advanced/learn/lecture/12761343#overview" target="_blank">here</a>
- <a href="https://webpack.js.org/concepts/why-webpack/" target="_blank">why webpack?</a>

<br/>
<br/>
<i>Please send to me by email to correct me <a href="mailto:damonwu0605@gmail.com">here</a> if it's wrong</i>
