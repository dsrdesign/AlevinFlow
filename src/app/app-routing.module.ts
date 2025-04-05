import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './inventual/dashboard/dashboard/dashboard.component';
import { PossaleComponent } from './inventual/trading/sale/possale/possale.component';
import { NewsaleComponent } from './inventual/trading/sale/newsale/newsale.component';
import { ManagesaleComponent } from './inventual/trading/sale/managesale/managesale.component';
import { OrderdiscountComponent } from './inventual/trading/sale/popup/orderdiscount/orderdiscount.component';
import { SalereturnsComponent } from './inventual/trading/sale/salereturns/salereturns.component';
import { AddpurchaseComponent } from './inventual/trading/purchase/addpurchase/addpurchase.component';
import { ManagepurchaseComponent } from './inventual/trading/purchase/managepurchase/managepurchase.component';
import { PurchasereturnsComponent } from './inventual/trading/purchase/purchasereturns/purchasereturns.component';
import { SaleinvoiceComponent } from './inventual/trading/invoice/saleinvoice/saleinvoice.component';
import { SalesinvoiceComponent } from './inventual/trading/invoice/salesinvoice/salesinvoice.component';
import { PurchaseinvoiceComponent } from './inventual/trading/invoice/purchaseinvoice/purchaseinvoice.component';
import { AddsuplierComponent } from './inventual/supplier/addsuplier/addsuplier.component';
import { AddcustomerComponent } from './inventual/supplier/addcustomer/addcustomer.component';
import { AddbillerComponent } from './inventual/supplier/addbiller/addbiller.component';
import { SupplierlistComponent } from './inventual/supplier/supplierlist/supplierlist.component';
import { CustomerlistComponent } from './inventual/supplier/customerlist/customerlist.component';
import { BillerlistComponent } from './inventual/supplier/billerlist/billerlist.component';
import { AddexpenseComponent } from './inventual/expense/addexpense/addexpense.component';
import { CreatepaymentComponent } from './inventual/expense/createpayment/createpayment.component';
import { CategoryComponent } from './inventual/expense/category/category.component';
import { ExpenselistComponent } from './inventual/expense/expenselist/expenselist.component';
import { AdduserComponent } from './features/user/pages/adduser/adduser.component';
import { CreateroleComponent } from './inventual/usermanagement/createrole/createrole.component';
import { UserlistComponent } from './inventual/usermanagement/userlist/userlist.component';
import { WarehouselistComponent } from './inventual/warehouse/warehouselist/warehouselist.component';
import { ProductreportComponent } from './inventual/report/productreport/productreport.component';
import { StockreportComponent } from './inventual/report/stockreport/stockreport.component';
import { PaymentreportComponent } from './inventual/report/paymentreport/paymentreport.component';
import { SalereportComponent } from './inventual/report/salereport/salereport.component';
import { PurchasereportComponent } from './inventual/report/purchasereport/purchasereport.component';
import { ExpensereportComponent } from './inventual/report/expensereport/expensereport.component';
import { DiscountreportComponent } from './inventual/report/discountreport/discountreport.component';
import { TaxreportComponent } from './inventual/report/taxreport/taxreport.component';
import { SupplierreportComponent } from './inventual/report/supplierreport/supplierreport.component';
import { ShippingchargereportComponent } from './inventual/report/shippingchargereport/shippingchargereport.component';
import { RolepermissionComponent } from './inventual/settings/rolepermission/rolepermission.component';
import { PurchaselistinvoiveComponent } from './inventual/trading/invoice/purchaselistinvoive/purchaselistinvoive.component';
import { ExpenseinvoiceComponent } from './inventual/trading/invoice/expenseinvoice/expenseinvoice.component';
import { ExpenselistinvoiceComponent } from './inventual/trading/invoice/expenselistinvoice/expenselistinvoice.component';
import { LoginComponent } from './inventual/common/login/login.component';
import { RegisterComponent } from './inventual/common/register/register.component';
import { ForgotpasswordComponent } from './inventual/common/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './inventual/common/profile/profile.component';
import { MessageinboxComponent } from './inventual/common/messageinbox/messageinbox.component';
import { NewmessageComponent } from './inventual/common/newmessage/newmessage.component';
import { AddtransferComponent } from './inventual/transfer/addtransfer/addtransfer.component';
import { TransferlistComponent } from './inventual/transfer/transferlist/transferlist.component';
import { UserreportComponent } from './inventual/report/userreport/userreport.component';
import { CustomerreportComponent } from './inventual/report/customerreport/customerreport.component';
import { WarehousereportComponent } from './inventual/report/warehousereport/warehousereport.component';
import { ElementsComponent } from './inventual/elements/elements.component';
import { NotFoundComponent } from './inventual/not-found/not-found.component';
import { AuthGuard } from './features/auth/guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import("./features/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'authors/customers',
    canActivate: [AuthGuard],
    loadChildren: () => import("./features/customer/customer.module").then(m => m.CustomerModule)
  },
  {
    path: 'productions',
    canActivate: [AuthGuard],
    loadChildren: () => import("./features/production/production.module").then(m => m.ProductionModule)
  },
  {
    path: 'stocks',
    canActivate: [AuthGuard],
    loadChildren: () => import("./features/stock/stock.module").then(m => m.StockModule)
  },
  {
    path: 'nutritions',
    // canActivate: [AuthGuard],
    loadChildren: () => import("./features/nutrition/nutrition.module").then(m => m.NutritionModule)
  },
  {
    path: 'deces',
    // canActivate: [AuthGuard],
    loadChildren: () => import("./features/deces/deces.module").then(m => m.DecesModule)
  },
  {
    path: 'authors/suppliers',
    canActivate: [AuthGuard],
    loadChildren: () => import("./features/supplier/supplier.module").then(m => m.SupplierModule)
  },
  {
    path: 'trading',
    canActivate: [AuthGuard],
    loadChildren: () => import("./features/trading/trading.module").then(m => m.TradingModule)
  },
  {
    path: 'expenses',
    // canActivate: [AuthGuard],
    loadChildren: () => import("./features/expense/expense.module").then(m => m.ExpenseModule)
  },
  {
    path: 'products',
    // canActivate: [AuthGuard],
    loadChildren: () => import("./features/product/product.module").then(m => m.ProductModule)
  },
  {
    path: 'calibrages',
    // canActivate: [AuthGuard],
    loadChildren: () => import("./features/calibrage/calibrage.module").then(m => m.CalibrageModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import("./features/user/user.module").then(m => m.UserModule)
  },
  {
    path: 'roles',
    loadChildren: () => import("./features/role/role.module").then(m => m.RoleModule)
  },
  
  


  {
    path: 'trading/sales/possale',
    component: PossaleComponent
  },
  {
    path: 'trading/sales/newsale',
    component: NewsaleComponent
  },
  {
    path: 'trading/sales/managesale',
    component: ManagesaleComponent
  },
  {
    path: 'orderdiscount',
    component: OrderdiscountComponent
  },
  {
    path: 'trading/sales/salereturns',
    component: SalereturnsComponent
  },
  {
    path: 'trading/purchase/addpurchase',
    component: AddpurchaseComponent
  },
  {
    path: 'trading/purchase/managepurchase',
    component: ManagepurchaseComponent
  },
  {
    path: 'trading/purchase/purchasereturns',
    component: PurchasereturnsComponent
  },
  {
    path: 'trading/invoice/saleinvoice',
    component: SaleinvoiceComponent
  },
  {
    path: 'trading/invoice/expenseinvoice',
    component: ExpenseinvoiceComponent
  },
  {
    path: 'trading/invoice/salesinvoice',
    component: SalesinvoiceComponent
  },
  {
    path: 'trading/invoice/expenselistinvoice',
    component: ExpenselistinvoiceComponent
  },
  {
    path: 'trading/invoice/purchaselistinvoice',
    component: PurchaseinvoiceComponent
  },
  {
    path: 'trading/invoice/purchaseinvoice',
    component: PurchaselistinvoiveComponent
  },
 {
    path: 'people/addsupplier',
    component: AddsuplierComponent
  },
  {
    path: 'people/addcustomer',
    component: AddcustomerComponent
  },
  {
    path: 'people/addbiller',
    component: AddbillerComponent
  },
  {
    path: 'people/supplierlist',
    component: SupplierlistComponent
  },
  {
    path: 'people/customerlist',
    component: CustomerlistComponent
  },
  {
    path: 'people/billerlist',
    component: BillerlistComponent
  },
  {
    path: 'expesne/addexpense',
    component: AddexpenseComponent
  },
  {
    path: 'expesne/createpayment',
    component: CreatepaymentComponent
  },
  {
    path: 'expesne/expensecategory',
    component: CategoryComponent
  },
  {
    path: 'expesne/expenselist',
    component: ExpenselistComponent
  },
  {
    path: 'client/adduser',
    component: AdduserComponent
  },
  {
    path: 'client/createrole',
    component: CreateroleComponent
  },
  {
    path: 'client/userlist',
    component: UserlistComponent
  },
  {
    path: 'warehouselist',
    component: WarehouselistComponent
  },
  {
    path: 'report/productreport',
    component: ProductreportComponent
  },
  {
    path: 'report/stockreport',
    component: StockreportComponent
  },
  {
    path: 'report/paymentreport',
    component: PaymentreportComponent
  },
  {
    path: 'report/salereport',
    component: SalereportComponent
  },
  {
    path: 'report/purchasereport',
    component: PurchasereportComponent
  },
  {
    path: 'report/expensereport',
    component: ExpensereportComponent
  },
  {
    path: 'report/discountreport',
    component: DiscountreportComponent
  },
  {
    path: 'report/taxreport',
    component: TaxreportComponent
  },
  {
    path: 'report/userreport',
    component: UserreportComponent
  },
  {
    path: 'report/customerreport',
    component: CustomerreportComponent
  },
  {
    path: 'report/warehousereport',
    component: WarehousereportComponent
  },
  {
    path: 'report/supplierreport',
    component: SupplierreportComponent
  },
  {
    path: 'report/shippingchargereport',
    component: ShippingchargereportComponent
  },
  {
    path: 'rolepermission',
    component: RolepermissionComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'message',
    component: MessageinboxComponent
  },
  {
    path: 'newmessage',
    component: NewmessageComponent
  },
  {
    path: 'transfer/addtransfer',
    component: AddtransferComponent
  },
  {
    path: 'transfer/transferlist',
    component: TransferlistComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  },

  { path: '**', component: NotFoundComponent },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
