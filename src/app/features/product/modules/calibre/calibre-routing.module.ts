import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCalibreComponent } from './pages/add-calibre/add-calibre.component';
import { ListCalibreComponent } from './pages/list-calibre/list-calibre.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: 'add', component: AddCalibreComponent},
  {path: 'list', component: ListCalibreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibreRoutingModule { }
