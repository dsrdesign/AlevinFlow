import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './pages/add-role/add-role.component';
import { ListRoleComponent } from './pages/list-role/list-role.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: 'add', component: AddRoleComponent},
  {path: 'list', component: ListRoleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
