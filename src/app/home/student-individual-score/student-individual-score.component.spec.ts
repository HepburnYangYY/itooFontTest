import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIndividualScoreComponent } from './student-individual-score.component';

describe('StudentIndividualScoreComponent', () => {
  let component: StudentIndividualScoreComponent;
  let fixture: ComponentFixture<StudentIndividualScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIndividualScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIndividualScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
