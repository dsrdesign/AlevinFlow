import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddecesComponent } from './page/adddeces/adddeces.component';
import { ListdecesComponent } from './page/listdeces/listdeces.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AdddecesComponent },
  { path: 'list', component: ListdecesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecesRoutingModule { }
