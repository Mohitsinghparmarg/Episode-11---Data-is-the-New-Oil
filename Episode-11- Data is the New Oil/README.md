## What is Higher Order Component?
    Higher Order Component is a function that takes a Component and 
    returns a Component.Basically it adds Some Extra Features to that Component and returns it back.

## What is prop drilling?
   
      Prop drilling in React refers to the process of passing data from a parent component down to deeply nested child components
      through intermediate components that do not actually use the data themselves. It occurs when you need to pass data through 
      several layers of components to reach a deeply nested component that requires that data for rendering or functionality.


               // ParentComponent.js
                        import React from 'react';
                        import ChildComponent from './ChildComponent';

                        const ParentComponent = () => {
                        const data = "Hello from parent";
                        
                        return (
                            <div>
                            <ChildComponent data={data} />
                            </div>
                        );
                        };
                      export default ParentComponent;

                // ChildComponent.js

                        import React from 'react';
                        import GrandChildComponent from './GrandChildComponent';

                        const ChildComponent = ({ data }) => {
                        return (
                            <div>
                            <GrandChildComponent data={data} />
                            </div>
                        );
                        };
                         export default ChildComponent;

                 // GrandChildComponent.js
                        import React from 'react';

                        const GrandChildComponent = ({ data }) => {
                        return (
                            <div>
                            <p>{data}</p>
                            </div>
                        );
                        };
                        export default GrandChildComponent;






## What is lifting the state up?

     "Lifting state up" is a concept in React where you move the state of a component higher up 
     in the component hierarchy to a common ancestor, typically a parent component,
     so that multiple child components can share and modify that state.

     Here's why you might want to lift state up:

        Sharing State:
               Sometimes, multiple components in your application need access to the same piece of state. By lifting 
               the state up to a common ancestor, you can share that state among those components without having to pass 
               props through each intermediate component.

        Centralizing State Logic:
              Lifting state up allows you to centralize the logic for managing that state in one place. 
              This can make your code easier to understand and maintain, as the logic for updating and manipulating 
              the state is contained in a single component rather than spread across multiple components.

        Avoiding Prop Drilling:
             In some cases, you might find yourself passing props down through multiple layers of components just to 
             provide access to a piece of state. Lifting state up can help avoid this prop drilling by placing the state
             in a higher-level component where it can be easily accessed by the components that need it.



             // ParentComponent.js
                    import React, { useState } from 'react';
                    import ChildComponent from './ChildComponent';

                    const ParentComponent = () => {
                    const [count, setCount] = useState(0);

                    const incrementCount = () => {
                        setCount(count + 1);
                    };

                    return (
                        <div>
                        <p>Count: {count}</p>
                        <ChildComponent increment={incrementCount} />
                        </div>
                    );
                    };
                    export default ParentComponent;

             // ChildComponent.js
                    import React from 'react';

                    const ChildComponent = ({ increment }) => {
                    return (
                        <div>
                        <button onClick={increment}>Increment</button>
                        </div>
                    );
                    };
                    export default ChildComponent;


## What is Context Provider and Context Consumer?
    
       Context provides a way to pass data through the component tree without having to pass props manually at every level. 
       The Context API consists of two main parts: Context Provider and Context Consumer.

         Context Provider:

           -> The Context Provider is a component that provides the context to its child   components.

           -> It accepts a value prop which can be accessed by the Context Consumers nested within it.

           -> The Provider component is responsible for updating the context value and notifying the consumers when the value changes.

          -> Typically, there is one Provider component per context.

             import React, { createContext, useState } from 'react';

                        // Create a context

                        const MyContext = createContext();

                        const MyProvider = ({ children }) => {
                        const [value, setValue] = useState('default value');

                        return (
                            <MyContext.Provider value={{ value, setValue }}>
                            {children}
                            </MyContext.Provider>
                        );
                        };
                        export { MyProvider, MyContext };
        


      Context Consumer:

            ->  The Context Consumer is a component that consumes the context provided by the Context Provider.

            ->   It uses a render prop or the useContext hook to access the context value.

            ->  The Consumer component will automatically re-render whenever the context value changes.

               import React from 'react';
                import { MyContext } from './MyProvider';

                const MyConsumerComponent = () => {
                return (
                    <MyContext.Consumer>
                    {({ value, setValue }) => (
                        <div>
                        <p>Value: {value}</p>
                        <button onClick={() => setValue('new value')}>
                            Update Value
                        </button>
                        </div>
                    )}
                    </MyContext.Consumer>
                );
                };
                export default MyConsumerComponent;




  Example using useContext hook:
           
                 import React, { useContext } from 'react';
                import { MyContext } from './MyProvider';

                const MyConsumerComponent = () => {
                const { value, setValue } = useContext(MyContext);

                return (
                    <div>
                    <p>Value: {value}</p>
                    <button onClick={() => setValue('new value')}>
                        Update Value
                    </button>
                    </div>
                );
                };
                export default MyConsumerComponent;


## If you don’t pass a value to the provider does it take the default value?
     
      Yes, if you don't pass a value to the Provider, it takes the default value.
      When you create a context using createContext() in React, you can provide 
      a default value as an argument to the createContext() function. If a value 
      is not provided to the Provider, the context will default to this initial value.
        
               import React, { createContext, useContext } from 'react';

            // Create a context with a default value
                const MyContext = createContext('default value');

                const MyProvider = ({ children }) => {
                // If no value is provided to the Provider, it will default to 'default value'
                return <MyContext.Provider>{children}</MyContext.Provider>;
                };

                const MyConsumerComponent = () => {
                // Consume the context
                const value = useContext(MyContext);

                return <p>Value from context: {value}</p>;
                };

                const App = () => {
                return (
                    <MyProvider>
                    <MyConsumerComponent />
                    </MyProvider>
                );
                };

                export default App;
##   Lifting State Up
    https://legacy.reactjs.org/docs/lifting-state-up.html


##   React Context
      https://legacy.reactjs.org/docs/context.html
   
    
  

