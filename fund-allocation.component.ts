import { Component, OnInit, ViewChild} from '@angular/core';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-fund-allocation',
  templateUrl: './fund-allocation.component.html',
  styleUrls: ['./fund-allocation.component.less']
})
export class FundAllocationComponent implements OnInit {
  lumpsum4r: any;
  lumpsum3r: any;
  lumpsum2r: any;
  lumpsum1r: any;
  regular4r: any;
  regular3r: any;
  regular2r: any;
  regular1r: any;
  date: any;

  trans1: any;
  regular1: any;
  lumpsum1: any;
  
  trans2: any;
  regular2: any;
  lumpsum2: any;

  trans3: any;
  regular3: any;
  lumpsum3: any;

  trans4: any;
  regular4: any;
  lumpsum4: any;


  constructor() { }
  @ViewChild('investForm') form;
   
  
  transdata1 =   {
    labeltext: "Trans1",
    modelval: this.trans1,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box1",
    errorMesage: {
      'required': 'Data is required',
    }
  };

  regulardata1 = {
    labeltext: "Regular1",
    modelval: this.regular1,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box2",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  regulardata1r = {
    labeltext: "Regular1r",
    modelval: this.regular1r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box2r",
    errorMesage: {
      'required': 'Data is required'
    }
  };


  lumpsumdata1 = {
    labeltext: "Lumpsum1",
    modelval: this.lumpsum1,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box3",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  lumpsumdata1r = {
    labeltext: "Lumpsum1r",
    modelval: this.lumpsum1r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box3r",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  transdata2 =   {
    labeltext: "Trans2",
    modelval: this.trans2,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box4",
    errorMesage: {
      'required': 'Data is required',
    }
  };

  regulardata2 = {
    labeltext: "Regular2",
    modelval: this.regular2,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box5",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  regulardata2r = {
    labeltext: "Regular2r",
    modelval: this.regular2r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box5r",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  lumpsumdata2 = {
    labeltext: "Lumpsum2",
    modelval: this.lumpsum2,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box6",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  lumpsumdata2r = {
    labeltext: "Lumpsum2r",
    modelval: this.lumpsum2r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box6r",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  transdata3 =   {
    labeltext: "Trans3",
    modelval: this.trans3,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box7",
    errorMesage: {
      'required': 'Data is required',
    }
  };

  regulardata3 = {
    labeltext: "Regular3",
    modelval: this.regular3,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box8",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  regulardata3r = {
    labeltext: "Regular3r",
    modelval: this.regular3r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box8r",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  lumpsumdata3 = {
    labeltext: "Lumpsum3",
    modelval: this.lumpsum3,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box9",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  lumpsumdata3r = {
    labeltext: "Lumpsum3r",
    modelval: this.lumpsum3r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box6r",
    errorMesage: {
      'required': 'Data is required'
    }
  };


  transdata4 =   {
    labeltext: "Trans4",
    modelval: this.trans4,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box10",
    errorMesage: {
      'required': 'Data is required',
    }
  };

  regulardata4 = {
    labeltext: "Regular4",
    modelval: this.regular4,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box11",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  regulardata4r = {
    labeltext: "Regular4r",
    modelval: this.regular4r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box11r",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  lumpsumdata4 = {
    labeltext: "Lumpsum4",
    modelval: this.lumpsum4,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "6.00%",
    inputid: "box12",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  lumpsumdata4r = {
    labeltext: "Lumpsum4r",
    modelval: this.lumpsum4r,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: " 1200.00",
    inputid: "box6r",
    errorMesage: {
      'required': 'Data is required'
    }
  };

  datedata = {
    labeltext: "Date",
    modelval: this.date,
    inputtype: "text",
    inputid: "gdate",
    
  };

  dob = {
    labeltext: "Guarantee Start Date",
    placeholder: "DD/MM/YYYY",
    validations: [Validators.required],
    inputname: "dob",
    inputid: "dob",
    errorMesage: {
      'required': 'DOB is required',
    }
  };

  
  ngOnInit() {
  }

}
