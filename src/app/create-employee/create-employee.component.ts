import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
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

  OnSubmit(){
    this.temp=this.employeeForm.value;
    this.createEmployee(this.temp);
  }
  createEmployee(employee:Employee){
    // can also directly give "this.employeeForm.value" instead of "employee"
    this.empServ.createEmployee(employee).subscribe(
      (data)=>{
        this.message=data.message;

    });
  }
}
