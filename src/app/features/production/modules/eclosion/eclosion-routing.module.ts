import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEclosionComponent } from './pages/add-eclosion/add-eclosion.component';
import { UpdateEclosionComponent } from './pages/update-eclosion/update-eclosion.component';
import { ListEclosionComponent } from './pages/list-eclosion/list-eclosion.component';
import { DetailEclosionComponent } from './pages/detail-eclosion/detail-eclosion.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddEclosionComponent },
  { path: 'update', component: UpdateEclosionComponent },
  { path: 'list', component: ListEclosionComponent },
  { path: 'list/:idCycle', component: DetailEclosionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EclosionRoutingModule { }
