import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routes} from './router';
import { LobPageComponent } from './lob-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LobPageComponent],
  exports: [LobPageComponent]
})
export class LobPageModule { }
