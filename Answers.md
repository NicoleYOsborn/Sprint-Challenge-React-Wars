# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library for building user interfaces. It creates a virtual DOM to handle changes to particular components without having to rebuild the whole application. This is really useful on an app that is handling a lot of state changes, without slowing it down too much.


1. Describe component state.

Component state is the data that is being expressed, and is subject to change.

1. Describe props.

Props is information passed from one component to another. Props can not be changed, it is read-only. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are anything that affects anything outside of the scope of the function. They can be handled with the useEffect() hook.
