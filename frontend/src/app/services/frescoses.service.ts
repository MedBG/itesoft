import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Frescoes } from '../model/Frescoes';

@Injectable({
  providedIn: 'root'
})
export class FrescosesService {

  host = environment.host;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Frescoes[]> {
    return this.http.get<Frescoes[]>(this.host + '/frescoes');
  }

  getFrescoes(id:number): Observable<Frescoes> {
    return this.http.get<Frescoes>(this.host + '/frescoes/'+id);
  }

  getAllByYearAsc(): Observable<Frescoes[]> {
    return this.http.post<Frescoes[]>(this.host + '/frescoes/asc', null);
  }

  getAllByYearDesc(): Observable<Frescoes[]> {
    return this.http.post<Frescoes[]>(this.host + '/frescoes/desc', null);
  }

  deleteFrescoes(id:number): Observable<any> {
    return this.http.delete<any>(this.host + '/frescoes/'+id);
  }
}
