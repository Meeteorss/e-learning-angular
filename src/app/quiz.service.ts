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
  setQuiz(quiz: Test | {}) {
    this.quiz$.next(quiz);
  }

  getQuizByCourse(course: Course): Test {
    return [react_quiz, typescript_quiz, node_quiz].filter(
      (quiz) => typeof quiz.course === typeof course
    )[0];
  }
}
