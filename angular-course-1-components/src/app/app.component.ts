import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<CourseCardComponent>;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.cards);
  }

  onCourseSelected(course: Course) {}

  onCoursesEdited() {
    this.courses.push(this.courses[1]);
  }
}
