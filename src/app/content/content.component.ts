import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Section } from '../data/courses';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.courseService.selectedSection$.subscribe((value) => {
      this.selectedSection = value;
    });
  }

  selectedSection!: Section;
  takeQuiz() {
    this.quizService.setQuiz(
      this.quizService.getQuizByCourse(this.courseService.getSelectedCourse())
    );
  }
}
