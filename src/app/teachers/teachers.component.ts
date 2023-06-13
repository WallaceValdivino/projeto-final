
import { TeacherService } from './../teacher.service';

import { Component, OnInit } from '@angular/core';

import { Teacher } from '../teacher';

import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  Teachers: Teacher[] = [];
  Teacher: Teacher = {} as Teacher;
  isEditing : boolean = false;



  constructor(private TeacherService: TeacherService) {

  }

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers() {
    this.TeacherService.getTeachers().subscribe({
      next: (data) => (this.Teachers = data),
    });
  }
  onCleanEvent() {
this.isEditing = false;

  }
  onSaveEvent(estudant: Teacher) {
      if(this.isEditing){
        this.TeacherService.edit(estudant).subscribe({
      next: () =>{
        this.loadTeachers();
        this.isEditing = false;
      }
        }

        )
      }
      else{


          this.TeacherService.save(estudant).subscribe(
            {
              next: data =>{ this.Teachers.push(data);
              }
            }
          )
        }


}

  edit(Teacher : Teacher){
this.Teacher = Teacher;
this.isEditing = true;
  }

  delete(Teacher : Teacher){
    this.TeacherService.delete(Teacher).subscribe({

      next: () => this.loadTeachers()
    })
  }




}
