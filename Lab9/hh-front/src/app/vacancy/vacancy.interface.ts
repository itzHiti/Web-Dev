import { Company } from "../company/company.interface";

export interface Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: Company;
  }