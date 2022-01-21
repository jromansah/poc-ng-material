import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { CockpitRoutingModule } from './cockpit-routing.module';
import { CockpitComponent } from './cockpit.component';



@NgModule({
  declarations: [
    CockpitComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CockpitRoutingModule
  ]
})
export class CockpitModule { }
