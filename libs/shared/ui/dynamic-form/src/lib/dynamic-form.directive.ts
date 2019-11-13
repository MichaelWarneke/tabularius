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
import { BaseComponent } from './templates/base.component';

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
          factory = this.resolver.resolveComponentFactory<BaseComponent>(
            InputComponent
          );
          break;
        case FormControlDate:
          factory = this.resolver.resolveComponentFactory<BaseComponent>(
            DatepickerComponent
          );
          break;
        case FormControlCheckbox:
          factory = this.resolver.resolveComponentFactory<BaseComponent>(
            CheckboxComponent
          );
          break;
        case FormControlSelect:
          factory = this.resolver.resolveComponentFactory<BaseComponent>(
            SelectComponent
          );
          break;
        case FormControlRadioButton:
          factory = this.resolver.resolveComponentFactory<BaseComponent>(
            RadioButtonComponent
          );
          break;
        case FormArray:
          factory = this.resolver.resolveComponentFactory<BaseComponent>(
            ArrayComponent
          );
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
