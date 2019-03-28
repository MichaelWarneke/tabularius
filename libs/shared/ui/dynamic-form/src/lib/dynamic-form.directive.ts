import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {
  InputComponent,
  DatepickerComponent,
  CheckboxComponent,
  SelectComponent,
  RadioButtonComponent,
  ArrayComponent
} from './templates';
import {
  FormControlTextbox,
  FormControlCheckbox,
  FormControlDate,
  FormControlRadioButton,
  FormControlSelect,
  FormControlArray,
  FormControlBase
} from './models';

@Directive({
  selector: '[tabuDynamicFormField]'
})
export class DynamicFormDirective implements OnInit {
  @Input() control: FormControlBase | FormArray | null = null;
  @Input() group: FormGroup | null = null;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    if (this.control && this.group) {
      let factory;
      switch (this.control.constructor) {
        case FormControlTextbox:
          factory = this.resolver.resolveComponentFactory(InputComponent);
          break;
        case FormControlDate:
          factory = this.resolver.resolveComponentFactory(DatepickerComponent);
          break;
        case FormControlCheckbox:
          factory = this.resolver.resolveComponentFactory(CheckboxComponent);
          break;
        case FormControlSelect:
          factory = this.resolver.resolveComponentFactory(SelectComponent);
          break;
        case FormControlRadioButton:
          factory = this.resolver.resolveComponentFactory(RadioButtonComponent);
          break;
        case FormArray:
          factory = this.resolver.resolveComponentFactory(ArrayComponent);
          console.warn('Array found :', this.control);
          break;
        default:
          console.warn('Other found :', this.control);
      }
      if (factory) {
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.control = this.control;
        this.componentRef.instance.group = this.group;
      }
    }
  }
}
