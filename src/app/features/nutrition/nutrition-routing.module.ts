import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnutritionComponent } from './page/addnutrition/addnutrition.component';
import { ListnutritionComponent } from './page/listnutrition/listnutrition.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddnutritionComponent },
  { path: 'list', component: ListnutritionComponent },

 
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }
