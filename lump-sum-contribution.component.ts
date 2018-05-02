import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-lump-sum-contribution',
  templateUrl: './lump-sum-contribution.component.html',
  styleUrls: ['./lump-sum-contribution.component.less']
})
export class LumpSumContributionComponent implements OnInit {

  constructor() { }
 public amount: number;
 public methodofpay:String;
  amountdata = {
    label: "Amount",
    modelval: this.amount,
    type: "number",
    validations: [Validators.required,Validators.min(2000), Validators.max(20000)],
    placeholder: "Enter amount",
    inputid: "goalname",
    errorMesage: {
      'required': 'Amount is required',
      'min': 'Minumum Goal Amount must be 2000',
      'max': 'Maximum Goal Amount must be within 20000'
    }
  };
  methodofpaymentdata={
    label: "Method of Payment",
    modelval: this.methodofpay,
    inputid: "mop",
    options:[{value:'oodo',text:'Once of Debit Order'},{value:'eft',text:'Direct Deposit/EFT'}]

  };

  ngOnInit() {
  }

}
