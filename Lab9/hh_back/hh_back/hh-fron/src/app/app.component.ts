import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  companies: Company[] = [];
  vacancies: Vacancy[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCompanies().subscribe(data => this.companies = data);
  }

  selectCompany(company: Company): void {
    this.api.getVacanciesByCompany(company.id).subscribe(data => this.vacancies = data);
  }
}
