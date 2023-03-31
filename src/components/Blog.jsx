import React from 'react';

const Blog = () => {
  return (
    <div className='mb-6'>
      <main className="w-full max-w-7xl mx-auto mt-8">
        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium bg-sky-100">
            1. What is the difference between props and state?
          </div>
          <div className="collapse-content">
            <div className="text-lg">
              <b>Props:</b>
              <ul className="list-decimal list-inside">
                <li>Props are immutable.</li>
                <li>Props are read-only.</li>
                <li>Props can be accessed by the child component.</li>
                <li>Used to pass data between different components.</li>
              </ul>
            </div>
            <div className="text-lg">
              <b>State:</b>
              <ul className="list-decimal list-inside">
                <li>State is mutable</li>
                <li>State changes can be asynchronous.</li>
                <li>State can't be accessed by the child component.</li>
                <li>Used to manage data within components.</li>
              </ul>
            </div>
          </div>
        </div>
        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium bg-sky-100">
            2. How does useState work??
          </div>
          <div className="collapse-content">
            <div className="text-lg">
              useState is a react hook lets us to add a state variable to our component. The syntax of useState is: <br />
              <code>const [state, setState] = useState(initialstate)</code> <br />
              useState returns two values array with the initial state value and set function that can update the state and trigger a re-render.
              When we use an object as a state, it is possible that current state can replace the old state.
              In order to make sure this does not happen we would need to combine the old state with the new state manually.
            </div>
          </div>
        </div>
        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium bg-sky-100">
            3. What is the Purpose of useEffect other than fetching data?
          </div>
          <div className="collapse-content">
            <div className="text-lg">useEffect is a react Hook that lets us synchronize a component with an external system. 
            This hook allows us to perform side effects in our components. One example of side effects is fetching data.
              Some other uses of useEffect hooks are Updating the Dom and Setting any subscriptions or timers. 
              useEffect accepts two arguments. The second argument is optional.
              <br /><code>useEffect(callback, dependenies)</code><br />
              callback function can perform any side effects, such as fetching data from an API or updating the dom. 
              Dependencies is an optional array of values that the callback function relies on.
            </div>
          </div>
        </div>
        <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium bg-sky-100">
            4. How Does React work?
          </div>
          <div className="collapse-content">
            <div className="text-lg">
            React is a Javascript library that are mainly used for building the user interface (UI). 
            Components are the reusable pieces of UI code that can be combined to create more complex UIs.
             When a component is rendered, React creates a virtual representation of the UI, which is an in-memory representation of the actual DOM. 
             When a user interacts with a React component, React updates the virtual DOM to reflect the change.
             This process, known as reconciliation, helps to optimize performance and manage the state of the UI. 
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;