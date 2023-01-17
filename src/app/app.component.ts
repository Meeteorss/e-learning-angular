import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import {
  Course,
  getCourseById,
  node_course,
  react_course,
  typescript_course,
} from './data/courses';
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
  }
  hasStarted!: boolean;

  back() {
    this.courseService.setCourse({});
    this.courseService.setSection({});
    this.quizService.setQuiz({});
  }
}
