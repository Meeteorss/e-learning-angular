export type Section = {
  id: number;
  title: string;
  content: string;
};
export type Chapter = {
  id: number;
  title: string;
  sections: Section[];
};
export type Course = {
  id: number;
  title: string;
  chapters: Chapter[];
  img?: string;
};

export const react_course = {
  id: 1,
  title: 'React Course',
  img: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
  chapters: [
    {
      id: 1,
      title: 'Introduction to React',
      sections: [
        {
          id: 1,
          title: 'What is React?',
          content:
            'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of those components in a efficient way. React also uses a virtual DOM, which optimizes updates and improves app performance..',
        },
        {
          id: 2,
          title: 'Setting up a React development environment',
          content:
            'To set up a React project, you will need Node.js and npm (Node Package Manager) installed on your computer. Once Node.js and npm are installed, you can create a new React project using the create-react-app command. This will set up a basic React project with all the necessary dependencies and files.\n npx create-react-app my-app \n cd my-app \n npm start \n This command will create a new directory called "my-app", with the basic file structure for a React project. ',
        },
      ],
    },
    {
      id: 2,
      title: 'Components and Props',
      sections: [
        {
          id: 1,
          title: 'Understanding React components',
          content:
            'In React, a component is a piece of UI that can be reused throughout the app. React components are written in JavaScript and can be either a function or a class. Components can also be nested within other components.',
        },
        {
          id: 2,
          title: 'Using props in React',
          content:
            "In React, props are used to pass data between components. Props are passed to a component as an object, and the component can access the props using the this.props object. Props are read-only and cannot be modified within the component. \n import React from 'react'; \n class MyComponent extends React.Component { \n  render() { \n return <h1>Hello, {this.props.name}</h1>; \n  } \n } \n <MyComponent name='John' /> ",
        },
        {
          id: 3,
          title: 'Handling events in React',
          content:
            "React allows developers to handle events, such as button clicks or form submissions, using event handlers. Event handlers are passed as props to a component, and they are called when the corresponding event occurs.\n import React from 'react'; \n class MyButton extends React.Component { \n   handleClick() { \n     console.log('Button was clicked!'); \n   } \n   render() { \n     return <button onClick={this.handleClick}>Click me</button>; \n   } \n } ",
        },
      ],
    },
    {
      id: 3,
      title: 'State and Lifecycle Methods',
      sections: [
        {
          id: 1,
          title: 'Understanding React state',
          content: `In React, state is used to store and manage data that can change over time. State is defined within a component and can be accessed using the this.state object. State can be updated using the setState method.\n 
            import React from 'react';
             \n class MyComponent extends React.Component { \n
                 constructor(props) { \n
                       super(props); \n
                            this.state = { counter: 0 }; \n
                             } \n
                                incrementCounter() { \n
                                       this.setState({ counter: this.state.counter + 1 }); \n
                                         } \n
                                            render() { \n
                                                   return <h1>Counter: {this.state.counter}</h1>; \n
                                                     } \n
                                                     }`,
        },
        {
          id: 2,
          title: 'Understanding React lifecycle methods',
          content:
            "React components have several lifecycle methods that are called at different points in the component's lifecycle. These methods can be used to perform actions such as fetching data or updating the DOM. Some examples of lifecycle methods include:componentDidMount: called after the component is rendered for the first time`component",
        },
      ],
    },
  ],
};
export const typescript_course = {
  id: 1,
  title: 'TypeScript Course',
  img: 'https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png',
  chapters: [
    {
      id: 1,
      title: 'Introduction to TypeScript',
      sections: [
        {
          id: 1,
          title: 'What is TypeScript?',
          content:
            'TypeScript is a programming language that is a superset of JavaScript. It adds optional static typing and other features to JavaScript, making it easier to write large and complex codebases. TypeScript is also widely used in the Angular framework.',
        },
        {
          id: 2,
          title: 'Setting up a TypeScript Project',
          content:
            'To set up a TypeScript project, you can use the npm package manager. Simply run the command npm init -y to create a new package.json file. Then, run the command npm install -D typescript to add TypeScript as a development dependency. Finally, create a new file named tsconfig.json and configure the TypeScript compiler options.',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Types and Variables in TypeScript',
      sections: [
        {
          id: 1,
          title: 'Basic Types in TypeScript',
          content:
            'TypeScript has several basic types, including number, string, boolean, and any. It also has a special type called void, which is used for functions that do not return a value.',
        },
        {
          id: 2,
          title: 'Declaring Variables in TypeScript',
          content:
            'In TypeScript, variables can be declared using the keywords let or const. The let keyword is used for variables that can be reassigned, while the const keyword is used for variables that cannot be reassigned. TypeScript also supports destructuring and spreading of variables.',
        },
      ],
    },
    {
      id: 3,
      title: 'Classes and Interfaces in TypeScript',
      sections: [
        {
          id: 1,
          title: 'Defining Classes in TypeScript',
          content:
            'In TypeScript, classes are defined using the class keyword. Classes can have properties, constructors, and methods. TypeScript also supports inheritance and polymorphism.',
        },
        {
          id: 2,
          title: 'Defining Interfaces in TypeScript',
          content:
            'Interfaces in TypeScript are used to define a contract for objects. Interfaces can have properties and methods, and classes can implement them. This helps to ensure that a class has the required properties and methods.',
        },
        {
          id: 3,
          title: 'Using Decorators in TypeScript',
          content:
            'Decorators in TypeScript are used to modify the behavior of a class, property, method, or parameter. Decorators are implemented as functions and are applied using the @ symbol.',
        },
      ],
    },
  ],
};
export const node_course = {
  id: 1,
  title: 'NodeJs Course',
  img: 'data:image/png;base64,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',
  chapters: [
    {
      id: 1,
      title: 'Introduction to Node.js',
      sections: [
        {
          id: 1,
          title: 'What is Node.js?',
          content:
            "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, creating server-side applications with JavaScript.",
        },
        {
          id: 2,
          title: 'Setting up a Node.js development environment',
          content:
            "In order to start developing with Node.js, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download the installer for Node.js from the official website. Once you have Node.js installed, you can check the version by running the command node -v in the command line.",
        },
      ],
    },
    {
      id: 2,
      title: 'Node.js Fundamentals',
      sections: [
        {
          id: 1,
          title: 'Modules',
          content:
            'In Node.js, modules are used to organize your code. You can use the require() function to import a module and the module.exports or exports object to export a module.',
        },
        {
          id: 2,
          title: 'Events',
          content:
            "Node.js uses the EventEmitter class to handle events. The EventEmitter class allows objects to emit events that other objects can listen for. To create a new event emitter, you can use the require('events') module and create a new instance of the EventEmitter class.",
        },
      ],
    },
    {
      id: 3,
      title: 'Building a Node.js Application',
      sections: [
        {
          id: 1,
          title: 'Creating a simple server',
          content:
            'Using Node.js, you can create a simple server using the http module. The http.createServer() method creates a new server and the server.listen() method starts the server on a specific port.',
        },
        {
          id: 2,
          title: 'Connecting to a database',
          content:
            'Node.js allows you to connect to databases such as MongoDB, MySQL, and PostgreSQL. You can use the mongoose package to connect to a MongoDB database and perform CRUD operations.',
        },
        {
          id: 3,
          title: 'Deploying your application',
          content:
            'Once you have built your Node.js application, you can deploy it to a hosting service such as Heroku or AWS. These hosting services provide easy ways to deploy and scale Node.js applications.',
        },
      ],
    },
  ],
};

export const getCourseById = (id: number): Course => {
  return [react_course, node_course, typescript_course].filter(
    (course) => course.id === id
  )[0];
};
