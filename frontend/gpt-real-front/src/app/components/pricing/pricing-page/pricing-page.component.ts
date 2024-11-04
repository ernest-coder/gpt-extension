import { Component, OnInit } from '@angular/core';
import { Pricing, pricings } from 'src/app/shared/models/pricing.models';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  prices:Pricing[] | undefined
  
  constructor() {}

    ngOnInit(): void {
      this.prices = pricings
    }
}
