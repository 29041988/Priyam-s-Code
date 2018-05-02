import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemunerationSavingsComponent } from './remuneration-savings.component';
import  {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemunerationSavingsService } from './remuneration-savings.service';
import {routes} from './router';
import { RouterModule } from '@angular/router';
import {SnicommonModule} from '../snicommon/snicommon.module';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
    SnicommonModule,
  ],
  exports:[
    RemunerationSavingsComponent
  ],
  declarations: [RemunerationSavingsComponent],
  providers: [RemunerationSavingsService]
})
export class RemunerationSavingsModule { }
