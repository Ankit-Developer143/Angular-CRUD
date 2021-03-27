import { Course } from './../models/courses.model';

import { Component, OnInit,EventEmitter, Output} from '@angular/core';


import { CoursesService } from '../Services/courses.service';
import { map } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  selectedCourse:any = {};

  courses:Course[] = []

  allData:any[] =[] 
  snack: any;
  constructor( private _courses:CoursesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.showData()
    
    
  }

  

  showData(){
    this._courses.getData().subscribe(data =>{
      this.allData = data.courses;
      console.log(this.allData);
    })
  }

saveCourse(course: Course) {
  if(course.id){
    this._courses.updateCoursesById(course).subscribe(res =>{
      console.log(res);
    })
  }else{
  this._courses.create(course).subscribe(res => {
      console.log(res);
    })
   
}
}

  selectCourse(courses:Course){
    this.selectedCourse = courses;
    console.log(courses)
    console.log(courses.id);

  }
  deleteCourse(courseId:string){
   this._courses.deleteProduct(courseId).subscribe(result =>{
     console.log(result);
   })
  }
}
