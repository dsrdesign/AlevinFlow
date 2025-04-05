import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagesaleComponent } from './pages/managesale/managesale.component';
import { NewsaleComponent } from './pages/newsale/newsale.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ManagesaleComponent},
  {path: 'add', component: NewsaleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
