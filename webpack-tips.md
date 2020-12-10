### Webpack basics recalls

`Webpack`: its module bundler which bundle styles, assets, scripts and generate as bundle files for hosting somewhere

#### Main commands:
1. `entry`: `input` path
2. `output`: `output/generate` a bundle file
3. `mode`: develop/production
4. `module`: it has `rules` and each rule was run by installing certain packages for webpack to make bundle specific file
5. `plugins`: do things `loaders` CANNOT do, eg: `terser-webpack-plugin` Making your `bundle.js` smaller !!


#### Remembers:
1. `publicPath`: tells webpack where the generic files are located, eg: 
2. `file-loader` example:
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
3. Example of support scss:
```js
  {
    test: /\.scss$/,
    use: [
      'style-loader', 'css-loader', 'sass-loader'
    ]
  }
  // the running sequence is: sass-loader (with node-sass library) then css-loader and then style-loader !!!
```

4. babel example:
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

5. Browser cache:

```js
// avoid unnecessary loading, just cache if something unchanged
filename: 'bundle.[contenthash].js'
filename: 'styles.[contenthash].js'

// DON'T forget to use CleanWebpackPlugin plugin tool to remove old cached files inside dist folder
```

6. TBD



<i>Please send to me by email to correct me <a href="mailto:damonwu0605@gmail.com">here</a> if it's wrong</i>
