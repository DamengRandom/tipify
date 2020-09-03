### React general tips


#### Make API call inside componentDidMount method instead of componentWillMount method:

Explanantion:

Using a fetch call within `componentWillMount()` causes the component to render with empty data at first, because `componentWillMount()` will `NOT` return before the first render of the component.

Due to the fact that JavaScript events are async, when you make an API call, the browser continues to do other work while the call is still in motion. With React, while a component is rendering it `doesn’t wait` for `componentWillMount()` to finish, so the component continues to render.

<a href="https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n" target="_blank">Reference</a>
