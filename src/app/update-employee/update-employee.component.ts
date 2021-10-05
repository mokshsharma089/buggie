import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  message:string;
  temp:Employee;
  constructor(private empServ:EmployeeServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm= this.formBuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      Address: ['',Validators.required],
      salary: ['',Validators.required]
    });
  }
  updateEmployee(){
    this.empServ.updateEmployee(this.employeeForm.value).subscribe(
      (data)=>{
        this.message=data.message;

    });
  }
}
