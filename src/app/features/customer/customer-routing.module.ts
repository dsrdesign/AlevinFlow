import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddCustomerComponent},
  {path: 'update', component: UpdateCustomerComponent},
  {path: 'list', component: ListCustomerComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
