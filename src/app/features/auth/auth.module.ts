import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InventualModule } from 'src/app/inventual/inventual.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
