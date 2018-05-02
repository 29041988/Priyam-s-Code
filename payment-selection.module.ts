import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSelectionComponent } from './payment-selection-home/payment-selection.component';
import { UpdateLifeCoveredComponent } from './update-life-covered/update-life-covered.component';
import { TransferDetailsComponent } from './transfer-details/transfer-details.component';
import { TransferDetailsLispComponent } from './transfer-details-lisp/transfer-details-lisp.component';
import { PaymentSelectionOverviewComponent } from './payment-selection-overview/payment-selection-overview.component';
import { RegularContributionComponent } from './regular-contribution/regular-contribution.component';
import { SearchLifeCoveredComponent } from './search-life-covered/search-life-covered.component';
import { LumpSumContributionComponent } from './lump-sum-contribution/lump-sum-contribution.component';
import { ChangedLifeCoveredComponent } from './changed-life-covered/changed-life-covered.component';
import {SnicommonModule} from '../snicommon/snicommon.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {routes} from './router';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnicommonModule,
    NgbModule,
    RouterModule.forChild(routes),
   
  ],
  exports : [
    PaymentSelectionComponent,
    UpdateLifeCoveredComponent,
    TransferDetailsComponent,
    TransferDetailsLispComponent,
    PaymentSelectionOverviewComponent,
    RegularContributionComponent,
    SearchLifeCoveredComponent,
    LumpSumContributionComponent,
    ChangedLifeCoveredComponent
  ],
  declarations: [PaymentSelectionComponent, UpdateLifeCoveredComponent, TransferDetailsComponent, TransferDetailsLispComponent, PaymentSelectionOverviewComponent, RegularContributionComponent, SearchLifeCoveredComponent, LumpSumContributionComponent, ChangedLifeCoveredComponent ]
})
export class PaymentSelectionModule { }
