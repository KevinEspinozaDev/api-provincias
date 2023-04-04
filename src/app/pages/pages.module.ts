import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from 'src/shared/material/material.module';
import { PagesComponent } from './pages.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';


@NgModule({
  declarations: [
    PagesComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
