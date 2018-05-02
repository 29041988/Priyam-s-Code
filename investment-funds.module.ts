import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SnicommonModule} from './../snicommon/snicommon.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { FundAccordionComponent } from './fund-accordion/fund-accordion.component';
import { NolifestagingComponent } from './no-life-staging/no-life-staging.component';
import { LifestagingComponent } from './life-staging/life-staging.component';
import { FundAllocationComponent } from './fund-allocation/fund-allocation.component';
import {routes} from './router';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    SnicommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [FundAccordionComponent, NolifestagingComponent, LifestagingComponent, FundAllocationComponent],
  exports: [FundAccordionComponent, FundAllocationComponent]
})
export class InvestmentfundsModule { }
