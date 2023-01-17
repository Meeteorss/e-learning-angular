import { Component, OnInit } from '@angular/core';
import { Course, getCourseById } from '../data/courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  course: Course | null = null;
  initiateCourse(id: number) {
    this.course = getCourseById(id);
  }
}
