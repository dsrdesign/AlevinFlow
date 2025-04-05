import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { AddsupplierComponent } from './pages/addsupplier/addsupplier.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupplierlistComponent } from './pages/listsupplier/supplierlist.component';
import { UpdatesupplierComponent } from './pages/updatesupplier/updatesupplier.component';
import { SupplierService } from './services/supplier.service';


@NgModule({
  declarations: [
    AddsupplierComponent,
    SupplierlistComponent,
    UpdatesupplierComponent,
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule, 
    SharedModule
  ],
  providers: [SupplierService]
})
export class SupplierModule { }
