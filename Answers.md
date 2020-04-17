# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a UI component library. The problem it solves is it allows us to  render UI using components that are resusable and scalable. For example, if we want every product page on a multi page website have the same design. We can write out the div component styling 1 time, and then input that component where a normal div element would be placed, and that component will render the uniform style we want, at every place we implement that component. While still remaining in a .js file as well.

2. Describe component state.

    ‘State’ can be described as the current state of data in a web app. Whenever data changes or is to be manipulated, that would be changing ‘state’. 

3. Describe props.

    Properties(props) is data in an object that can be passed from one component to another as a parameter.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    Side effects are anything that affects something outside of the function being executed. We sync effects in a React component using an Effect Hook or useEffect().