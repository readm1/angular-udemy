import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: CourseImageComponent;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.image);
  }

  ngOnInit(): void {}

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return "beginner";
    }
  }
}
