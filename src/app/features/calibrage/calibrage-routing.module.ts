import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcalibrageComponent } from './page/addcalibrage/addcalibrage.component';
import { ListcalibrageComponent } from './page/listcalibrage/listcalibrage.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddcalibrageComponent },
  { path: 'list', component: ListcalibrageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibrageRoutingModule { }
