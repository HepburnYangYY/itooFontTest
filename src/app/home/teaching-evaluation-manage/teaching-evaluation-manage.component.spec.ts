import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingEvaluationManageComponent } from './teaching-evaluation-manage.component';

describe('TeachingEvaluationManageComponent', () => {
  let component: TeachingEvaluationManageComponent;
  let fixture: ComponentFixture<TeachingEvaluationManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingEvaluationManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingEvaluationManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
