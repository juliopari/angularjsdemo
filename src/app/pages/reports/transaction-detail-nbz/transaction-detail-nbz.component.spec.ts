import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailNbzComponent } from './transaction-detail-nbz.component';

describe('TransactionDetailNbzComponent', () => {
  let component: TransactionDetailNbzComponent;
  let fixture: ComponentFixture<TransactionDetailNbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDetailNbzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailNbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
