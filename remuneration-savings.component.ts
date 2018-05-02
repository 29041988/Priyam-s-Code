import { Component, OnInit, ViewChild,QueryList, ViewChildren } from '@angular/core';
import { Validators, NgForm, NgModel } from '@angular/forms';
import { RemuData } from './remu';


@Component({
  selector: 'app-remuneration-savings',
  templateUrl: './remuneration-savings.component.html',
  styleUrls: ['./remuneration-savings.component.less']
})
export class RemunerationSavingsComponent implements OnInit {
  //@ViewChild('remunerationForm') form;
  constructor() { }
  remu1= new RemuData();
  //public amount: number;
  commisionUnit:any = 'percentage';
  
  retannData = [
    {
      accordion: "RETIREMENT ANNUITY",
      key: "1st",
    
  feedata : {
    //label: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  commissiondata : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission",
    errorMesage: {
      'required': 'Amount is required',
    }
  }
},
  ];
  regcontData = [
  {

  accordion: "REGULAR CONTRIBUTION",
  key: "2nd", 
  
  feedata : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission",
    errorMesage: {
      'required': 'Amount is required',
    }
  },


  feedata1 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount2",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata1 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission2",
    errorMesage: {
      'required': 'Amount is required',
    }
  },

  feedata2: {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount3",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata2 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission3",
    errorMesage: {
      'required': 'Amount is required',
    }
  },
  feedata3 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount4",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata3 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission4",
    errorMesage: {
      'required': 'Amount is required',
    }
  }
},];
lumpcontData = [
{
  accordion: "LUMPSUM CONTRIBUTION",
  key: "3rd", 

  feedata : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission",
    errorMesage: {
      'required': 'Amount is required',
    }
  },
  feedata1 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount1",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata1 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission1",
    errorMesage: {
      'required': 'Amount is required',
    }
  }
},];




transferData = [
  {
    accordion: "TRANSFER",
    key: "4th", 
  
    feedata : {
      //labeltext: "Ongoing Advice Fee",
      modelval: this.remu1.amount,
      inputtype: "text",
      validations: [Validators.required],
      placeholder: "%",
      inputid: "amount",
      errorMesage: {
        'required': 'Amount is required',
      }
      
    },
    
    commissiondata : {
      //labeltext: "Ongoing Advice Fee",
      modelval: this.remu1.amount,
      inputtype: "text",
      validations: [Validators.required],
      placeholder: "R",
      inputid: "commission",
      errorMesage: {
        'required': 'Amount is required',
      }
    },
    feedata1 : {
      //labeltext: "Ongoing Advice Fee",
      modelval: this.remu1.amount,
      inputtype: "text",
      validations: [Validators.required],
      placeholder: "%",
      inputid: "amount1",
      errorMesage: {
        'required': 'Amount is required',
      }
      
    },
    
    commissiondata1 : {
      //labeltext: "Ongoing Advice Fee",
      modelval: this.remu1.amount,
      inputtype: "text",
      validations: [Validators.required],
      placeholder: "R",
      inputid: "commission1",
      errorMesage: {
        'required': 'Amount is required',
      }
    }
  },];



  contprotecData = [

{
  accordion: "CONTRIBUTION PROTECTION",
  key: "5th", 
  feedata : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission",
    errorMesage: {
      'required': 'Amount is required',
    }
  },
  feedata1: {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount1",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  
  commissiondata1 : {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "R",
    inputid: "commission1",
    errorMesage: {
      'required': 'Amount is required',
    }
  },
  accordion1: "+ View Breakdown",

  feedatasub: {
    //labeltext: "Ongoing Advice Fee",
    modelval: this.remu1.amount,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "%",
    inputid: "amount1",
    errorMesage: {
      'required': 'Amount is required',
    }
    
  },
  selecttermdata: {
    labeltext: "Select term",
    modelval: this.remu1.term,
    inputid: "selectterm",
    options:[{value:'one',text:'1 year'},{value:'two',text:'2 years'},{value:'three',text:'3 years'},
    {value:'four',text:'4 years'},{value:'five',text:'5 years'}]

  } 
  

},
  ];  
  
  
  
  currencyToggle(){
    // this.randCurrency = !this.randCurrency;
    // console.log('randCurrency = '+this.randCurrency)
  }

  ngOnInit() {
  }

}
