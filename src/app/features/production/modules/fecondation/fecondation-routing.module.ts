import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFecondationComponent } from './pages/add-fecondation/add-fecondation.component';
import { ListFecondationComponent } from './pages/list-fecondation/list-fecondation.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddFecondationComponent },
  { path: 'list', component: ListFecondationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FecondationRoutingModule { }
