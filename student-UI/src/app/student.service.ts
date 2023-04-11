import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  
  API = 'http://localhost:8080';

  public registerStudent(studnetData){
    return this.http.post(this.API + '/registerStudent',studnetData)
  }

  public getStudents(){
    return this.http.get(this.API + '/getStudents')
  }

  public deleteStudent(id){
    return this.http.delete(this.API + '/deleteStudent?id='+id);
  }

  public updateStudent(student){
    return this.http.put(this.API + '/updateStudents',student)
  }
}
