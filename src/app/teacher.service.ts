import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';


@Injectable({
  providedIn: 'root'
})
export class TeacherService{
  url = "http://localhost:3000/teachers";
 constructor(private http: HttpClient) {}
 getTeachers(): Observable<Teacher[]>{
 return this.http.get<Teacher[]>(this.url);
 }
 save(Teacher: Teacher): Observable<Teacher>{
   return this.http.post<Teacher>(this.url, Teacher);

 }
 edit(Teacher: Teacher): Observable<Teacher>{
   return this.http.put<Teacher>(`${this.url}/${Teacher.id}`, Teacher);
 }
 delete(Teacher: Teacher): Observable<void>{
   return this.http.delete<void>(`${this.url}/${Teacher.id}`);

 }


}
