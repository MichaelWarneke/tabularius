import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  InputComponent,
  DatepickerComponent,
  CheckboxComponent,
  SelectComponent,
  RadioButtonComponent
} from './templates';
import { FormControlTextbox } from './models';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFormDirective implements OnInit {
  @Input() val: FormControlTextbox | null = null;
  @Input() group: FormGroup | null = null;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    if (this.val && this.group) {
      let factory;
      switch (this.val.controlType) {
        case 'input':
          factory = this.resolver.resolveComponentFactory(InputComponent);
          break;
        case 'datepicker':
          factory = this.resolver.resolveComponentFactory(DatepickerComponent);
          break;
        case 'checkbox':
          factory = this.resolver.resolveComponentFactory(CheckboxComponent);
          break;
        case 'select':
          factory = this.resolver.resolveComponentFactory(SelectComponent);
          break;
        case 'radio-button':
          factory = this.resolver.resolveComponentFactory(RadioButtonComponent);
          break;
      }
      if (factory) {
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.val = this.val;
        this.componentRef.instance.group = this.group;
      }
    }
  }
}
