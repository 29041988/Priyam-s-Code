import { Component, OnInit, QueryList } from '@angular/core';
import { Validators, NgForm, NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-regular-contribution',
  templateUrl: './regular-contribution.component.html',
  styleUrls: ['./regular-contribution.component.less']
})
export class RegularContributionComponent implements OnInit {

  constructor() { }
  public regamount:number;
  public regyear:number;
  public regfreq:string;
  public methodpay:string;
  public deddate:string;
  public strtmonth:string;
  public inflation:number;
  public fixincrease:number;
  public eduinflation:number;
  public salinflation:number;


  retannData= [
    {
      accordion1: "Retirement Annuity Savings Plan",
      accordion2: "Retirement Annuity Investment Plan",
      key: "1st",
     
      regcontdata : {

     
          subaccordion1: "Regular Contribution",

          regamountdata : {
            label: "Amount",
            modelval: this.regamount,
            currency : "R",
            inputtype: "number",
            validations: [Validators.required, Validators.min(1000), Validators.max(10000)],
            inputid: "regamount",
            errorMesage: {
              'required': 'Amount is required',
              'min' : 'Minimum Amount must be 1000',
              'max' : 'Maximum Amount must be within 10000'
            }
          },
          regfreqdata:{
            label: "Frequency",
            modelval: this.regfreq,
            inputid: "regfreq",
            options:[{value:'mon',text:'Monthly'},{value:'quat',text:'Quaterly'},{value:'halfyr',text:'Half-Yearly'},{value:'yr',text:'Yearly'}]
        
          },
          regyrdata : {
            label: "Commitment Term (Years)",
            modelval: this.regyear,
            inputtype: "number",
            validations: [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern("^(0|[1-9][0-9]*)$")],
            inputid: "regyear",
            errorMesage: {
              'required': 'Commitment Term is required',
              'min' : 'Minimum Commitment Term must be 1',
              'max' : 'Maximum Commitment must be within 100',
              'pattern' : 'Commitment Term should be number only'
            }
          },
          methodpaydata:{
            label: "Method of Payment",
            modelval: this.methodpay,
            inputid: "methodpay",
            options:[{value:'debit',text:'Debit Order'},{value:'stop',text:'Stop Order'}]
        
          },
          datedata:{
            label: "Deduction Date",
            modelval: this.deddate,
            inputid: "deddate",
            options:[{value:'one',text:'1-10'},{value:'ten',text:'11-20'},{value:'twenty',text:'21-30'}]
        
          },
          strtmonthdata:{
            label: "Start Month",
            modelval: this.strtmonth,
            inputid: "strtmonth",
            options:[{value:'jan',text:'January'},{value:'feb',text:'February'},{value:'mar',text:'March'},{value:'apr',text:'April'},{value:'may',text:'May'},{value:'jun',text:'June'},{value:'jul',text:'July'},{value:'aug',text:'August'},{value:'sep',text:'September'},{value:'oct',text:'October'},{value:'nov',text:'November'},{value:'dec',text:'December'}]
        
          },
          inflationdata : {
            modelval: this.inflation,
            inputtype: "number",
            validations: [Validators.min(1), Validators.max(100)],
            placeholder: "6%",
            inputid: "inflation",
            errorMesage: {
              'min' : 'Minimum inflation must be 1',
              'max' : 'Maximum inflation must be within 100'
            }
          },
          fixincreasedata : {
            modelval: this.inflation,
            inputtype: "number",
            validations: [Validators.min(1), Validators.max(100)],
            placeholder: "6%",
            inputid: "inflation",
            errorMesage: {
              'min' : 'Minimum fixed increase must be 1',
              'max' : 'Maximum fixed increase must be within 100'
            }
          },
          eduinflationdata : {
            modelval: this.inflation,
            inputtype: "number",
            validations: [Validators.min(1), Validators.max(100)],
            placeholder: "6%",
            inputid: "inflation",
            errorMesage: {
              'min' : 'Minimum education inflation must be 1',
              'max' : 'Maximum education inflation must be within 100'
            }
          },
          salinflationdata : {
            modelval: this.inflation,
            inputtype: "number",
            validations: [Validators.min(1), Validators.max(100)],
            placeholder: "6%",
            inputid: "inflation",
            errorMesage: {
              'min' : 'Minimum salary inflation must be 1',
              'max' : 'Maximum salary inflation must be within 100'
            }
        }
    
    }
     
    }  
  
  ];
  
  
 
  ngOnInit() {
  }

}
