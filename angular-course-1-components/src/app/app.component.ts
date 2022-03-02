import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;
  // title = COURSES[0].description;
  // price = 9.9872367234789;
  // rate = 0.67;
  // startDate = new Date(2000, 0, 1);
  course = COURSES[0];

  @ViewChild("cardRef1", { read: ElementRef })
  card1: CourseCardComponent;

  @ViewChild("container")
  containerDiv: ElementRef;

  onCourseSelected(course: Course) {
    console.log("card1", this.card1);
  }
}
