import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelectionSavingsComponent } from './product-selection-savings.component';
import {SnicommonModule} from '../snicommon/snicommon.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {routes} from './router'
import { RouterModule } from '@angular/router';
import { AnonFormComponent } from './anon-form/anon-form.component';
@NgModule({
  imports: [
    NgbModule,CommonModule,SnicommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ProductSelectionSavingsComponent],
  declarations: [ProductSelectionSavingsComponent, AnonFormComponent]
})
export class ProductSelectionSavingsModule { }
