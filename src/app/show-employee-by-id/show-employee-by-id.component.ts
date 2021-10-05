import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-show-employee-by-id',
  templateUrl: './show-employee-by-id.component.html',
  styleUrls: ['./show-employee-by-id.component.css']
})
export class ShowEmployeeByIdComponent implements OnInit {
  tempId:string;
  id:number;
  selectedEmployee:Employee;
  constructor(private empServ:EmployeeServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.
    subscribe((params: ParamMap)=>{
      this.tempId=params.get('id');
    });
    this.id=parseInt(this.tempId);
    this.empServ.getEmployeeById(this.id).subscribe(
      data=>this.selectedEmployee=data
      );
  }

}
