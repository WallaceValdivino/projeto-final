import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css'],
})
export class TeacherFormComponent implements OnChanges {
  @Input()
  Teacher: Teacher = {} as Teacher;

  @Output()
  saveEvent = new EventEmitter<Teacher>();

  @Output()
  cleanEvent = new EventEmitter<void>();
  formGroupTeacher: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formGroupTeacher = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      location: ['', [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupTeacher.setValue(this.Teacher);
  }

  save() {
    this.submitted = true;
    if (this.formGroupTeacher.valid) {
      this.saveEvent.emit(this.formGroupTeacher.value);
      this.formGroupTeacher.reset();
      this.submitted = false;
    }
  }
  clean() {
    this.cleanEvent.emit();
    this.formGroupTeacher.reset();
    this.submitted = false;
  }
  get name(): any {
    return this.formGroupTeacher.get('name');
  }

  get email(): any {
    return this.formGroupTeacher.get('email');
  }

  get cpf(): any {
    return this.formGroupTeacher.get('cpf');
  }

  get location(): any {
    return this.formGroupTeacher.get('location');
  }
}
