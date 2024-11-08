import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewFinanceHighlightsComponent } from './overview-finance-highlights.component';

describe('OverviewFinanceHighlightsComponent', () => {
  let component: OverviewFinanceHighlightsComponent;
  let fixture: ComponentFixture<OverviewFinanceHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewFinanceHighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewFinanceHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
