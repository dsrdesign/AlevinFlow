import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EclosionRoutingModule } from './eclosion-routing.module';
import { ListEclosionComponent } from './pages/list-eclosion/list-eclosion.component';
import { AddEclosionComponent } from './pages/add-eclosion/add-eclosion.component';
import { DetailEclosionComponent } from './pages/detail-eclosion/detail-eclosion.component';
import { UpdateEclosionComponent } from './pages/update-eclosion/update-eclosion.component';
import { SharedModule } from "../../../../shared/shared.module";
import { EclosionService } from './services/eclosion.service';
import { CycleService } from '../cycle/services/cycle.service';
import { CalibreService } from 'src/app/features/product/modules/calibre/service/calibre.service';


@NgModule({
  declarations: [
    ListEclosionComponent,
    AddEclosionComponent,
    DetailEclosionComponent,
    UpdateEclosionComponent
  ],
  imports: [
    CommonModule,
    EclosionRoutingModule,
    SharedModule
],
providers : [EclosionService, CycleService, CalibreService]
})
export class EclosionModule { }
