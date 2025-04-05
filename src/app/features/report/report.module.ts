import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { CustomerreportComponent } from './pages/customerreport/customerreport.component';
import { DiscountreportComponent } from './pages/discountreport/discountreport.component';
import { ExpensereportComponent } from './pages/expensereport/expensereport.component';
import { PaymentreportComponent } from './pages/paymentreport/paymentreport.component';
import { PurchasereportComponent } from './pages/purchasereport/purchasereport.component';
import { SalereportComponent } from './pages/salereport/salereport.component';
import { ShippingchargereportComponent } from './pages/shippingchargereport/shippingchargereport.component';
import { StockreportComponent } from './pages/stockreport/stockreport.component';
import { SupplierreportComponent } from './pages/supplierreport/supplierreport.component';
import { TaxreportComponent } from './pages/taxreport/taxreport.component';
import { UserreportComponent } from './pages/userreport/userreport.component';
import { WarehousereportComponent } from './pages/warehousereport/warehousereport.component';
import { ProductreportComponent } from './pages/productreport/productreport.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerreportComponent,
    DiscountreportComponent,
    ExpensereportComponent,
    PaymentreportComponent,
    ProductreportComponent,
    PurchasereportComponent,
    SalereportComponent,
    ShippingchargereportComponent,
    StockreportComponent,
    SupplierreportComponent,
    TaxreportComponent,
    UserreportComponent,
    WarehousereportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
    
  ]
})
export class ReportModule { }
