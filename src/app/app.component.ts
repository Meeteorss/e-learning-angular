import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

import { QuizService } from './quiz.service';
import { isEmpty } from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.courseService.selectedCourse$.subscribe((value) => {
      this.hasStarted = !isEmpty(value);
    });
    this.quizService.selectedQuiz$.subscribe((value) => {
      this.quizStarted = !isEmpty(value);
    });
  }
  hasStarted!: boolean;
  quizStarted: boolean = false;

  back() {
    this.courseService.setCourse({});
    this.courseService.setSection({});
    this.quizService.setQuiz({});
    this.quizService.setCurrentQuestionIndex(0);
  }
}
