import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course, getCourseById, Section } from '../data/courses';
import { QuizService } from '../quiz.service';
import { isEmpty } from '../utils/utils';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.courseService.selectedCourse$.subscribe((value) => {
      this.selectedCourse = value;
      this.showCourse = !isEmpty(value) ? true : false;
    });
    this.quizService.selectedQuiz$.subscribe((value) => {
      console.log('value ', isEmpty(value));

      this.showCourse = isEmpty(value) && !this.selectedCourse;
    });
  }
  showCourse!: boolean;
  selectedCourse!: Course;
}
