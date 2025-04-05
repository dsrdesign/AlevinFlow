import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { AddexpenseComponent } from './page/addexpense/addexpense.component';
import { ListexpenseComponent } from './page/listexpense/listexpense.component';
import { UpdateexpenseComponent } from './page/updateexpense/updateexpense.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddexpenseComponent,
    ListexpenseComponent,
    UpdateexpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    SharedModule
  ]
})
export class ExpenseModule { }
