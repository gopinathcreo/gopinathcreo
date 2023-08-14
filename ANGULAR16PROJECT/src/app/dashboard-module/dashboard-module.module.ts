import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-component/login-component.component';
import { DashboardParent } from './dashboard.parent';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { LibraryModule } from '../library/library.module';
// import { SharedModule } from '../shared/shared.module';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LoginComponent,DashboardParent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    // LibraryModule
    // SharedModule
  ]
})
export class DashboardModule { }
