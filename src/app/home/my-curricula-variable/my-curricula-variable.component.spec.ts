import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurriculaVariableComponent } from './my-curricula-variable.component';

describe('MyCurriculaVariableComponent', () => {
  let component: MyCurriculaVariableComponent;
  let fixture: ComponentFixture<MyCurriculaVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCurriculaVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCurriculaVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
