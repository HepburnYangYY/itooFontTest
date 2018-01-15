import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurriculumComponent } from './my-curriculum.component';

describe('MyCurriculumComponent', () => {
  let component: MyCurriculumComponent;
  let fixture: ComponentFixture<MyCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
