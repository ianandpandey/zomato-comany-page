import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTrendsComponent } from './employee-trends.component';

describe('EmployeeTrendsComponent', () => {
  let component: EmployeeTrendsComponent;
  let fixture: ComponentFixture<EmployeeTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
