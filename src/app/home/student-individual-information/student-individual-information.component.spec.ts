import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIndividualInformationComponent } from './student-individual-information.component';

describe('StudentIndividualInformationComponent', () => {
  let component: StudentIndividualInformationComponent;
  let fixture: ComponentFixture<StudentIndividualInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIndividualInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIndividualInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
