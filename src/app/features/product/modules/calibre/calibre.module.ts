import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalibreRoutingModule } from './calibre-routing.module';
import { ListCalibreComponent } from './pages/list-calibre/list-calibre.component';
import { AddCalibreComponent } from './pages/add-calibre/add-calibre.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalibreService } from './service/calibre.service';


@NgModule({
  declarations: [
    ListCalibreComponent,
    AddCalibreComponent
  ],
  imports: [
    CommonModule,
    CalibreRoutingModule,
    SharedModule
  ],
  providers: [CalibreService]
})
export class CalibreModule { }
