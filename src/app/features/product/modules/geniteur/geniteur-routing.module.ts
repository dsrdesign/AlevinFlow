import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgeniteurComponent } from './pages/addgeniteur/addgeniteur.component';
import { ListGeniteurComponent } from './pages/list-geniteur/list-geniteur.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: 'add', component: AddgeniteurComponent},
  {path: 'list', component: ListGeniteurComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeniteurRoutingModule { }
