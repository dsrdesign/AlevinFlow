import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatesupplierComponent } from './pages/updatesupplier/updatesupplier.component';
import { SupplierlistComponent } from './pages/listsupplier/supplierlist.component';
import { AddsupplierComponent } from './pages/addsupplier/addsupplier.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddsupplierComponent},
  {path: 'update', component: UpdatesupplierComponent},
  {path: 'list', component: SupplierlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
