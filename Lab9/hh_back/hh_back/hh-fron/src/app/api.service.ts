import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Vacancy } from './vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}companies/`);
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}companies/${companyId}/vacancies/`);
  }
}
