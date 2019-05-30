import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIdeasUserComponent } from './all-ideas-user.component';

describe('AllIdeasUserComponent', () => {
  let component: AllIdeasUserComponent;
  let fixture: ComponentFixture<AllIdeasUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIdeasUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIdeasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
