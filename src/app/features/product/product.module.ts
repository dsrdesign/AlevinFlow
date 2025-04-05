import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListproductComponent } from './pages/listproduct/listproduct.component';
import { NutritionService } from '../nutrition/service/nutrition.service';


@NgModule({
  declarations: [ 
    AddproductComponent, 
    ListproductComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule, 
    SharedModule
  ],
  providers: [NutritionService]
})
export class ProductModule { }
