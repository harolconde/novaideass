import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommentsUserComponent } from './all-comments-user.component';

describe('AllCommentsUserComponent', () => {
  let component: AllCommentsUserComponent;
  let fixture: ComponentFixture<AllCommentsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCommentsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
