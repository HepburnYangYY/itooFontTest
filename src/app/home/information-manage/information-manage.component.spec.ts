import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationManageComponent } from './information-manage.component';

describe('InformationManageComponent', () => {
  let component: InformationManageComponent;
  let fixture: ComponentFixture<InformationManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
