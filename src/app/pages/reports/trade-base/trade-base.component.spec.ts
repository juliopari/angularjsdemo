import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBaseComponent } from './trade-base.component';

describe('TradeBaseComponent', () => {
  let component: TradeBaseComponent;
  let fixture: ComponentFixture<TradeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
