import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../data/courses';
import { isEmpty } from '../utils/utils';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this.courseService.selectedCourse$.subscribe((value) => {
      this.showCards = isEmpty(value) ? true : false;
    });
    this.courses = this.courseService.getAll();
  }

  courses!: Course[];

  showCards: boolean = true;
}
