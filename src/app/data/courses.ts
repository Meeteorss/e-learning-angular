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
      title: 'Chapter 1',
      sections: [
        {
          id: 1,
          title: 'Section 1',
          content:
            'This is the content for section 1 of chapter 1 in course 1.',
        },
        {
          id: 2,
          title: 'Section 2',
          content:
            'This is the content for section 2 of chapter 1 in course 1.',
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
            'This is the content for section 1 of chapter 2 in course 1.',
        },
        {
          id: 2,
          title: 'Section 2',
          content:
            'This is the content for section 2 of chapter 2 in course 1.',
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
