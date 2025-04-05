import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'purchases',
    loadChildren: () => import("./modules/purchase/purchase.module").then(m => m.PurchaseModule)
  },
  {
    path: 'sales',
    loadChildren: () => import("./modules/sale/sale.module").then(m => m.SaleModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule { }
