import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input()
  shippingCosts: number = 0;
  @Input()
  itemsValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  total(): number {
    return this.shippingCosts + this.itemsValue;
  }
}
