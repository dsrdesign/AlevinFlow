import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerService } from './services/customer.service';


@NgModule({
  declarations: [
    AddCustomerComponent,
    UpdateCustomerComponent,
    ListCustomerComponent,
    
   
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
