import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-UI';
  studentDeatils = null;

  studentUpdate = {
    rollNumber:'',
    name:'',
    address:'',
    percentage:'',
  };

  constructor(private studentService: StudentService){
    this.getStudentsDetails();
  }
  
  register(registerForm: NgForm){
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) =>{
        console.log(resp);
        registerForm.reset();
        this.getStudentsDetails();//this get method will call the recentely add studnets
      },
      (err) =>{
        console.log(err);
      }
    );
  }
  getStudentsDetails(){
    this.studentService.getStudents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDeatils = resp;
      },
      (err) => {
        console.log(err);
        
      }
    );
  }
  
  deleteStudentById(students){
    this.studentService.deleteStudent(students.rollNumber).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
        
      },
      (err) => {
        console.log(err);
        
      }
    );
  }

  edit(student){
   this.studentUpdate = student;
  }

  updateStudent(){
   this.studentService.updateStudent(this.studentUpdate).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
   );
  }
}
