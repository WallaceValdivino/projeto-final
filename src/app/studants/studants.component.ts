import { StudantService } from './../studant.service';
import { Component, OnInit } from '@angular/core';
import { Studant } from '../studant';

import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studants',
  templateUrl: './studants.component.html',
  styleUrls: ['./studants.component.css'],
})
export class StudantsComponent implements OnInit {
  Studants: Studant[] = [];
  constructor(private StudantService: StudantService, private router : Router) {

  }

  ngOnInit(): void {
    this.loadStudants();
  }
  loadStudants() {
    this.StudantService.getStudants().subscribe({
      next: (data) => (this.Studants = data),
    });
  }
  edit(client : Studant){
    this.router.navigate(['studantDetails', client.id])
  }

  delete(Studant : Studant){
    this.StudantService.delete(Studant).subscribe({
      next: () => this.loadStudants()
    })
  }

  create(){
    this.router.navigate(['createStudant']);
  }

}
