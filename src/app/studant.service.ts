import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Studant } from './studant';

@Injectable({
  providedIn: 'root',
})
export class StudantService {
  url = 'http://localhost:3000/studants';

  constructor(private http: HttpClient) {}
  getStudants(): Observable<Studant[]> {
    return this.http.get<Studant[]>(this.url);
  }
  getStudant(id: number): Observable<Studant> {
    return this.http.get<Studant>(`${this.url}/${id}`);
  }

  save(Studant: Studant): Observable<Studant> {
    return this.http.post<Studant>(this.url, Studant);
  }

  edit(Studant: Studant): Observable<Studant> {
    return this.http.put<Studant>(`${this.url}/${Studant.id}`, Studant);
  }

  delete(Studant: Studant): Observable<void> {
    return this.http.delete<void>(`${this.url}/${Studant.id}`);
  }
}
