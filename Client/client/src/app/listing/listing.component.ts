import { Course } from './../models/courses.model';

import { Component, OnInit } from '@angular/core';


import { CoursesService } from '../Services/courses.service';
import { map } from 'rxjs/operators'


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
  constructor( private _courses:CoursesService) { }

  ngOnInit(): void {
  
    this.showData()
    
  }

  

  showData(){
    this._courses.getData().subscribe(data =>{
      this.allData = data.courses;
      // this.allData = data;
      console.log(this.allData);
    })
  }


  saveCourse(selectedCoursecd:Course) {
    if(selectedCourse._id){
      this._courses.updateCoursesById(selectedCourse).subscribe(res =>{
        console.log(res);
      })
    }else{
    this._courses.create(selectedCourse).subscribe(res => {
        console.log(res);
      })
     
  }
}

  selectCourse(course:Course){
    this.selectedCourse = course;
    console.log(course)

  }
  // deleteCourse(courseId:string){
  //   this._courses.delete(courseId).subscribe((res:string)=>{
  //     console.log(res);
      
  //   })

  // }
  deleteCourse(courseId:string){
   this._courses.deleteProduct(courseId).subscribe(result =>{
     console.log(result);
   })
   

   

  
      
    

  }

  
  

}
