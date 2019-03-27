import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputComponent, DatepickerComponent } from "./templates";
import { FormControlTextbox } from './models';

const componentMapper = {
  'input': InputComponent,
  'datepicker': DatepickerComponent
};
@Directive({
  selector: "[dynamicField]"
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
    if(this.val && this.group) {
      let factory;
      switch(this.val.controlType) {
        case 'input': factory = this.resolver.resolveComponentFactory(InputComponent); break;
        case 'datepicker': factory = this.resolver.resolveComponentFactory(DatepickerComponent); break;
      }
      if(factory) {
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.val = this.val;
        this.componentRef.instance.group = this.group;
      }
    }
  }
}