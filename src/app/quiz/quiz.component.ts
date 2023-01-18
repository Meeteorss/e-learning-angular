import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Question, Test } from '../data/quiz';
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
    this.quizService.currentQuestionIndex$.subscribe((value) => {
      this.currentQst = this.selectedQuiz.questions[value];
      this.cpt = value;
    });
  }
  cpt!: number;
  selectedQuiz!: Test;
  showQuiz!: boolean;
  currentQst!: Question;
  score!: number;
  isFinished: boolean = false;
  showCert: boolean = false;
  dateCert: string = '';
  answer(answer: string, guess: string) {
    if (answer === guess) {
      console.log('TRUE');

      this.score++;
    } else {
      console.log('FALSE');
    }
    if (this.cpt < this.selectedQuiz.questions.length - 1) {
      this.quizService.setCurrentQuestionIndex();
    } else {
      this.isFinished = true;
      this.showCert = this.score > 1;
      this.dateCert = new Date().toDateString();
    }
  }
}
