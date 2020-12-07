### Vuex Terms

#### Concept:

- `State`: app level state/data (eg: todo, posts ...)
- `Getters`: get pieces of state or computed values from state
- `Actions`: Called from components to trigger a mutation
- `Mutations`: mutate the state (update data)
- `Modules`: Each module can have its own state, getters, actions and mutations (post module, todos module)


#### How it works

My current understanding (13/11/2020):
create a store [step 0]
  --> create `module` for API related data (eg: todos) [step 1]
  --> create 4 basic methods inside module file (`state`, `getters`, `actions`, `mutations`) [step 2]
  --> create the action method and mutation method, so mutation method will be `called by action` method!!! (It something like `chaining`, `coming together` ...) [step 3]
  --> Go to `component` level, and start calling this module file defined action methods, interacting with vue `directive` methods (eg: `@click`, `@change` ...) [step 4]
  --> so far, we can see we generated a state tracking circle, from `action -> mutation -> store`

<i>Please send to me an email to correct me <a href="mailto:damonwu0605@gmail.com">here</a> if it's wrong</i>
