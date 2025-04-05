import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AdduserComponent },
  { path: 'update', component: UpdateuserComponent },
  { path: 'list', component: ListuserComponent },
  // { path: 'detail', component: DetailuserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
