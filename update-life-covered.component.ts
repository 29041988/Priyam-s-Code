import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-update-life-covered',
  templateUrl: './update-life-covered.component.html',
  styleUrls: ['./update-life-covered.component.less']
})
export class UpdateLifeCoveredComponent implements OnInit {

  constructor() { }
 public fname:String;
 public sname:String;
 public id:number;
 public idtype:String;
 public country:String;
 public mstatus:String;
 public prioccu:String;
 public prioccuindus:String;
 public empstatus:String;
 public pgmcomission:number;
 public pgmsalary:number;
 public pno:number;
 public email:String;
 public pnotype:String;
 public countrycode:String;
 public edulevel:String;

  firstnamedata = {
    labeltext: "First Name",
    modelval: this.fname,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "John",
    inputid: "fname",
    errorMesage: {
      'required': 'First Name is required',
    }
  };

  surnamedata = {
    labeltext: "Surname",
    modelval: this.sname,
    inputtype: "text",
    validations: [Validators.required],
    placeholder: "Doe",
    inputid: "sname",
    errorMesage: {
      'required': 'Surname Name is required',
    }
  };

  idnumberdata = {
    labeltext: "ID Number",
    modelval: this.id,
    inputtype: "number",
    validations: [Validators.required],
    placeholder: "880109795080",
    inputid: "id",
    errorMesage: {
      'required': 'Id number is required',
    }
  };

  prioccudata = {
    labeltext: "Primary Occupation",
    modelval: this.prioccu,
    inputtype: "text",
    inputid: "prioccu"
    
  };

  pgmsalarydata = {
    labeltext: "Primary gross monthly income for salary earners (Pre-tax)",
    modelval: this.pgmsalary,
    inputtype: "number",
    placeholder: "R",
    inputid: "pgmsalary",
  };

  pgmcomissiondata = {
    labeltext: "Primary gross monthly income for commission earners (pre-tax)",
    modelval: this.pgmcomission,
    inputtype: "number",
    placeholder: "R",
    inputid: "pgmcomission",
    
  };

  phonenodata = {
    labeltext: "Phone Number",
    modelval: this.pno,
    inputtype: "number",
    placeholder: "66339234",
    inputid: "pno",
    
  };

  emaildata = {
    labeltext: "Email Address",
    modelval: this.email,
    inputtype: "text",
    inputid: "email",
    
  };


  idtypedata={
    labeltext: "ID Type",
    modelval: this.idtype,
    inputid: "idtype",
    options:[{value:'nat',text:'National Id'}]

  };

  countrydata={
    labeltext: "Country of Issue",
    modelval: this.country,
    inputid: "country",
    options:[{value:'sa',text:'South Africa'},{value:'nb',text:'Namibia'}]

  };

  maritalstatus={
    labeltext: "Marital Status",
    modelval: this.mstatus,
    inputid: "mstatus",
    options:[{value:'sin',text:'Single'},{value:'ch',text:'Co-habiting'},{value:'mar',text:'Married'},{value:'div',text:'Divorced'},{value:'wid',text:'Widowed'}]

  };

  prioccuindusdata={
    labeltext: "Primary Occupation Industry",
    modelval: this.prioccuindus,
    inputid: "prioccuindus",
    options:[{value:'one',text:'One'},{value:'two',text:'Two'},{value:'three',text:'Three'},{value:'four',text:'Four'}]

  };

  empstatdata={
    labeltext: "Employment Status",
    modelval: this.empstatus,
    inputid: "empstatus",
    options:[{value:'one',text:'One'},{value:'two',text:'Two'},{value:'three',text:'Three'},{value:'four',text:'Four'}]

  };

  phonetypedata={
    labeltext: "Phone Type",
    modelval: this.pnotype,
    inputid: "pnotype",
    options:[{value:'home',text:'Home'},{value:'office',text:'Office'},{value:'mobile',text:'Mobile'}]

  };

  countrycodedata={
    labeltext: "Country Code",
    modelval: this.countrycode,
    inputid: "countrycode",
    options:[{value:'val',text:'+27'}]

  };

  eduleveldata={
    labeltext: "Highest Education Level",
    modelval: this.edulevel,
    inputid: "edulevel",
    options:[{value:'lt4',text:'NQF <  4'},{value:'4',text:'NQF 4'},
            {value:'5',text:'NQF 5'},{value:'6',text:'NQF 6'},{value:'7',text:'NQF 7'},
            {value:'8',text:'NQF 8'},{value:'9',text:'NQF 9'},{value:'10',text:'NQF 10'},]

  };

  genderdata = {
    labeltext: "Gender",
    inputtype: "radio",
    options:[{name:'gender', id: 'male', value:'male',text:'Male'},{name:'gender', id: 'female', value:'female',text:'Female'}]
  };

  smokerstatus={
    labeltext: "Smoker Status",
    inputtype: "radio",
    options:[{name:'smoker', id: 'smoker', value:'smoker',text:'Smoker'},{name:'smoker', id: 'nonsmoker', value:'nonsmoker',text:'Non-Smoker'}]
  
  };

  ngOnInit() {
  }

}
