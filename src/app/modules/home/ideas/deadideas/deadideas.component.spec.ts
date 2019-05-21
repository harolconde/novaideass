import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadideasComponent } from './deadideas.component';

describe('DeadideasComponent', () => {
  let component: DeadideasComponent;
  let fixture: ComponentFixture<DeadideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
