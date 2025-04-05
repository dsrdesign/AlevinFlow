import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpenseComponent } from './page/addexpense/addexpense.component';
import { UpdateexpenseComponent } from './page/updateexpense/updateexpense.component';
import { ListexpenseComponent } from './page/listexpense/listexpense.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddexpenseComponent},
  {path: 'update', component: UpdateexpenseComponent},
  {path: 'list', component: ListexpenseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
