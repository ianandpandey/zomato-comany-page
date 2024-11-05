import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartsComponent } from './org-charts.component';

describe('OrgChartsComponent', () => {
  let component: OrgChartsComponent;
  let fixture: ComponentFixture<OrgChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
