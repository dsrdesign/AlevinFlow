import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalibrageRoutingModule } from './calibrage-routing.module';
import { AddcalibrageComponent } from './page/addcalibrage/addcalibrage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListcalibrageComponent } from './page/listcalibrage/listcalibrage.component';
import { CustomerService } from '../customer/services/customer.service';
import { CalibrageService } from './service/calibrage.service';
import { EclosionService } from '../production/modules/eclosion/services/eclosion.service';
import { CycleService } from '../production/modules/cycle/services/cycle.service';


@NgModule({
  declarations: [
    AddcalibrageComponent,
    ListcalibrageComponent
  ],
  imports: [
    CommonModule,
    CalibrageRoutingModule, 
    SharedModule
  ],
   providers: [CalibrageService, EclosionService, CycleService]
})
export class CalibrageModule { }
