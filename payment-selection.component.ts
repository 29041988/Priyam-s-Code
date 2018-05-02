import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentSelectionComponent implements OnInit {
  // public goaltype:string;
  // ctypedata={
   
  //   modelval: this.goaltype,
  //   inputid: "ctype",
  //   options:[{value:'regular',text:'Regular Contribution'},{value:'lumpsum',text:'Lump Sum Contribution'},{value:'transferprovider',text:'Transfer from another provider'}]

  // };

  model:any;
  
  constructor() {
    this.model= [{"name":"Retirement Annuity Savings Plan",
                  "section":[{"head":"Choose your payment type",
                  "body":[{"text":"Regular Contribution"},{"text":"Lump Sum Contribution"},{"text":"Transfer from another provider"}]}]},{"name":"Retirement Annuity Investement Plan","section":[{"head":"Choose your payment type","body":[{"text":"Regular Contribution"},{"text":"Lump Sum Contribution"},{"text":"Transfer from another provider"}]}]}];
   }
  //**** uncomment to use common component
   checkboxes = [{label:"",
   values:[
       {value: true, id: 'checkbox1',title:'Regular Contribution'},
       {value: false, id: 'checkbox2',title:'Lump Sum Contribution'},
       {value: false, id: 'checkbox3',title:'Transfer from another provider'}
     ]},{label:"",
     values:[
         {value: true, id: 'checkboxA',title:'Regular Contribution'},
         {value: false, id: 'checkboxB',title:'Lump Sum Contribution'},
         {value: false, id: 'checkboxC',title:'Transfer from another provider'}
       ]}];
  
   //end ***** 
   
 

  ngOnInit() {
   console.log(this.model);
  }
  


}
