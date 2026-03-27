import React from "react";

export const courseData = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn what React is and why we use it.",
    code: `import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to React!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>This is your first component.</p>
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          React is a JavaScript library for building user interfaces. It allows
          you to create reusable UI components which present data that changes
          over time.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Component-Based:</strong> Build encapsulated components that
            manage their own state.
          </li>
          <li>
            <strong>Declarative:</strong> Design simple views for each state in
            your application.
          </li>
          <li>
            <strong>Learn Once, Write Anywhere:</strong> Develop new features
            without rewriting existing code.
          </li>
        </ul>
        <div className="bg-slate-100 p-4 rounded-md font-mono text-sm mt-4">
          npm create vite@latest my-app -- --template react
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "JSX: JavaScript XML",
    description: "Understanding the syntax extension for JavaScript.",
    code: `import React from 'react';

export default function App() {
  const name = "React Learner";
  const element = <h1>Hello, {name}!</h1>;
  
  return (
    <div className="greeting" style={{ padding: '20px' }}>
      {element}
      <p>This is JSX in action.</p>
      <p>It looks like HTML, but it's JavaScript.</p>
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          JSX is a syntax extension for JavaScript that looks similar to XML or
          HTML. It is used with React to describe what the UI should look like.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`const element = <h1>Hello, world!</h1>;

function Welcome() {
  return <div className="greeting">Welcome to React</div>;
}`}</pre>
        </div>
        <p className="text-sm italic text-gray-500 mt-2">
          Note: JSX compiles down to \`React.createElement()\` calls.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Components",
    description: "The building blocks of any React application.",
    code: `import React from 'react';

// A simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          Components let you split the UI into independent, reusable pieces. In
          React, components are just JavaScript functions.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`// A simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using component
<Welcome name="Sara" />`}</pre>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Props (Properties)",
    description: "Passing data between components.",
    code: `import React from 'react';

function Car(props) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      margin: '10px', 
      padding: '10px',
      borderRadius: '5px' 
    }}>
      <h2>I am a {props.brand}!</h2>
      <p>Model: {props.model}</p>
    </div>
  );
}

export default function Garage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" model="Mustang" />
      <Car brand="Tesla" model="Model 3" />
      <Car brand="Toyota" model="Camry" />
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          Props are arguments passed into React components. They are passed to
          components via HTML attributes and are read-only.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}`}</pre>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "State and useState Hook",
    description: "Adding interactivity to your components.",
    code: `import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <p>You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Click me
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          background: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
      >
        Reset
      </button>
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          State allows React components to change their output over time in
          response to user actions, network responses, and anything else.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</pre>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Effect Hook (useEffect)",
    description: "Handling side effects in functional components.",
    code: `import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  // This runs after every render where count has changed
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [count]); // Dependency array

  return (
    <div style={{ padding: '20px' }}>
      <h1>Timer Demo</h1>
      <h2>I've rendered {count} times!</h2>
      <p>The effect runs every second.</p>
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          The \`useEffect\` Hook lets you perform side effects in function
          components. It serves the same purpose as componentDidMount,
          componentDidUpdate, and componentWillUnmount.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup
  }, []); // Dependence array

  return <h1>I've rendered {count} times!</h1>;
}`}</pre>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Handling Events",
    description: "Responding to user interactions.",
    code: `import React from 'react';

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('You clicked submit.');
  }
  
  function handleInput(e) {
    console.log("Typing:", e.target.value);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Handling</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={handleInput} 
          placeholder="Type something..."
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          Handling events with React elements is very similar to handling events
          on DOM elements, but with some syntax differences (camelCase).
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`}</pre>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Conditional Rendering",
    description: "Rendering different UI based on state.",
    code: `import React, { useState } from 'react';

function UserGreeting() {
  return <h1 style={{ color: 'green' }}>Welcome back, User!</h1>;
}

function GuestGreeting() {
  return <h1 style={{ color: 'grey' }}>Please sign up.</h1>;
}

export default function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          In React, you can create distinct components that encapsulate behavior
          you need. Then, you can render only some of them, depending on the
          state of your application.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
          
// OR inline
<div>
  {isLoggedIn && <UserGreeting />}
</div>`}</pre>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Lists and Keys",
    description: "Rendering lists of data.",
    code: `import React from 'react';

export default function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li 
      key={number.toString()}
      style={{ padding: '5px', borderBottom: '1px solid #eee' }}
    >
      Item {number}
    </li>
  );
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>List Demo</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {listItems}
      </ul>
    </div>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          You can build collections of elements and include them in JSX using
          curly braces. Keys help React identify which items have changed.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}</pre>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Context API",
    description: "Sharing data globally without prop drilling.",
    code: `import React, { useContext, createContext, useState } from 'react';

const ThemeContext = createContext('light');

export default function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '20px' }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <hr />
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ 
      background: theme === 'dark' ? '#333' : '#eee', 
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '10px 20px',
      border: '1px solid #999',
      marginTop: '10px'
    }}>
      I am styled by theme context ({theme})!
    </button>
  );
}`,
    content: (
      <div className="space-y-4">
        <p>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </p>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono text-sm mt-4 overflow-x-auto">
          <pre>{`// Create Context
const ThemeContext = React.createContext('light');

// Provider
<ThemeContext.Provider value="dark">
  <Toolbar />
</ThemeContext.Provider>

// Consumer (useContext hook)
const theme = useContext(ThemeContext);`}</pre>
        </div>
      </div>
    ),
  },
];
