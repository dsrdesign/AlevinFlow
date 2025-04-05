import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductComponent } from './pages/listproduct/listproduct.component';

const routes: Routes = [
  { path: '', redirectTo: 'aliments', pathMatch: 'full' },
  {
    path: 'aliments',
    loadChildren: () => import("./modules/aliment/aliment.module").then(m => m.AlimentModule)
  },
  {
    path: 'geniteurs',
    loadChildren: () => import("./modules/geniteur/geniteur.module").then(m => m.GeniteurModule)
  },
  {
    path: 'calibres',
    loadChildren: () => import("./modules/calibre/calibre.module").then(m => m.CalibreModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
