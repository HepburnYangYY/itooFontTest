import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnlineEvaluationComponent } from './student-online-evaluation.component';

describe('StudentOnlineEvaluationComponent', () => {
  let component: StudentOnlineEvaluationComponent;
  let fixture: ComponentFixture<StudentOnlineEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOnlineEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnlineEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
