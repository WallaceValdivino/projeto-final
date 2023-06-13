import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudantsComponent } from './studants/studants.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { YesNoPipe } from './yes-no.pipe';
import { StudantFormComponent } from './studant-form/studant-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudantsComponent,
    TeacherFormComponent,
    TeachersComponent,
    HomeComponent,
    HeaderComponent,
    YesNoPipe,
    StudantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
