import {StudantService } from './../studant.service';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Studant } from '../studant';

import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-studant-form',

  templateUrl: './studant-form.component.html',

  styleUrls: ['./studant-form.component.css'],
})

export class StudantFormComponent implements OnInit {
  formGroupStudant: FormGroup;

  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,

    private StudantService: StudantService,

    private route: ActivatedRoute,

    private router: Router
  ) {
    this.formGroupStudant = formBuilder.group({
      id: [''],

      name: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],

      location: ['', [Validators.required]],

      cpf: ['', [Validators.required]],

      status: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getStudantById(id);
  }

  getStudantById(id: number) {
    this.StudantService.getStudant(id).subscribe({
      next: (data) => {
        this.formGroupStudant.setValue(data);
        this.isEditing = true;
      },
    });
  }


  save() {
    this.submitted = true;
    if (this.formGroupStudant.valid) {
      if(this.isEditing){
        this.StudantService.edit(this.formGroupStudant.value).subscribe({
          next: () =>{
            this.router.navigate(['studants'])
          }
        })
      }
      else{
        this.StudantService.save(this.formGroupStudant.value).subscribe({
          next: () => {
            this.router.navigate(['studants']);
          }
        })
      }
    }}

    cancel() {
  this.router.navigate(['studants']);
    }

    get name(): any {
      return this.formGroupStudant.get('name');
    }
    get email(): any {
      return this.formGroupStudant.get('email');
    }
    get status(): any {
      return this.formGroupStudant.get('status');
    }
    get location(): any {
      return this.formGroupStudant.get('location');
    }
    get cpf(): any {
      return this.formGroupStudant.get('location');
    }
  }
