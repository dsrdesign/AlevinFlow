import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductreportComponent } from './pages/productreport/productreport.component';
import { StockreportComponent } from './pages/stockreport/stockreport.component';
import { PaymentreportComponent } from './pages/paymentreport/paymentreport.component';
import { SalereportComponent } from './pages/salereport/salereport.component';
import { PurchasereportComponent } from './pages/purchasereport/purchasereport.component';
import { ExpensereportComponent } from './pages/expensereport/expensereport.component';
import { DiscountreportComponent } from './pages/discountreport/discountreport.component';
import { TaxreportComponent } from './pages/taxreport/taxreport.component';
import { UserreportComponent } from './pages/userreport/userreport.component';
import { CustomerreportComponent } from './pages/customerreport/customerreport.component';
import { WarehousereportComponent } from './pages/warehousereport/warehousereport.component';
import { SupplierreportComponent } from './pages/supplierreport/supplierreport.component';
import { ShippingchargereportComponent } from './pages/shippingchargereport/shippingchargereport.component';

const routes: Routes = [
  {
    path: 'productreport',
    component: ProductreportComponent
  },
  {
    path: 'stockreport',
    component: StockreportComponent
  },
  {
    path: 'paymentreport',
    component: PaymentreportComponent
  },
  {
    path: 'salereport',
    component: SalereportComponent
  },
  {
    path: 'purchasereport',
    component: PurchasereportComponent
  },
  {
    path: 'expensereport',
    component: ExpensereportComponent
  },
  {
    path: 'discountreport',
    component: DiscountreportComponent
  },
  {
    path: 'taxreport',
    component: TaxreportComponent
  },
  {
    path: 'userreport',
    component: UserreportComponent
  },
  {
    path: 'customerreport',
    component: CustomerreportComponent
  },
  {
    path: 'warehousereport',
    component: WarehousereportComponent
  },
  {
    path: 'supplierreport',
    component: SupplierreportComponent
  },
  {
    path: 'shippingchargereport',
    component: ShippingchargereportComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
