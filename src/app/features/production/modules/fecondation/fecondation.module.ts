import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FecondationRoutingModule } from './fecondation-routing.module';
import { ListFecondationComponent } from './pages/list-fecondation/list-fecondation.component';
import { AddFecondationComponent } from './pages/add-fecondation/add-fecondation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FecondationService } from './services/fecondation.service';
import { GeniteurService } from 'src/app/features/product/modules/geniteur/services/geniteur.service';
import { CycleService } from '../cycle/services/cycle.service';


@NgModule({
  declarations: [
    ListFecondationComponent,
    AddFecondationComponent
  ],
  imports: [
    CommonModule,
    FecondationRoutingModule,
    SharedModule
  ],
  providers: [FecondationService, GeniteurService, CycleService]
})
export class FecondationModule { }
