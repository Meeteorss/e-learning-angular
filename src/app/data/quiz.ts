import {
  Chapter,
  Course,
  node_course,
  react_course,
  typescript_course,
} from './courses';

export type Question = {
  question: string;
  choices: string[];
  answer: string;
};
export type Test = {
  id: number;
  course: Course;
  questions: Question[];
};

export const react_questions: Question[] = [
  {
    question: 'What is the Virtual DOM in ReactJs?',
    choices: [
      'A virtual representation of the actual DOM',
      "A virtual representation of the component's state",
      "A virtual representation of the component's props",
      "A virtual representation of the component's events",
    ],
    answer: 'A virtual representation of the actual DOM',
  },
  {
    question: 'What is the purpose of JSX in ReactJs?',
    choices: [
      'It allows you to use JavaScript in HTML',
      'It allows you to use HTML in JavaScript',
      'It allows you to use CSS in JavaScript',
      'It allows you to use JavaScript in CSS',
    ],
    answer: 'It allows you to use HTML in JavaScript',
  },
  {
    question: 'What is the difference between state and props in ReactJs?',
    choices: [
      'State is internal to the component and props is used for external data',
      'Props is internal to the component and state is used for external data',
      'State and props are used for the same purpose',
      'State and props are used for different purposes but same data',
    ],
    answer:
      'State is internal to the component and props is used for external data',
  },
];
const typescript_questions: Question[] = [
  {
    question: 'What is the main benefit of using TypeScript?',
    choices: [
      'Improved code readability',
      'Better type safety',
      'Improved performance',
      'Better code organization',
    ],
    answer: 'Better type safety',
  },
  {
    question: "What is the use of the 'interface' keyword in TypeScript?",
    choices: [
      'To define a class',
      'To define an object',
      'To define a function',
      'To define the structure of an object',
    ],
    answer: 'To define the structure of an object',
  },
  {
    question: 'How does TypeScript differ from JavaScript?',
    choices: [
      'TypeScript is a more recent version of JavaScript',
      'TypeScript is a completely different language',
      'TypeScript has optional types, interfaces, and class-based object-oriented programming',
      'TypeScript has more functional programming features',
    ],
    answer:
      'TypeScript has optional types, interfaces, and class-based object-oriented programming',
  },
];
const node_questions: Question[] = [
  {
    question: 'What is NodeJs used for?',
    choices: [
      'Building client-side web applications',
      'Building server-side web applications',
      'Building mobile applications',
      'Building desktop applications',
    ],
    answer: 'Building server-side web applications',
  },
  {
    question: 'What package manager is commonly used with NodeJs?',
    choices: ['npm', 'pip', 'gem', 'maven'],
    answer: 'npm',
  },
  {
    question: "What is the use of the 'require' keyword in NodeJs?",
    choices: [
      'To import a module',
      'To export a module',
      'To declare a variable',
      'To define a function',
    ],
    answer: 'To import a module',
  },
];

export const react_quiz: Test = {
  id: 1,
  course: react_course,
  questions: react_questions,
};
export const typescript_quiz: Test = {
  id: 2,
  course: typescript_course,
  questions: typescript_questions,
};
export const node_quiz: Test = {
  id: 3,
  course: node_course,
  questions: node_questions,
};
