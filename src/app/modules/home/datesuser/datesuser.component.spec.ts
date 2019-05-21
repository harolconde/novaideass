import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesuserComponent } from './datesuser.component';

describe('DatesuserComponent', () => {
  let component: DatesuserComponent;
  let fixture: ComponentFixture<DatesuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
