import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailEmpComponent } from './transaction-detail-emp.component';

describe('TransactionDetailEmpComponent', () => {
  let component: TransactionDetailEmpComponent;
  let fixture: ComponentFixture<TransactionDetailEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDetailEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
