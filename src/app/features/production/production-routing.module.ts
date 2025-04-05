import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cycles', pathMatch: 'full' },
  {
    path: 'cycles',
    loadChildren: () => import("./modules/cycle/cycle.module").then(m => m.CycleModule)
  },
  {
    path: 'eclosions',
    loadChildren: () => import("./modules/eclosion/eclosion.module").then(m => m.EclosionModule)
  },
  {
    path: 'fecondations',
    loadChildren: () => import("./modules/fecondation/fecondation.module").then(m => m.FecondationModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
