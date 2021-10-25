import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayComponent } from './array.component';
import { SharedModule } from '@tabularius/shared/ui';
import { GroupStubComponent } from '../test-stub.components';
import { FormGroup, FormControl } from '@angular/forms';

describe('ArrayComponent', () => {
  let component: ArrayComponent;
  let fixture: ComponentFixture<ArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ArrayComponent, GroupStubComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({ entries: new FormControl() });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
