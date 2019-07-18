import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommonMaterialModule
    ],
    exports:[HeaderComponent]
})
export class HomeModule { }
