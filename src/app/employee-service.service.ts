import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  getAllUrl:string="http://localhost:8080/employee/all";
  
  createUrl:string="http://localhost:8080/employee/create";
  updateUrl:string="http://localhost:8080/employee/update";
  
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getAllUrl);
  }
  getEmployeeById(id:number):Observable<Employee>{
    let getByIdUrl:string="http://localhost:8080/employee/"+id;
    return this.http.get<Employee>(getByIdUrl);
  }
  createEmployee(data:Employee):Observable<any>{
    return this.http.post<any>(this.createUrl,data);
  }
  updateEmployee(data:Employee):Observable<any>{
    return this.http.put<any>(this.updateUrl,data);
  }
  deleteEmployee(id:number):Observable<any>{
    let deleteByIdUrl:string="http://localhost:8080/employee/delete/"+id;
    return this.http.delete<any>(deleteByIdUrl);
  }
}
