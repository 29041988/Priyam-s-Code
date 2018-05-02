import { Component, OnInit } from '@angular/core';
import {ProductSelectionSavingsService} from '../../product-selection-savings/product-selection-savings.service';

@Component({
  selector: 'app-nolifestaging',
  templateUrl: './no-life-staging.component.html',
  styleUrls: ['./no-life-staging.component.less'],
  providers: [ProductSelectionSavingsService]
})
export class NolifestagingComponent implements OnInit {
    noLifeStagingData:any;
   
  constructor(private fundsService:ProductSelectionSavingsService) { 
    this.fundsService.getTableData().subscribe(data => {
      this.noLifeStagingData=data;
    });
  }
 

  ngOnInit() {
  //   function filterfunction() {
  //     document.getElementById("myDropdown").classList.toggle("show");
  // }
  }

  
        
        
        
        
        
}
