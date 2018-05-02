import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SnicommonModule} from './../snicommon/snicommon.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import {routes} from './router';
import { GoalAccordionComponent } from './goal-accordion/goal-accordion.component';
import { GoalSelectionComponent } from './goal-selections/goal-selection.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SnicommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GoalAccordionComponent, GoalSelectionComponent],
  exports : [GoalSelectionComponent]
})
export class GoalselectionModule { }
