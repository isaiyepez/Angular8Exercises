import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }
  public errorMsg;
  public employees = [];

  ngOnInit(): void {
    // Since getEmployees returns an observable, we need to
    // subscribe to it.
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
      error => this.errorMsg = error);
  }

}
