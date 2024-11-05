import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerIntentComponent } from './buyer-intent.component';

describe('BuyerIntentComponent', () => {
  let component: BuyerIntentComponent;
  let fixture: ComponentFixture<BuyerIntentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerIntentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
