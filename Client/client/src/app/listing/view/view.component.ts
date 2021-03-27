import { Course } from './../../models/courses.model';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../Services/courses.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data:any;
  courseId:any;
  courses:Course[] = []
  allData:any[] = [];

  constructor(private _courses:CoursesService,private route:ActivatedRoute) { 
    
  }



  ngOnInit(): void {
    this.route.params.subscribe(data =>{
    this.courseId = data.id
    
    console.log(this.courseId);
    this.showData()
      
    })
  }

  showData(){
    this._courses.getCoursesById(this.courseId).subscribe(data =>{
      this.allData = data
      console.log(this.allData);


    })
  }

  }
  



