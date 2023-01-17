import { Component } from '@angular/core';
import {
  Course,
  node_course,
  react_course,
  typescript_course,
} from './data/courses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses: Course[] = [react_course, typescript_course, node_course];
}
