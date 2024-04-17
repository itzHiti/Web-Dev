import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy.interface';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  @Input() companyId: number;
  vacancies: Vacancy[];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(): void {
    this.vacancyService.getVacancies(this.companyId)
      .subscribe(vacancies => this.vacancies = vacancies);
  }
}