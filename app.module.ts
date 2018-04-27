import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {SppagesModule} from './sppages/sppages.module'
import {routing} from './app.routes';
import { RouterModule, Router} from '@angular/router';
import { InvserveService } from './invserve.service';



import { AppComponent } from './app.component';
//import { SetgoalComponent } from './sppages/setgoal/setgoal.component';
//import { YourplanComponent } from './sppages/yourplan/yourplan.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SppagesModule,
    routing,
    RouterModule,  
  ],
  exports: [
       

  ],
  providers: [InvserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
