import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarlateralComponent } from './barlateral.component';

describe('BarlateralComponent', () => {
  let component: BarlateralComponent;
  let fixture: ComponentFixture<BarlateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarlateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
