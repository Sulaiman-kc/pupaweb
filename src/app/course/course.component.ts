import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  course: string;
  slno: number;
  branch: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {slno: 1, course: 'Hydrogen', branch: 'H'},
];
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  
  displayedColumns: string[] = ['slno', 'course', 'branch'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}
