import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockService } from './services/stock.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StockRoutingModule,
  ],
  providers: [StockService]
})
export class StockModule { }
