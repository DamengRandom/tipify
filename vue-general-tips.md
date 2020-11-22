### Vue JS (Version 3)

1. VueJS component contains 3 parts:
    - template: html view
    - script: logics
    - style: css styling (scoped: meaning style only works for this component)

2. `data()`: contains all the data (eg API returns) for the component

3. `methods`: a place to write all customised functions 

4. Vue LifeCycle methods:
  - beforeCreate(): before template get ready
  - created(): able to get `data()` attributes value fro this component
  - beforeMount(): runs before `initial render` after `template` or `render functions` have been compiled
  - mounted(): component finish `rendered` [proves that component has finished load process (we can shw some data after `mounted`)]
  - beforeUpdate(): get running after `data changed` and before `DOM re-rendered`
  - updated(): trigger DOM re-render
  - beforeDestroy(): reset some values before component `vanished`
  - destroyed(): `destroyed` component

  beforeCreate && created -> initialization
  beforeMount && mounted -> render
  beforeUpdate && updated -> re-render
  beforeDestroy && destroyed -> teardown

  <a href="https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle" target="_blank">reference here</a>

5. common directives: 
  - `v-once`: only the first time variable setup value get rendered, eg: you set variable `X` value at `data()` function as 1, and `mounted()` set `X` to 2, so now, only 1 get rendered !!
  - `v-html`: render html pieces of code which is set inside `data()` function
  - `v-for`: loop array of elements, eg below:
  ```html
    <li v-bind:key="greeting.content" v-for="(greeting, index) in greetings">
      {{ index + 1 }} - {{ greeting.content }}
    </li>
  ```
  - `v-on:click`: trigger clicks event, define method inside `methods` object [another syntax sugar: `@click`]
  - `v-bind:value`: bind the value with `data()` function value [another syntax sugar: `:value`]
  - `@input="handleChange($event)"`: 2 way data binding, eg below:
  ```html
    <input type="text" :value="textString" @input="handleChange($event)" />
    or simpler solution: using `v-model`:
    <input type="text" v-model="textString" />
  ```
  - `@keyup.enter`: try to trigger event when we click `Enter` key on keyboard

6. Command `vue ui` is so cool, which allows developer to create a project visually and also able to run `build` process and so `easily` check with the code performance !!!!!!!!!!

7. `computed` vs `methods`:
- computed: 
  * when we need to `filter` or `transform` the data, we consider to use computed property
  * computed values are `cached` for avoiding repetitive calculations (very important)
  * in html, no need parentheses `()`
- method:
  * just like `normal` js method,
  * normally `don't` use `arrow` function, because not able to read `this` value
  * in html, `needs` parentheses `()`

*** Difference example: addToA() and addToB() methods put inside `methods` and `computed`, which results are different (see <a href="https://stackoverflow.com/questions/44350862/method-vs-computed-in-vue" target="_blank">here</a>)

8. `watch`: used for handling `expensive operations` like `frequently data change` -> ask user input and make an API request call and get its response [Example - <a href="https://vuejs.org/v2/guide/computed.html#Watchers" target="_blank">here</a>]

- <a href="https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property" target="_blank">here</a> is the difference between `computed` and `watch`.

9. Vue Reactivity concept: simple word, when we change a element data value, the page will reflect the changes and get value updated as latest value !!!! This <a href="https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system/" target="_blank">video</a> is like `must` watch !!




<i>Please send to me an email to correct me <a href="mailto: damonwu0605@gmail.com">here</a> if it's worng</i>