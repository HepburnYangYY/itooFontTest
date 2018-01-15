import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreManageComponent } from './score-manage.component';

describe('ScoreManageComponent', () => {
  let component: ScoreManageComponent;
  let fixture: ComponentFixture<ScoreManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
