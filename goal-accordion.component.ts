import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Validators, NgForm, NgModel } from '@angular/forms';
import { ProductSelectionSavingsService } from '../../product-selection-savings/product-selection-savings.service';

@Component({
  selector: 'app-goal-accordion',
  templateUrl: './goal-accordion.component.html',
  styleUrls: ['./goal-accordion.component.less'],
  providers: [ProductSelectionSavingsService]
})
export class GoalAccordionComponent implements OnInit {
  products: any;
  selectedPlans: any;
  selectedProducts: any = [];
  @ViewChild('goalForm') form;
  constructor(private goalService: ProductSelectionSavingsService) {
    this.goalService.getData().subscribe(data => {
      this.products = data;
      /*for (let product of this.products) {
        for (let plan of product.section) {
          if (this.selectedPlans.indexOf(plan.id) > -1) {
            this.selectedProducts.push(plan);
          }
        }
      }*/
      console.log(this.selectedProducts);
    });
  }

  formData = [
    {
      accordian: "Retirement Annuity Savings Plan",
      key: "1st",
      goaldata: {
        label: "Personalized Goal Name",
        type: "text",
        id: "gname",
        placeholder: "Enter goal name",
        validations: [Validators.required],
        errorMesage: {
          'required': 'Goal Name is required',
        }
      },
      gtypedata: {
        label: "Goal Type",
        id: "gtype",
        options: [{ value: 'ret', text: 'Retirement' }, { value: 'edu', text: 'Education' }, { value: 'gen', text: 'General' }]

      },
       gamountdata: {
         label: "Goal Amount",
        currency: "R",
        type: "number",
        id: "goalamount1",
        placeholder: "R",
        validations: [Validators.required, Validators.min(1000), Validators.max(10000)
        ],
        errorMesage: {
         'required': 'Goal Amount is required',
         'min': 'Minumum Goal Amount must be 1000',
          'max': 'Maximum Goal Amount must be within 10000',
       }
       },

      

      retagedata: {
        label: "Expected Retirement Age (Yrs.)",
        type: "number",
        inputid: "retage",
        placeholder: "Enter retirement age",
        validations: [Validators.required],
        errorMesage: {
          'required': 'Retirement age is required',
        }
      },

      termtypedata: {
        label: "Goal Term",
        type: "radio",
        id: "Goal Term",
        options: [{ name: 'termtype', id: 'years', value: 'years', text: 'Year(s)' }, { name: 'termtype', id: 'months', value: 'months', text: 'Months' }]
      },

      termdata: {
        type: "number",
        id: "goalterm"
      }
    },
    {
      accordian: "Retirement Annuity Investment Plan",
      key: "2nd",
      goaldata: {
        label: "Personalized Goal Name for 2nd",

        type: "text",
        placeholder: "Enter goal name",
        validations: [Validators.required],
        errorMesage: {
          'required': 'Goal Name is required',
        }
      },
      gtypedata: {
        label: "Goal Type",
        id: "gtype",
        options: [{ value: 'ret', text: 'Retirement' }, { value: 'edu', text: 'Education' }, { value: 'gen', text: 'General' }]

      },
      gamountdata: {
        label: "Goal Amount",
        currency: "R",
        type: "number",
        id: "goalamount",
        placeholder: "Enter goal amount",
        validations: [Validators.required, Validators.min(1000), Validators.max(10000)],
        errorMesage: {
          'required': 'Goal Amount is required',
          'min': 'Minumum Goal Amount must be 1000',
          'max': 'Maximum Goal Amount must be within 10000'
        }
      },

      retagedata: {
        label: "Expected Retirement Age (Yrs.)",
        type: "number",
        inputid: "retage",
        placeholder: "Enter retirement age",
        validations: [Validators.required],
        errorMesage: {
          'required': 'Retirement age is required',
        }
      },

      termtypedata: {
        label: "Goal Term",
        type: "radio",
        options: [{ name: 'termtype', id: 'years1', value: 'years', text: 'Year(s)' }, { name: 'termtype', id: 'months1', value: 'months', text: 'Months' }]
      },

      termdata: {
        type: "number",
        id: "goalterm"
      }
    }
  ];

  ngOnInit() {
    this.selectedPlans = JSON.parse(localStorage.getItem("plans"));
    //console.log(this.selectedPlans);
    // console.log(this.goal);
  }
}
