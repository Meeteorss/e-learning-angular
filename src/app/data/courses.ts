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
};

export const react_course = {
  id: 1,
  title: 'React Course',
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
  chapters: [
    {
      id: 1,
      title: 'Chapter 1',
      sections: [
        {
          id: 1,
          title: 'Section 1',
          content:
            'This is the content for section 1 of chapter 1 in course 2.',
        },
        {
          id: 2,
          title: 'Section 2',
          content:
            'This is the content for section 2 of chapter 1 in course 2.',
        },
      ],
    },
    {
      id: 2,
      title: 'Chapter 2',
      sections: [
        {
          id: 1,
          title: 'Section 1',
          content:
            'This is the content for section 1 of chapter 2 in course 2.',
        },
        {
          id: 2,
          title: 'Section 2',
          content:
            'This is the content for section 2 of chapter 2 in course 2.',
        },
      ],
    },
  ],
};
export const node_course = {
  id: 1,
  title: 'NodeJs Course',
  chapters: [
    {
      id: 1,
      title: 'Chapter 1',
      sections: [
        {
          id: 1,
          title: 'Section 1',
          content:
            'This is the content for section 1 of chapter 1 in course 3.',
        },
        {
          id: 2,
          title: 'Section 2',
          content:
            'This is the content for section 2 of chapter 1 in course 3.',
        },
      ],
    },
    {
      id: 2,
      title: 'Chapter 2',
      sections: [
        {
          id: 1,
          title: 'Section 1',
          content:
            'This is the content for section 1 of chapter 2 in course 3.',
        },
        {
          id: 2,
          title: 'Section 2',
          content:
            'This is the content for section 2 of chapter 2 in course 3.',
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
