import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritymanageComponent } from './authoritymanage.component';

describe('AuthoritymanageComponent', () => {
  let component: AuthoritymanageComponent;
  let fixture: ComponentFixture<AuthoritymanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoritymanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoritymanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
