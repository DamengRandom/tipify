### VueJS Tips

<b>1.</b> VueJS component contains 3 parts:
    - template: html view
    - script: logics
    - style: css styling (scoped: meaning style only works for this component)


<b>2.</b> `data()`: contains all the data (eg API returns) for the component


<b>3.</b> `methods`: a place to write all customized functions 


<b>4.</b> Vue LifeCycle methods:
  - `beforeCreate()`: before template get ready
  - `created()`: able to get `data()` attributes value for this component
  - `beforeMount()`: runs before `initial render` after `template` or `render functions` have been compiled
  - `mounted()`: component finish `rendered` [proves that component has finished load process (we can shw some data after `mounted`)]
  - `beforeUpdate()`: get running after `data changed` and before `DOM re-rendered`
  - `updated()`: trigger DOM re-render
  - `beforeDestroy()`: reset some values before component `vanished`
  - `destroyed()`: `destroyed` component

  beforeCreate && created -> initialization
  beforeMount && mounted -> render
  beforeUpdate && updated -> re-render
  beforeDestroy && destroyed -> teardown

  <a href="https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle" target="_blank">reference here</a>


<b>5.</b> common directives: 
  - `v-once`: only the first time variable setup value get rendered, eg: you set variable `X` value at `data()` function as 1, and `mounted()` set `X` to 2, so now, only 1 get rendered !!
  - `v-html`: render html pieces of code which is set inside `data()` function
  - `v-for`: loop array of elements, eg below:
  ``` html
    <li v-bind:key="greeting.content" v-for="(greeting, index) in greetings">
      {{ index + 1 }} - {{ greeting.content }}
    </li>
  ```
  - `v-on:click`: trigger clicks event, define method inside `methods` object [another syntax sugar: `@click`]
  - `v-bind:value`: bind the value with `data()` function value [another syntax sugar: `:value`]
  - `@input="handleChange($event)"`: 2 way data binding, example below:
  ``` html
    <input type="text" :value="textString" @input="handleChange($event)" />
    or simpler solution: using `v-model`:
    <input type="text" v-model="textString" />
  ```
  - `@keyup.enter`: try to trigger event when we click `Enter` key on keyboard


<b>6.</b> Command `vue ui` is so cool, which allows developer to create a project visually and also able to run `build` process and so `easily` check with the code performance !!!!!!!!!!


<b>7.</b> `computed` vs `methods`:
- computed: 
  * when we need to `filter` or `transform` the data, we consider to use computed property
  * computed values are `cached` for avoiding repetitive calculations (very important)
  * in html, no need parentheses `()`
- method:
  * just like `normal` js method,
  * normally `don't` use `arrow` function, because not able to read `this` value
  * in html, `needs` parentheses `()`

*** Difference example: addToA() and addToB() methods put inside `methods` and `computed`, which results are different (see <a href="https://stackoverflow.com/questions/44350862/method-vs-computed-in-vue" target="_blank">here</a>)


<b>8.</b> `watch`: used for handling `expensive operations` like `frequently data change` -> ask user input and make an API request call and get its response [Example - <a href="https://stackoverflow.com/questions/43277705/vuejs-difference-between-computed-property-and-watcher#:~:text=It%20does%20not%20create%20any,property%20change%20can%20cause%20recalculation." target="_blank">here</a>]

- <a href="https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property" target="_blank">here</a> is the difference between `computed` and `watch`.

- computed: create a `new` property & do `re-calculation` if any `dependent properties` get updated, `cannot` pass any arguments

- watch: does `NOT` create new property, watch changes only for `one` specific property and has arguments `new` and `old`


<b>9.</b> Vue Reactivity concept: simple word, when we change a element data value, the page will reflect the changes and get value updated as latest value !!!! This <a href="https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system/" target="_blank">video</a> is like `must` watch!!


<b>10.</b> `$emit`: trigger an event and also allows to pass data from child to parent level, example:
```js
// child component
// method:
onClickButton() {
  this.$emit('clicked', 'aloha');
}
// trigger:
<div><button @click="onClickButton">pass child data to parent component</button></div>

// parent component
// method:
onClickChild(value) {
  console.log('value from child pass to parent: ', value);
  this.childText = value;
}
// trigger:
<Child @clicked="onClickChild($event)" />
<p>Text from child: {{ childText }}</p>
```


<b>11.</b> event bus: allow to pass data between components, example:
<a href="https://medium.com/@andrejsabrickis/https-medium-com-andrejsabrickis-create-simple-eventbus-to-communicate-between-vue-js-components-cdc11cd59860" target="_blank">Reference</a> lazy today ~~~


<b>12.</b> `mixins`: is similar concept with sass mixin functions, basically just make code DRY!!! Example:
```js
// create a mixin function (extract same function block code out to an independent file)
export default {
  computed: {
    ... ...
  }
}
// Then, call mixin from each component:
import mixinFunction from './relative/path/from/codebase';
export default {
  data() {
    ...
  },
  methods: ...,
  mixins: [mixinFunction]
}
// now your code no longer repeated!!
```


<b>13.</b> `dynamic component`: change component view based on condition, 2 key words:
- component: is the `<component :is="condition ? componentName : anotherComponent"></component>`
- keep-alive: make sure previous component contents still there, like fulfilled form, contents kept !!!

Example:

``` html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
<v-btn @click="currentComponent = 'AppDynamicComponentTwo'">
  Switch To AppDynamicComponentTwo
</v-btn>
<v-btn @click="currentComponent = 'AppDynamicComponentOne'">
  Switch To AppDynamicComponentOne
</v-btn>
```


<b>14.</b>



<i>Please send to me by email to correct me <a href="mailto:damonwu0605@gmail.com">here</a> if it's wrong</i>
