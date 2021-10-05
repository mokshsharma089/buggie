import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  employees:Employee[];
  employeeIds:number[];
  selectedEmployee:Employee;
  showIds:boolean=false;
  selectedId:number;
  showDetails:boolean=false;
  constructor(private empServ:EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.empServ.getAllEmployees().subscribe(
      (data)=>{this.employees=data;
    });
  }
  getAllIds():void{
    this.showIds=true;
    this.employeeIds=[];
    for(let i=0;i<this.employees.length;i++){
      this.employeeIds.push(this.employees[i].id);
    }
  }
  idSelected():void{
    this.router.navigate(['/show',this.selectedId]);
  }

}
