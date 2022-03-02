import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>;

  constructor() {}

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.images);
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
