import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../data/courses';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() course!: Course;
  @Output() startCourseEvent = new EventEmitter<number>();
  startCourse(id: number) {
    this.startCourseEvent.emit(id);
  }
}
