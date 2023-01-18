import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from './data/courses';
import { node_quiz, react_quiz, Test, typescript_quiz } from './data/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quiz$ = new BehaviorSubject<any>({});
  selectedQuiz$ = this.quiz$.asObservable();
  private questionIndex$ = new BehaviorSubject<number>(0);
  currentQuestionIndex$ = this.questionIndex$.asObservable();
  setQuiz(quiz: Test | {}) {
    this.quiz$.next(quiz);
  }
  setCurrentQuestionIndex(n?: number) {
    const newIndex = n?.toString ? n : this.questionIndex$.value + 1;
    console.log('new index ', newIndex, n);

    this.questionIndex$.next(newIndex);
  }

  getQuizByCourse(course: Course): Test {
    const quizs = [react_quiz, typescript_quiz, node_quiz].filter(
      (quiz) => quiz.course.title === course.title
    );

    return quizs[0];
  }
}
