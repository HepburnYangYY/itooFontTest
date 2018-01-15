import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnlineExamComponent } from './student-online-exam.component';

describe('StudentOnlineExamComponent', () => {
  let component: StudentOnlineExamComponent;
  let fixture: ComponentFixture<StudentOnlineExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOnlineExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnlineExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
