import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}

  getEmployees() {
    return [
      {'id': 1, 'name': 'Andrew', 'age': 30},
      {'id': 2, 'name': 'Brandon', 'age': 40},
      {'id': 3, 'name': 'Chris', 'age': 50},
      {'id': 4, 'name': 'John', 'age': 60},
    ]
  }
}
