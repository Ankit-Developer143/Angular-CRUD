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
  deleteProduct(id: string) {
    return this.httpClient.delete(this.getUrlById(id))
  }




  updateCoursesById(course:Course){
    return this.httpClient.put(this.getUrlById(course.id),course)
  }

  // getCoursesById(id:string){
  //   return this.httpClient.get(this.getUrlById(id)) 
  // }
  
  getCoursesById(id:string):Observable<any>{
    return this.httpClient.get(this.getUrlById(id))
  }


  getUrlById(id:any){
    return `${BASE_URL}/${id}`
  }

}
