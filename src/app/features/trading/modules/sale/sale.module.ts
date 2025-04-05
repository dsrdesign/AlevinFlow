import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsaleComponent } from './pages/newsale/newsale.component';
import { ManagesaleComponent } from './pages/managesale/managesale.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SaleService } from './services/sale.service';
import { CalibreService } from 'src/app/features/product/modules/calibre/service/calibre.service';
import { CustomerService } from 'src/app/features/customer/services/customer.service';
import { UserService } from 'src/app/features/user/services/user.service';


@NgModule({
  declarations: [
    NewsaleComponent,
    ManagesaleComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SharedModule
  ],
  providers: [SaleService, CalibreService, CustomerService, UserService]
})
export class SaleModule { }
