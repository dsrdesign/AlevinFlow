import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentRoutingModule } from './aliment-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddalimentComponent } from './pages/addaliment/addaliment.component';
import { ListAlimentComponent } from './pages/list-aliment/list-aliment.component';


@NgModule({
  declarations: [
    AddalimentComponent,
    ListAlimentComponent
  ],
  imports: [
    CommonModule,
    AlimentRoutingModule,
    SharedModule
  ]
})
export class AlimentModule { }
