import { Course } from './../models/courses.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/api'
@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  
  

  constructor(private httpClient:HttpClient) { }

  getData():Observable<any>{
    return this.httpClient.get(BASE_URL)

  }

  //Here Courses Are coming from Backend and its subscribe backend 
  create(course: Course) {
    return this.httpClient.post(BASE_URL, course)
  }

  // delete(courseId:string):any{
  //   return this.delete(`{this.getUrlById(courseId)}`)
  // }
  deleteProduct(id: string) {
    return this.httpClient.delete(this.getUrlById(id))
  }
  // getUrlById(id:string){
  //   return `${BASE_URL}/${id}`
  // }



  updateCoursesById(course:Course){
    return this.httpClient.put(this.getUrlById(course._id),course)
  }
  


  getUrlById(id:string){
    return `${BASE_URL}/${id}`
  }

}
