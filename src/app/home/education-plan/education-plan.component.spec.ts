import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPlanComponent } from './education-plan.component';

describe('EducationPlanComponent', () => {
  let component: EducationPlanComponent;
  let fixture: ComponentFixture<EducationPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
