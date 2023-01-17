import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Chapter,
  Course,
  node_course,
  react_course,
  Section,
  typescript_course,
} from './data/courses';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private course$ = new BehaviorSubject<any>({});
  selectedCourse$ = this.course$.asObservable();
  private chapter$ = new BehaviorSubject<any>({});
  selectedChapter$ = this.chapter$.asObservable();
  private section$ = new BehaviorSubject<any>({});
  selectedSection$ = this.section$.asObservable();

  private level$ = new BehaviorSubject<{
    chapterId?: number;
    sectionId?: number;
  }>({});
  levelObservable$ = this.level$.asObservable();

  setCourse(course: Course | {}) {
    this.course$.next(course);
  }
  setChapter(chapter: Chapter | {}) {
    this.chapter$.next(chapter);
  }
  setSection(section: Section | {}) {
    this.section$.next(section);
  }

  setLevel(chapterId: number, sectionId: number) {
    this.level$.next({ chapterId, sectionId });
  }
  getLevel() {
    return this.level$.value;
  }
  getCourseById = (id: number): Course => {
    return [react_course, node_course, typescript_course].filter(
      (course) => course.id === id
    )[0];
  };
  getAll = (): Course[] => {
    return [react_course, node_course, typescript_course];
  };
  getSelectedCourse(): Course {
    return this.course$.value;
  }
}
