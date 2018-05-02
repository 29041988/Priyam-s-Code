import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-details',
  templateUrl: './transfer-details.component.html',
  styleUrls: ['./transfer-details.component.less']
})
export class TransferDetailsComponent implements OnInit {

  constructor() { }
  public name: String;
  public amount: String;
  public product : String;
  public transfer : String;

  providerdata = {
    labeltext: "Transferring Provider Name",
    modelval: this.name,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "Enter transferring provider name",
    inputid: "name",
    errorMesage: {
      'required': 'Transferring Provider Name is required',
    }
  };

  amountdata = {
    labeltext: "Transfer Amount",
    modelval: this.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "Enter transfer amount ",
    inputid: "amount",
    errorMesage: {
      'required': 'Transfer Amount is required',
    }
  };

  productdata = {
    labeltext: "Transferring/Source Product",
    modelval: this.product,
    inputid: "ptype",
    options:[{value:'taxfree',text:'Tax Free Plan'},{value:'retirement',text:'Retirement Annuity'},{value:'pension',text:'Pension Fund'},{value:'Preservation',text:'Preservation Fund'}]   
  };

  transferdata = {
    labeltext: "Transfer-In Type",
    modelval: this.transfer,
    inputid: "ttype",
    options:[{value:'sec',text:'Section 14'},{value:'tax',text:'Tax Free'},{value:'std',text:'Standard'}]   
  };
 
    ngOnInit() {
  }

}
