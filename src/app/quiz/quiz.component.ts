import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Test } from '../data/quiz';
import { QuizService } from '../quiz.service';
import { isEmpty } from '../utils/utils';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.quizService.selectedQuiz$.subscribe((value) => {
      this.selectedQuiz = value;
      this.showQuiz = !isEmpty(value);
      this.score = 0;
    });
  }
  selectedQuiz!: Test;
  showQuiz!: boolean;
  score!: number;
  answer(answer: string, guess: string) {
    if (answer === guess) this.score++;
  }
}
