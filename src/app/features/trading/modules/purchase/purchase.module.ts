import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddpurchaseComponent } from './pages/addpurchase/addpurchase.component';
import { ManagepurchaseComponent } from './pages/managepurchase/managepurchase.component';
import { PurchaseService } from './service/purchase.service';
import { AlimentService } from 'src/app/features/product/modules/aliment/services/aliment.service';
import { SupplierService } from 'src/app/features/supplier/services/supplier.service';
import { UserService } from 'src/app/features/user/services/user.service';


@NgModule({
  declarations: [
    AddpurchaseComponent,
    ManagepurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ],
  providers: [PurchaseService, AlimentService, SupplierService, UserService]
})
export class PurchaseModule { }
