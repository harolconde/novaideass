import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaspostulateComponent } from './ideaspostulate.component';

describe('IdeaspostulateComponent', () => {
  let component: IdeaspostulateComponent;
  let fixture: ComponentFixture<IdeaspostulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaspostulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaspostulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
