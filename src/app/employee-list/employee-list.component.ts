import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    // Since getEmployees returns an observable, we need to
    // subscribe to it.
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }
}
