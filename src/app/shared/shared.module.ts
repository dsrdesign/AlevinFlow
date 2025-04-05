import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
// import { HeaderComponent } from './components/header/header.component';
// import { CopyrightComponent } from './components/copyright/copyright.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { InventualModule } from '../inventual/inventual.module';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from '../inventual/dashboard/header/header.component';
import { CopyrightComponent } from '../inventual/dashboard/copyright/copyright.component';


@NgModule({
  declarations: [
    // HeaderComponent,
    // CopyrightComponent,
    ContentLayoutComponent,
    // MenuComponent,
    // SublevelMenuComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    InventualModule,
  ],
  exports: [
    MatIconModule,
    ReactiveFormsModule,
    InventualModule,
    // HeaderComponent,
    // CopyrightComponent,
    ContentLayoutComponent
  ]
})
export class SharedModule { }
