import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input()
  label = "";
  @Input()
  errorMessage = "";
  @Input()
  showTip = true;

  input: any;

  @ContentChild(NgModel, { static: false }) model: NgModel | undefined;
  @ContentChild(FormControlName, { static: false }) control: FormControlName | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName.');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
