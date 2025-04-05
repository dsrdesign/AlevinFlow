import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductionService } from './services/production.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    SharedModule
  ],
  providers: [ProductionService]
})
export class ProductionModule { }
