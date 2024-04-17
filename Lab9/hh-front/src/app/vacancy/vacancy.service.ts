import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './vacancy.interface';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://your-api-url/api/vacancies/';

  constructor(private http: HttpClient) { }

  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}?company=${companyId}`);
  }
}
