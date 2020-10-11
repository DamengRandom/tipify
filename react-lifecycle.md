### React Lifecycle Methods

React lifecycle methods can be categorized as:
  - Mounting: constructor -> getDerivedStateFromProps -> render -> componentDidMount
  - Updating: shouldComponentUpdate -> getDerivedStateFromProps -> getSnapshotBeforeUpdate -> componentDidUpdate
  - Unmounting: componentWillUnmount

#### Details of lifecycle methods:

`constructor`: always run first, usually where to set the state and get the props (if compoennt has parent component)

`getDerivedStateFromProps`: will get called by following situations:
  - component is initialised
  - receving new props whether they are getting changes or not
  - parent component is re-rendered

`render`: make sure the component is rendered / mounted in the DOM properly

`componentDidMount`: after component has rendered (mounted), usually for API call (egL fetch data)

`shouldComponentUpdate`: is for developer to control for whether trigger re-rendering component or not

`componentDidUpdate`: It has 2 arguments (`prevProps` `prevState`) to compare with current state or props and it normally get triggered when calling `this.setState({...props})` (eg if previous state is different from current state, then trigger data re-fetech)

`getSnapshotBeforeUpdate`: thsi method get called before virtual DOM starts to update the DOM based on state change

`componentWillUnmount`: for unmount a component for avoding momery leak issue
