import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshmanRegisterComponent } from './freshman-register.component';

describe('FreshmanRegisterComponent', () => {
  let component: FreshmanRegisterComponent;
  let fixture: ComponentFixture<FreshmanRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshmanRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshmanRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
