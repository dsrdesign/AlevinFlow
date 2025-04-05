import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddalimentComponent } from './pages/addaliment/addaliment.component';
import { ListAlimentComponent } from './pages/list-aliment/list-aliment.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: 'add', component: AddalimentComponent},
  {path: 'list', component: ListAlimentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentRoutingModule { }
