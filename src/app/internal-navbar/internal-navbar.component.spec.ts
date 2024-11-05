import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalNavbarComponent } from './internal-navbar.component';

describe('InternalNavbarComponent', () => {
  let component: InternalNavbarComponent;
  let fixture: ComponentFixture<InternalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
