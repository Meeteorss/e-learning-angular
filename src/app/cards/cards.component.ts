import { Component, Input } from '@angular/core';
import { Course } from '../data/courses';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() courses!: Course[];
  showCards: boolean = true;
  toggleVisibility(b: boolean) {
    this.showCards = b;
  }
}
