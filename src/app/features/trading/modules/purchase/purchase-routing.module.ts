import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpurchaseComponent } from './pages/addpurchase/addpurchase.component';
import { ManagepurchaseComponent } from './pages/managepurchase/managepurchase.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddpurchaseComponent},
  {path: 'list', component: ManagepurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
