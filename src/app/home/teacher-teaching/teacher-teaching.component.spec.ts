import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTeachingComponent } from './teacher-teaching.component';

describe('TeacherTeachingComponent', () => {
  let component: TeacherTeachingComponent;
  let fixture: ComponentFixture<TeacherTeachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTeachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTeachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
