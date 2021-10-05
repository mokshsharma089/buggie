import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employeeToBeDeleted;
  message:string;
  constructor(private empServ:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  deleteEmployee(val:number){
    console.log("Inside delte employee function");
    this.empServ.deleteEmployee(val).subscribe((
      data)=>{
        this.message=data.message;
    });
  }


}
