import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ShowEmployeeByIdComponent } from './show-employee-by-id/show-employee-by-id.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'show',component:ShowEmployeeComponent},
  {path:'show/:id',component:ShowEmployeeByIdComponent},
  {path:'create',component:CreateEmployeeComponent},
  {path:'update',component:UpdateEmployeeComponent},
  {path:'delete',component:DeleteEmployeeComponent},
  {path:'',redirectTo:'show',pathMatch:'full'},
  {path:'**',redirectTo:'show',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
