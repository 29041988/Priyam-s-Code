import { Component, OnInit } from '@angular/core';
import { ProductSelectionSavingsService } from './product-selection-savings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-selection-savings',
  templateUrl: './product-selection-savings.component.html',
  styleUrls: ['./product-selection-savings.component.less'],
  providers: [ProductSelectionSavingsService]
})

export class ProductSelectionSavingsComponent implements OnInit {
  products: any;
  selectMember: boolean = false;
  plans: any = [];
  constructor(private savingsService: ProductSelectionSavingsService, private router: Router) {
    this.savingsService.getData().subscribe(data => {
      this.products = data;
    });
  }
  ngOnInit() {
  }


  storePlans(checked, plan) {
    if ((checked == true) && (this.plans.indexOf(plan) == -1)) {
      this.plans.push(plan);
    }
    if ((checked == false) && (this.plans.indexOf(plan) > -1)) {
      this.plans.splice((this.plans.indexOf(plan)), 1);
    }
    console.log(this.plans);
    localStorage.setItem("plans", JSON.stringify(this.plans));
  }
  gotoquotesavings() {
    this.router.navigate(['/quote-savings']);
  }
}
