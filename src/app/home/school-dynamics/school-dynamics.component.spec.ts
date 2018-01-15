import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDynamicsComponent } from './school-dynamics.component';

describe('SchoolDynamicsComponent', () => {
  let component: SchoolDynamicsComponent;
  let fixture: ComponentFixture<SchoolDynamicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolDynamicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
