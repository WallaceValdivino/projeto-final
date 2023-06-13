import { StudantFormComponent } from './studant-form/studant-form.component';

import { StudantsComponent } from './studants/studants.component';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: StudantsComponent },
  { path: 'studants', component: StudantsComponent },

  { path: 'studantDetails/:id', component: StudantFormComponent },

  { path: 'createStudant', component: StudantFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
