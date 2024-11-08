import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCompanyProductsComponent } from './overview-company-products.component';

describe('OverviewCompanyProductsComponent', () => {
  let component: OverviewCompanyProductsComponent;
  let fixture: ComponentFixture<OverviewCompanyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewCompanyProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewCompanyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
