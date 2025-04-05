import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeniteurRoutingModule } from './geniteur-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddgeniteurComponent } from './pages/addgeniteur/addgeniteur.component';
import { ListGeniteurComponent } from './pages/list-geniteur/list-geniteur.component';


@NgModule({
  declarations: [
    AddgeniteurComponent,
    ListGeniteurComponent
  ],
  imports: [
    CommonModule,
    GeniteurRoutingModule,
    SharedModule
  ]
})
export class GeniteurModule { }
