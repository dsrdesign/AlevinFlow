import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CycleRoutingModule } from './cycle-routing.module';
import { CycleService } from './services/cycle.service';
import { CycleResolver } from './resolvers/Cycle.resolver';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCycleComponent } from './pages/add-cycle/add-cycle.component';
import { ListCycleComponent } from './pages/list-cycle/list-cycle.component';
import { UpdateCycleComponent } from './pages/update-cycle/update-cycle.component';
import { DetailCycleComponent } from './pages/detail-cycle/detail-cycle.component';


@NgModule({
  declarations: [
    AddCycleComponent,
    ListCycleComponent,
    UpdateCycleComponent,
    DetailCycleComponent
  ],
  imports: [
    CommonModule,
    CycleRoutingModule,
    SharedModule
  ],
  providers: [CycleService, CycleResolver]
})
export class CycleModule { }
