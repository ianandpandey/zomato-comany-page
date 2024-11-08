import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewRecentNewsComponent } from './overview-recent-news.component';

describe('OverviewRecentNewsComponent', () => {
  let component: OverviewRecentNewsComponent;
  let fixture: ComponentFixture<OverviewRecentNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewRecentNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewRecentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
