import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { AddRoleComponent } from './pages/add-role/add-role.component';
import { ListRoleComponent } from './pages/list-role/list-role.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddRoleComponent,
    ListRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModule
  ]
})
export class RoleModule { }
