import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AydApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${'/ayd/api/aydws/usuarios/'}`)
      .pipe();
  }

}
