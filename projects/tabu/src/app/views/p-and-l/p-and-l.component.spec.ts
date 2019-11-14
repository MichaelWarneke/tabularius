import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAndLComponent } from './p-and-l.component';

describe('PAndLComponent', () => {
  let component: PAndLComponent;
  let fixture: ComponentFixture<PAndLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAndLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAndLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
