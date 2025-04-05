import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { AddnutritionComponent } from './page/addnutrition/addnutrition.component';
import { ListnutritionComponent } from './page/listnutrition/listnutrition.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NutritionService } from './service/nutrition.service';
import { CycleService } from '../production/modules/cycle/services/cycle.service';
import { GeniteurService } from '../product/modules/geniteur/services/geniteur.service';


@NgModule({
  declarations: [
    AddnutritionComponent,
    ListnutritionComponent,
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule, 
    SharedModule
  ],
  providers: [NutritionService, CycleService, GeniteurService]
})
export class NutritionModule { }
