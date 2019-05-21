import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiladministratorComponent } from './perfiladministrator.component';

describe('PerfiladministratorComponent', () => {
  let component: PerfiladministratorComponent;
  let fixture: ComponentFixture<PerfiladministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfiladministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiladministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
