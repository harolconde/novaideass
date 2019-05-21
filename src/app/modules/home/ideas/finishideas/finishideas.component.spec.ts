import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishideasComponent } from './finishideas.component';

describe('FinishideasComponent', () => {
  let component: FinishideasComponent;
  let fixture: ComponentFixture<FinishideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
