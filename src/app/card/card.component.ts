import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../data/courses';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private courseService: CourseService) {}

  @Input() course!: Course;

  startCourse() {
    this.courseService.setCourse(this.course);
  }
}
