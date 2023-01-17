import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Chapter, Course, Section } from '../data/courses';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private quizService: QuizService
  ) {}
  selectedCourse!: Course;
  currentChapter!: Chapter;
  currentSection!: Section;
  ngOnInit(): void {
    this.courseService.setLevel(1, 1);
    this.courseService.selectedCourse$.subscribe((value) => {
      this.selectedCourse = value;
    });
    this.courseService.selectedChapter$.subscribe((value) => {
      this.currentChapter = value;
    });
    this.courseService.selectedSection$.subscribe((value) => {
      this.currentSection = value;
    });
  }

  selectSection(chapter: Chapter, section: Section) {
    if (this.courseService.getLevel().chapterId! < chapter.id) {
      console.log('error', this.courseService.getLevel());
    }
    this.courseService.setLevel(chapter.id, section.id);
    this.courseService.setChapter(chapter);
    this.courseService.setSection(section);
  }
}
