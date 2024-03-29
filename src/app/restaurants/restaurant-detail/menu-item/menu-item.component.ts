import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('showMenuItems', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

  @Input()
  menuItem!: MenuItem;
  @Output() add = new EventEmitter();
  @Output() decrease = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

  emitDecreaseEvent() {
    this.decrease.emit(this.menuItem);
  }

}
